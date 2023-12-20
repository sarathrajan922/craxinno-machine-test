"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { financialInfoSchema } from "@/validations/userFinancialInfo";

interface Inputs {
  [x: string]: string;
  additionalSavingInvestment: string;
}

const FinancialInfo: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectionError, setSelectionError] = useState(false);

  const handleSelectChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setSelectedValue(value);
    console.log(value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      additionalSavingInvestment: "",
    },
    resolver: zodResolver(financialInfoSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (selectedValue === "") {
      setSelectionError(true);
      setTimeout(() => {
        setSelectionError(false);
      }, 2000);
      return;
    }
    data.currentEmployeeStatus = selectedValue;
    console.log(data);
    //api call here
  };

  return (
    <div className="text-black flex mt-10 flex-col gap-3 w-96">
      <div className="flex flex-col justify-center mt-5  mx-auto">
        <div className="flex items-center gap-2 mb-3 mx-auto">
          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-9 max-w-[40px] h-9 max-h-[40px] text-xs bg-gray-200 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full"
            type="button"
          >
            <span className="absolute text-gray-500  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              1
            </span>
          </button>
          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-9 max-w-[40px] h-9 max-h-[40px] text-xs bg-sky-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              2
            </span>
          </button>
        </div>
        <h2 className="text-2xl text-bold items-center font-semibold">
          Financial Information
        </h2>
      </div>
      <p className="items-center text-xs mt-0 mx-auto text-gray-400 font-medium">
        All your information is stored securely.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative w-full min-w-[420px] mt-5 mb-7 h-12 ">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            What is your current employement status?
          </label>
          <select
            onChange={handleSelectChange}
            value={selectedValue}
            className="peer text-gray-400 h-full w-full rounded-[7px] border   bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-100 outline outline-0 transition-all  placeholder-shown:border-blue-gray-200  empty:!bg-gray-200 focus:border-2 focus:border-gray-300 focus:border-t-transparent focus:outline-1 disabled:border-0 disabled:bg-blue-gray-50"
          >
            <option>What is your current employement status?</option>
            <option value="Employed">Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Self-employed">Self-employed</option>
            <option value="Student">Student</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {selectionError && (
          <div className="text-red-500 text-sm">
            {"please select a status."}
          </div>
        )}
        <div className="relative w-full min-w-[420px] h-12 mt-10 mb-3">
          <input
            {...register("additionalSavingInvestment")}
            disabled={isSubmitting}
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
            placeholder=" "
          />
          <label className="text-gray-400 flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
            Additional savings/investments.
          </label>
        </div>
        {errors.additionalSavingInvestment?.message && (
          <div className="text-red-500 text-sm">
            {errors.additionalSavingInvestment?.message}
          </div>
        )}
        <button
          className="min-w-[420px] h-12 select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-sm text-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="submit"
          disabled={isSubmitting}
        >
          save and continue
        </button>
      </form>
      {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
    </div>
  );
};

export default FinancialInfo;
