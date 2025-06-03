import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";


export const CallToAction = () => {
  return (
  <section className="bg-gradient-to-b from-white to[#d2dcff] py-24 overflow-x-clip">
    <div className="container">
      <div className="section-heading relative">
      <h2 className="section-title">Get use from today</h2>
      <p className="section-description mt-5">
      Boost your workflow with the tool and turn powershell into a professional tool 
      </p>
      <Image src={starImage} alt="star Image" width={360} className="absolute -left-[350px] -top-[137px]" />
      <Image src={springImage} alt="spring Image " width={360} className="absolute -right-[331px] -top-[90px]" />
      </div>
      <div className="flex gap-2 mt-10 justify-center">

      
        <button className="btn btn-primary">Get it </button>
        <button className="btn btn-text">
          <span>Learn more</span>
          <ArrowRight className="h-5 w-5 gap-1" />
        </button>
      </div>
    </div>
  </section>


  );
};
