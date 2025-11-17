"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [showPassword, setShowPassword] = useState(false);

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
          <h3 className="font-semibold text-5xl">Login</h3>
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
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              required
              className="p-4 border rounded-lg text-[#878787] text-lg w-full pr-12 focus:ring-2 focus:ring-blue-400 lg:w-[400px]"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col relative">
            <label htmlFor="password" className="mb-2 font-medium text-[#222222] text-base">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password")}
              required
              className="p-4 border rounded-lg text-[#878787] text-lg w-full pr-12 focus:ring-2 focus:ring-blue-400 lg:w-[400px]"
            />
            <span
              className="absolute right-3 top-[62px] -translate-y-1/2 cursor-pointer text-gray-500 p-2"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
            </span>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#002147] text-lg rounded-2xl p-2 text-white"
          >
            Login
          </Button>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/auth/forgot-password"
              className="text-orange-400 hover:underline text-base"
            >
              Forgot password?
            </Link>
          </div>
        </form>
      </div>

      {/* Right Side - Illustration */}
      <div className="lg:w-1/2 w-full flex justify-center items-center">
       <Image
          src='/login.png'
          alt="login illustration"
          width={500}
          height={500}
          className="object-contain lg:object-cover"
        /> 
      </div>

    </div>
  );
};

export default LoginForm;
