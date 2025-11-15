"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";



type FormValues = {
  email: string;
  password: string;
};

const ForgotPassword = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();


  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 gap-24 ">

      {/* Left Side - Form */}
      <div className="lg:w-1/2 w-full bg-white p-10 rounded-2xl shadow-2xl overflow-auto">
    
        <div className="flex justify-center items-center">
          <Image
            src='/service.png'
            alt="service image"
            width={100}
              height={100}
          />
        </div> 

        {/* Heading */}
        <div className="mt-4 text-center">
          <h3 className="font-semibold text-5xl">Forgot Password</h3>
          <p className="font-[Poppins] font-normal text-[14px] text-[#656565] py-4">
            Welcome back! Enter your details to securely <br />
            access your account.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium text-[#222222] text-base">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your name"
              {...register("email")}
              required
              className="p-4 border rounded-lg text-[#878787] text-lg w-full focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#002147] text-lg rounded-2xl p-6 text-white"
          >
          Send OTP
          </Button>
        </form>
      </div>

      {/* Right Side - Illustration */}
      <div className="lg:w-1/2 w-full flex justify-center items-center">
       <Image
          src='/forgot.png'
          alt="login illustration"
          width={500}
          height={500}
          className="object-contain lg:object-cover"
        /> 
      </div>

    </div>
  );
};

export default ForgotPassword;
