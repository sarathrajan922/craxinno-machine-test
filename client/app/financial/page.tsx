import React from "react";
import FinancialInfo from "@/components/financialInfo";
import Header from "@/components/header";

const FinancialInfoForm = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between  bg-white">
        <FinancialInfo />
      </main>
    </>
  );
};

export default FinancialInfoForm;
