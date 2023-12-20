/* eslint-disable @next/next/no-sync-scripts */
import Header from '@/components/header'
import SignUpForm from '@/components/signUp'
import PersonalInfo from '@/components/personalInfo'



export default function Home() {
  return (
   <>
   <Header/>
   <main className='flex min-h-screen flex-col items-center justify-between  bg-white'>
    {/* <SignUpForm/> */}
    <PersonalInfo/>
   </main>

 

   </>
  )
}
