/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface Inputs {
  email: string;
  mobile: string;
  password: string;
  conformPassword: string;
}

const userInfoSchema = z.object({
  email: z.string().email({ message: "An email is required!" }),
  mobile: z
    .string()
    .min(10, { message: "Mobile number must be at least 10 digits long" }).max(10, {message:"Mobile number should be 10 digits only"})
    .refine((value) => /^\d+$/.test(value), {
      message: "Mobile number must contain only digits",
    }),
  conformPassword: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .refine((value) => /[A-Z]/.test(value) && /\d/.test(value), {
      message:
        "Password must contain at least one uppercase letter and one number",
    }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .refine((value) => /[A-Z]/.test(value) && /\d/.test(value), {
      message:
        "Password must contain at least one uppercase letter and one number",
    }),
});

const SignUpForm = () => {
  const [confirmPassError, setConfirmPassError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      mobile: "",
      password: "",
      conformPassword: "",
    },
    resolver: zodResolver(userInfoSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.password != data.conformPassword) {
      setConfirmPassError(true);
      setTimeout(() => {
        setConfirmPassError(false);
      }, 2000);
      return;
    }
    //here function call
  };

  return (
    <>
      <div className="text-black flex mt-10 flex-col gap-3 w-96">
        <div className="flex flex-col justify-center mt-5  mx-auto">
          <h1 className="text-2xl text-bold items-center font-semibold">
            Create your account
          </h1>
        </div>
        <p className="items-center text-xs  mt-0 mx-auto text-gray-400 font-medium">
          set-up your RentlyPass in as little as 2 minutes.
        </p>

        <h3 className="text-gray-500 text-bold mt-6">Contact Details</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative w-full min-w-[420px] h-12 mb-3">
            <input
              {...register("email")}
              disabled={isSubmitting}
              type="text"
              id="email"
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
              placeholder=""
            />

            <label className="text-gray-400 flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
              Email Address
            </label>
          </div>
          {errors.email?.message && (
            <div className="text-red-500 text-sm">{errors.email?.message}</div>
          )}
          <div className="relative w-full min-w-[420px] h-12 mb-2 ">
            <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                data-slot="icon"
                className="w-4 h-4 text-gray-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              {...register("mobile")}
              disabled={isSubmitting}
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
              placeholder=" "
            />
            <label className="text-gray-400 flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
              Mobile Number
            </label>
          </div>
          {errors.mobile?.message && (
            <div className="text-red-500 text-sm">{errors.mobile?.message}</div>
          )}
          <h3 className="text-gray-500 text-bold">Set a Password</h3>
          <div className="relative w-full min-w-[420px] h-12 my-2">
            <input
              {...register("password")}
              disabled={isSubmitting}
              type="password"
              id="password"
              name="password"
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
              placeholder=" "
            />

            <label className="text-gray-400 flex w-full h-full  select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
              Create Password
            </label>
          </div>
          {errors.password?.message && (
            <div className="text-red-500 text-sm">
              {errors.password?.message}
            </div>
          )}
          <div className="relative w-full min-w-[420px] h-12 mb-2">
            <input
              {...register("conformPassword")}
              disabled={isSubmitting}
              name="conformPassword"
              type="password"
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
              placeholder=" "
            />
            <label className="text-gray-400 flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
              Conform Password
            </label>
          </div>
          {errors.conformPassword?.message || confirmPassError ? (
            <div className="text-red-500 text-sm">
              {confirmPassError
                ? "Passwords do not match."
                : errors.conformPassword?.message}
            </div>
          ) : null}
          <div className="text-xs text-gray-400 font-medium flex gap-2 mb-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                data-slot="icon"
                className="w-4 h-4 text-gray-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <p>
              {" "}
              We need a password to keep your information safe. But don't worry,
              we'll also send your custom RentlyPass URL via email.
            </p>
          </div>

          <button
            className="min-w-[420px] h-12 select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-sm text-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            disabled={isSubmitting}
          >
            Create your account
          </button>
        </form>

        <div className="text-xs text-gray-400 font-medium">
          By clicking 'Create your account', you are agreeing to our{" "}
          <u>Terms & Conditions and Privacy Policy</u>.
        </div>
        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
      </div>
    </>
  );
};

export default SignUpForm;
