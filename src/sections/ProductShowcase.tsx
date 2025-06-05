"use client";

import product from '@/assets/product.png';
import toollogo from '@/assets/toollogo.png';
import webdevtool from '@/assets/webdevtool.png';
import Image from 'next/image';
import {motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress  } =useScroll({
    target: sectionRef,
    offset: ["start end","end start"]
  });

  const translateY =useTransform (scrollYProgress, [0,1],[150,-150])

  return (
    <section ref={sectionRef} className='bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip'>
      <div className="container">
        <div className='section-heading'>
        <div className='flex justify-center'>
        <div className='tag'>Boost your productivity</div>
        </div>
        <h2 className='section-title mt-5'>
          The next level look for your powershell terminal</h2>
        <p className='section-description mt-5'>Effortlessly turn your powershell terminal into a beautiful
          one.Boost your productivity by using history function </p>
          </div>
          <div className='relative'>
          <Image src={product} alt='Product Image' className='mt-10' />
          <motion.img src={toollogo.src} alt='Tool Logo' height={262} width={262} className='hidden md:block absolute -right-36 -top-32'
          style={
            {
              translateY,
            }
          }
          />  
          <motion.img src={webdevtool.src} alt='WebDev Tool' height={100} width={100}  className='hidden md:block  absolute bottom-6 -left-[60px] lg:-left-[150px] lg:-bottom-8 lg:w-[200px] '
           style={
            {
              translateY,
            }
          }
          />
          </div>
      </div>
    </section>



  );
};
