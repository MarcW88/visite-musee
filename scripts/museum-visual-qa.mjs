import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
const origin = process.env.VISUAL_BASE_URL || 'https://visite-musee.fr';
const routes = ['/', '/musees/', '/musees/paris/', '/musee/louvre/', '/guides/', '/guides/comment-preparer-visite-musee/', '/regions/', '/themes/', '/visiter/'];
const issues=[]; const pages=[];
const browser=await chromium.launch({headless:true});
try {
 for (const device of [{name:'desktop',width:1440,height:900},{name:'mobile',width:390,height:844}]) {
  const context=await browser.newContext({viewport:{width:device.width,height:device.height},reducedMotion:'reduce'});
  for (const route of routes) {
   const page=await context.newPage(); const errors=[];
   page.on('pageerror',e=>errors.push(e.message));
   try {
    const response=await page.goto(new URL(route,origin).href,{waitUntil:'domcontentloaded',timeout:30000});
    await page.locator('body').waitFor();
    await page.evaluate(()=>document.fonts?.ready);
    const metrics=await page.evaluate(()=>({title:document.title,h1:document.querySelectorAll('h1').length,overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth+2,body:document.body.innerText.length}));
    const result={route,device:device.name,status:response?.status(),...metrics,errors};
    pages.push(result);
    if (!response?.ok()||metrics.overflow||metrics.h1!==1||errors.length||metrics.body<100) issues.push(result);
    await mkdir('.artifacts/museum-visual/'+device.name,{recursive:true});
    await page.screenshot({path:'.artifacts/museum-visual/'+device.name+'/'+(route.replaceAll('/','-')||'home')+'.png',fullPage:true,animations:'disabled'});
   } catch(e) {issues.push({route,device:device.name,error:String(e)});}
   finally {await page.close();}
  }
  await context.close();
 }
} finally {await browser.close();}
await mkdir('.artifacts/museum-visual',{recursive:true});
await writeFile('.artifacts/museum-visual/report.json',JSON.stringify({origin,pages,issues},null,2));
console.log(JSON.stringify({tested:pages.length,issues:issues.length,details:issues},null,2));
if(issues.length) process.exitCode=1;
