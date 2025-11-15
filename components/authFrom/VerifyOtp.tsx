"use client";

import { useState, useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const OtpInput = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return; // allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move to next input automatically
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 gap-24">
      
        <div className="lg:w-1/2 w-full bg-white p-20 rounded-2xl shadow-2xl overflow-auto"> 
          <div className="flex justify-center items-center mt-4">
               <Image src="/service.png" alt="logo otp" width={100} height={100} />
          </div>
          <h2 className="text-3xl font-bold  text-center text-[#222222] my-6">Verify Your OTP</h2>

          <div className="flex items-center space-x-3 justify-center">
         {[0, 1].map((i) => (
  <input
    key={i}
    ref={(el) => {
      inputsRef.current[i] = el as HTMLInputElement;
    }}
    type="text"
    maxLength={1}
    value={otp[i]}
    onChange={(e) => handleChange(e.target.value, i)}
    onKeyDown={(e) => handleKeyDown(e, i)}
    className="w-12 h-12 text-center text-lg border rounded-lg focus:ring-2 focus:ring-blue-400 font-bold"
  />
))}

{[2, 3, 4, 5].map((i) => (
  <input
    key={i}
    ref={(el) => {
      inputsRef.current[i] = el as HTMLInputElement;
    }}
    type="text"
    maxLength={1}
    value={otp[i]}
    onChange={(e) => handleChange(e.target.value, i)}
    onKeyDown={(e) => handleKeyDown(e, i)}
    className="w-12 h-12 text-center text-lg border rounded-lg focus:ring-2 focus:ring-blue-400 font-bold"
  />
))}
          </div>
          <br />


          <Button
            type="submit"
            className="w-full bg-[#002147] text-lg rounded-2xl p-6 text-white  "
          >
            Verification
          </Button>

          <div className="py-4">
            <p className="font-semibold text-base text-[#656565] text-center">
              Don’t received code?{" "}
               <Link  href="/auth/create-New-Password"><span className="text-[#FF6F00] text-base font-semibold">
                Resent Now
              </span></Link>
            </p>
          </div>
        </div>


      <div className="lg:w-3/4 w-full flex justify-center items-center">
        <Image
          src="/verified.png"
          alt="login illustration"
          width={500}
          height={500}
          className="object-contain lg:object-cover"
        />
      </div>
    </div>
  );
};

export default OtpInput;
