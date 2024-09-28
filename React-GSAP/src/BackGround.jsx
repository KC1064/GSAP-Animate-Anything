import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const BackGround = () => {
  const circle = useRef();
  useGSAP(()=>{
    gsap.to(circle.current, {
      rotateZ:360,
      duration: 2,
      repeat:-1,
      yoyo:true
    })
  })
  return (
    <div className="h-[100vh] w-full bg-[#111]">
      <div ref={circle} className="h-[400px] w-[400px] bg-gradient-to-tr from-pink-400 via-yellow-300 to-blue-500 rounded-full"></div>
    </div>
  );
};

export default BackGround;
