import { progress, scale, transform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 import Lenis from "lenis"
import { Magnet, Pin } from "lucide-react";

 gsap.registerPlugin(ScrollTrigger);

 const lenis =new Lenis();
 lenis.on("scroll", ScrollTrigger.update);
 gsap.ticker.add((time) =>{
    lenis.raf(time*1000);
 }); gsap.ticker.lagSmoothing(0);

 const animtedIcons=document.querySelector("animated-icons");
 const iconElements=document.querySelectorAll(".animated-icon");
 const textSegments=document.querySelectorAll(".text-segment");
 const placeholder=document.querySelectorAll(".placeholder-icon");
 const heroHeader=document.querySelector(".hero-header");
 const heroSection=document.querySelector(".hero");


 const textAnimationOrder=[];
  textSegments.forEach((segment,index)=>{
    textAnimationOrder.push({segment,originalIndex:index})
  })

  for(let i=textAnimationOrder.length-1;i>0;i--) {
    const j= Math.floor(Math.random()*(i+1));
 [textAnimationOrder[i],textAnimationOrder[j]]=[textAnimationOrder[j],textAnimationOrder[i]];
  }

  const isMobile =window.innerWidth<=1000;
  const headerIconSize = isMobile?30:60;
   const currentIconSize = iconElements[0].getBoundingClientRect().width;
   const exactScale=headerIconSize/currentIconSize;

   ScrollTrigger.create({
    trigger:".hero",
    start:"top top",
    end:`+=${window.innerHeight*8}px`,
    pin:true,
    pinSpacing:true,
    scrub:1,
    onUpdate:(self) =>{
        const progress=self.progress;
    }
    textSegments.forEach((segment)=>{
        gsap.set(segment,{opacity:0});
    });
  if(progress<=0.3) {
    const moveProgress=progress/0.3;
    const  containerMoveY= -window.innerHeight*0.3*moveProgress
  }
  if(progress<=0.15) {
    const headerProgress = progress/0.15;
    const headerMoveY = -50*headerProgress;
    const headerOpacity =1-headerProgress
 
  gsap.set(heroHeader,{
    transform:`translate*-50%,calc(-50% + ${headerMoveY}px)`,
    opacity:headerOpacity
  }) 
}else {
    gsap.set(heroHeader,{
        transform:`translate(-50%,calc(-50% +-50px))`,
        opacity:0
    })
}
if(window.duplicateIcons) {
    window.duplicateIcons.forEach((duplicate)=>{
         if(duplicate.parenNode) {
 duplicate.parenNode.removeChild(duplicate);
         }
    })
    window.duplicateIcons=null;
}
gsap.set(animtedIcons,{
    x:0,
    y:containerMoveY,
    scale:1,
    opacity:1,
})
iconElements.forEach((icon,index)=>{
    const staggerDelay = index*0.1;
    const iconStart = staggerDelay;
    const iconEnd = staggerDelay+0.5
})

const iconsProgress= gsap.utils.mapRange (
    iconsStart,iconEnd,0,1,moveProgress
);
const clampProgess = Math.max(0.Math.min(1,iconsProgress));
const startOffset=-containerMoveY;
const individualY= startOffset*(1-clampProgess);
gsap.set(icon,{
    x:0,y:individualY
})
});
}else if(progress<=0.6) {
    const scaleProgress = {progress-0.3}/0.3;

    gsap.set(heroHeader,{
        transform:`trnslate(-50%,calc(-50% +-50px))`,
        opacity:0
    })

    if(scaleProgress>=0.5) {
         heroSection.computedStyleMap.backgroundColor='#e3e3db';

    }else {
        heroSection.computedStyleMap.backgroundColor='#141414';
    }

    if(window.duplicateIcons) {
        window.duplicateIcons.forEach((duplicate)=>{
            if(duplicate.parenNode) {
                duplicate.parenNode.removeChild(duplicate);
            }
    })
    window.duplicateIcons=null;
    }
    const tragetCenterY=window.innerHeight/2;
    const tragetCenterX=window.innerWidth/2;
    const containerRect=animtedIcons.getBoundingClientRect();
    const currentCenterX= containerRect.left+containerRect.width/2;
    const currentCenterY=containerRect.top+containerRect.height/2;
    const deltaX=(tragetCenterX=currentCenterX)*scaleProgress;
   const deltaY=(tragetCenterY=currentCenterY)*scaleProgress;
   const baseY=-window.innerHeight*0.3;
   const currentScale=1+(exactScale-1)*scaleProgress;

   gsap.set(animatedIcons,{
    x:deltaX,
    y:baseY+deltaY,
    scale:currentScale
   });
   iconElements.forEach((icon)=>{
    gsap.set(icon,{x:0,y:0});
   })
}

else if(progress<=0.75) {
const moveProgress=(progress-0.6)/0.15;
gsap.set(heroHeader,{
    transform:`translate(-50%,calc(-50% +-50px))`,
    opacity:0
})
heroSection.style.backgroundColor='#e3e3db';
const targetCenterY=window.innerHeight/2;
const tragetCenterX=window.innerWidth/2;
const containerRect=animatedIcons.getBoundingClientRect();
const currentCenterX=containerRect.left+containerRect.width/2;
const currentCenterY =containerRect.top+containerRect.height/2;
const deltaX = tragetCenterX-currentCenterX;
const deltaY = tragetCenterY-currentCenterY;
const baseY = -window.innerHeight*0.3;

gsap.set(animtedIcons,{
    x:deltaX,
    y:baseY+deltaY,
    scale:exactScale,
    opacity:0
})
iconElements.forEach((icon)=>{
    gsap.set(icon,{x:0,y:0});
   })
if(!window.duplicateIcons) {
    window.duplicateIcons=[];
    iconElements.forEach((icon,index)=>{
        const duplicate ='duplicate-icon';
     duplicate.style.position="absolute";
     duplicate.style.width=headerIconSize+'px';
     duplicate.style.height=headerIconSize+'px';

     document.body.appendChild(duplicate)
     window.duplicateIcons.push(duplicate);
    })
}
if(window.duplicateIcons) {
    window.duplicateIcons.forEach((duplicate,index)=>{
        if(index<placeholder.length) {
            const iconReact=iconElements[index].getBoundingClientRect();
            const startCenterX=iconReact.left+iconReact.width/2;
            const startCenterY=iconReact.top+iconReact.height/2;
            const startPageX= startCenterX+window.pageXOffset
            const startPageY=startCenterY+window.pageYOffset;
            const targetRect =placeholder[index].getBoundingClientRect();
            const tragetCenterX=targetRect.left+targetRect.width/2;
            const tragetCenterY=targetRect.top+targetRect.height/2;
            const targetPageX= targetCenterX=window.pageXOffset;
            const targetPageY=targetCenterY+window.pageYOffset;
            const moveX= targetPageX-startPageX;
            const moveY=targetPageY-startPageY;
            let currentX=0;
            let currentY=0;
            if(moveProgress<=0.5) {
                const verticalProgress=moveProgress/0.5;
                currentY=moveY*verticalProgress;
            } else {
                const horizontalProgress =(moveProgress-0.5)/0.5;
                currentY=moveY;
                currentX=moveX*horizontalProgress;

const finalPageX= startPageX + currentX;
const finalPageY=startPageY+currentY;   
duplicate.style.left=finalPageX-headerIconSize/2+'px';
duplicate.style.top=finalPageY-headerIconSize/2+'px';
duplicate.style.opacity="1";
duplicate.style.display="flex";
    }
        }
    })
}else {
    gsap.set(heroHeader,{
        transform:`translate(-50%,calc(-50% +-100px))`,
        opacity:0
    })
    heroSection.style.backgroundColor='#e3e3db';
    gsap.set(animtedIcons,{opacity:0});
    if(window.duplicateIcons.forEach((duplicate,index)=>{
        if(index<placeholder.length) {
            const targetRect=placeholder[index].getBoundingClientRect();
            const tragetCenterX=targetRect.left+targetRect.width/2;
            const tragetCenterY=targetRect.top+targetRect.height/2;
            const targetPageX= tragetCenterX+window.pageXOffset;
            const targetPageY=tragetCenterY+window.pageYOffset;

            duplicate.style.left=targetPageX=headerIconSize/2+'px';
            duplicate.style.top=targetPageY=headerIconSize/2+'px';
            duplicate.style.opacity="1"
            duplicate.style.display="flex";
        }
    }))
}
textAnimationOrder.forEach((ite,randomIndex)=>{
    const segmentStart=0.75 +randomIndex*0.03;
    const segmentEnd=segmentStart+0.015;
    const segmentProgress= gsap.utils.mapRange(
        segmentStart,segmentEnd,0,1,progress
    );
    const clampledProgress =Math.max(0,Math.min(1,segmentProgress));
    gsap.set(ite.segment,{
    
        opacity:clampledProgress
    })
})
}