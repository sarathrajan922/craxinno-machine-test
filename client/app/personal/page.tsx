'use client'

import React from "react";
import PersonalInfo from "@/components/personalInfo";
import Header from "@/components/header";

const PersonalInfoForm = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between  bg-white">
        <PersonalInfo />
      </main>
    </>
  );
};

export default PersonalInfoForm;
