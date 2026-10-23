#!/usr/bin/env python3
"""Museum-native, fail-closed audit queue; no LLM call and no publication."""
import argparse
import hashlib
import json
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FAMILIES = {
    "musee": ("museum", 45),
    "musees": ("comparison", 30),
    "regions": ("comparison", 90),
    "departements": ("comparison", 90),
    "themes": ("comparison", 90),
    "inspiration": ("comparison", 90),
    "visiter": ("usage", 90),
    "guides": ("guide", 90),
    "expositions": ("museum", 14),
}
def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--limit", type=int, default=10)
    parser.add_argument("--route", action="append", default=[])
    parser.add_argument("--output", default=".artifacts/museum-audit-plan.json")
    args = parser.parse_args()
    if args.limit < 1: parser.error("--limit must be positive")
    chosen = []
    requested = set(args.route)
    found = set()
    for section, (family, cadence) in FAMILIES.items():
        for file in sorted((ROOT / section).glob("*/index.html")):
            url = "/" + file.parent.relative_to(ROOT).as_posix() + "/"
            if requested and url not in requested: continue
            found.add(url)
            skillbase = "museum" if family == "museum" else family
            required = [f".agents/skills/{skillbase}-analysis-workflow/SKILL.md", f".agents/skills/{skillbase}-content-workflow/SKILL.md"]
            if any(not (ROOT / p).is_file() for p in required):
                raise SystemExit(f"BLOCKED: missing skills for {url}: {required}")
            chosen.append({"url":url, "source":str(file.relative_to(ROOT)), "family":family,
                "analysis_skill":required[0], "content_skill":required[1], "cadence_days":cadence,
                "fingerprint":hashlib.sha256(file.read_bytes()).hexdigest(),
                "next_step":"AWAITING_AI_EDITORIAL_AUDIT", "publish_allowed":False})
    missing=requested-found
    if missing: raise SystemExit("BLOCKED: unsupported or missing pages: "+", ".join(sorted(missing)))
    output=ROOT / args.output
    if not output.resolve().is_relative_to(ROOT): raise SystemExit("BLOCKED: output outside repo")
    output.parent.mkdir(parents=True,exist_ok=True)
    data={"date":date.today().isoformat(),"status":"AWAITING_AI_EDITORIAL_AUDIT",
          "notes":"Queue preparation is not AI execution or a completed audit. Humanizer, anti-ai-slop, factuality and publication reviews require recorded evidence.",
          "pages":chosen[:args.limit],"total_candidates":len(chosen)}
    output.write_text(json.dumps(data,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print(f"Prepared {len(data['pages'])} pages of {len(chosen)}; status AWAITING_AI_EDITORIAL_AUDIT")
if __name__ == "__main__": main()
