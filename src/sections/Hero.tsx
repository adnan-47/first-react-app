"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import Powershell from "@/assets/powershell.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef } from "react";


export const Hero = () => {
  const heroRef= useRef(null);
  const { scrollYProgress } = useScroll(
    {
        target: heroRef,
        offset: ["start end","end start"],
    }
  );
  const translateY = useTransform(scrollYProgress, [0, 1], [150,-150]);
  

  return (
   <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip ">
    <div className="container">
      <div className="md:flex items-center">
      <div className="md:w-[478px]">
        <div className="tag">Version 1.0 is here</div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter  bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6 ">
        Make Your cli to next level
        </h1>
        <p className="text-xl text-[#010d3e] tracking-tight mt-6">
          Customize your powershell cli terminal into next level with
          beautiful icon and theme.Boost your productivity with the history 
          function   
        </p>
        <div className="flex gap-1 items-center mt-[30px]">
          <button className="btn btn-primary">Get for FREE</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowIcon  className="h-5 w-5" />
            </button>
        </div>
      </div>
      <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
        <motion.img 
        src={Powershell.src} alt="powershell_logo" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-20 lg:left-0"
        animate={{
        translateY: [-20, 20],
        }}
        transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 4,
        ease:"easeInOut",
        }}

        />
      <motion.img src={cylinderImage.src} width={220} height={220} alt="cylinderImage"  className="hidden md:block -top-10 -left-32 md:absolute"  
      style={
        { 
          translateY: translateY,
        }
      }
      />
      <motion.img src={noodleImage.src} width={220} alt="noodleImage" className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
      style={
        {
          rotate:30,
          translateY: translateY,
        }
      }
      />
      </div>
      </div>
    </div>

  </section>
  
);
};
