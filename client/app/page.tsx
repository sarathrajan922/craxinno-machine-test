import Header from "@/components/header";
import SignUpForm from "@/components/signUp";
import PersonalInfo from "@/components/PersonalInfo";

export default function Home() {
  return (
    <>
       <Header/>
    
    <main className="flex min-h-screen flex-col items-center justify-between  bg-white">
   
    {/* <div className="text-black">
      Hello world
    </div> */}
    {/* <SignUpForm/> */}
    <PersonalInfo/>

    </main>
    </>
  )
}
