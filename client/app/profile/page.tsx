'use client'

import React from "react";
import ProfileComponent from "@/components/profile";
import Header from "@/components/header";
import { Provider } from "react-redux";
import store from "@/features/redux/app/Store";

const Profile = () => {
  return (
    <Provider store={store}>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between  bg-white">
        <ProfileComponent />
      </main>
    </Provider>
  );
};

export default Profile;