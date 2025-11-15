"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

type FormValues = {
  password: string;
  confirmPassword: string;
};

const CreateNewPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  // Watch password to validate confirmPassword
  const password = watch("password");

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 gap-24">
      {/* Left Side - Form */}
      <div className="lg:w-1/2 w-full bg-white p-10 rounded-2xl shadow-2xl overflow-auto">
        <div className="flex justify-center items-center">
          <Image
            src="/service.png"
            alt="service image"
            width={100}
            height={100}
          />
        </div>

        {/* Heading */}
        <div className="mt-4 text-center">
          <h3 className="font-semibold text-[36px] text-[#222222]">
            Create New Password
          </h3>
          <p className="font-[Poppins] font-normal text-[14px] text-[#656565] py-4">
            Set a new password to protect <br /> your account.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          {/* Password */}
          <div className="flex flex-col relative">
            <label
              htmlFor="password"
              className="mb-2 font-medium text-[#222222] text-base"
            >
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="p-4 border rounded-lg text-[#878787] text-lg w-full pr-12 focus:ring-2 focus:ring-blue-400 lg:w-[400px]"
            />
            <span
              className="absolute right-2 top-[62px] -translate-y-1/2 cursor-pointer text-gray-500 pr-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col relative">
            <label
              htmlFor="confirmPassword"
              className="mb-2 font-medium text-[#222222] text-base"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type={showConfirm ? "text" : "password"}
              placeholder="Re-type your password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="p-4 border rounded-lg text-[#878787] text-lg w-full pr-12 focus:ring-2 focus:ring-blue-400 lg:w-[400px]"
            />
            <span
              className="absolute right-2 top-[62px] -translate-y-1/2 cursor-pointer text-gray-500 pr-4"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <EyeOff size={24} /> : <Eye size={24} />}
            </span>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#002147] text-lg rounded-2xl p-6 text-white"
          >
            Reset Password
          </Button>
        </form>
      </div>

      {/* Right Side - Illustration */}
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        <Image
          src="/login.png"
          alt="login illustration"
          width={500}
          height={500}
          className="object-contain lg:object-cover"
        />
      </div>
    </div>
  );
};

export default CreateNewPassword;
