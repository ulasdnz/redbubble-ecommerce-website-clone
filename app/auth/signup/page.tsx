"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ToggleCard from "@/components/auth/toggleCard";

const page = () => {
  const [selectedCard, setSelectedCard] = useState<string>("right");

  return (
    <div className="w-full h-auto">
      <div className="w-[400px] flex flex-col items-center ml-auto mr-auto">
        <div className="mt-12 pt-6 text-xl	font-medium	leading-9 pb-1 text-[#40354e]">
          Join Redbubble
        </div>
        <div className="mb-8 mt-4 text-center ">
          Sign up as a customer for 20% off your first order. Your coupon will
          be emailed after sign up.
        </div>
        <div className="flex mb-3">
          <ToggleCard
            title="Artist signup"
            description="Set up shop and start selling your designs"
            direction="left"
            handleSelection={(direction: string) => setSelectedCard(direction)}
            isSelected={selectedCard === "left"}
          />
          <ToggleCard
            title="Customer signup"
            description="Browse the marketplace and find your thing"
            direction="right"
            handleSelection={(direction: string) => setSelectedCard(direction)}
            isSelected={selectedCard === "right"}
          />
        </div>
        <div className="w-full">
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            label="Email"
            variant="standard"
          />
        </div>
        <div className="w-full mt-8">
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            label={selectedCard == "left" ? "Shop name" : "Username"}
            variant="standard"
          />
        </div>
        <div className="w-full mt-8">
          <TextField
            sx={{ width: "100%" }}
            id="standard-password-input"
            label="Password"
            type="password"
            variant="standard"
          />
        </div>

        <div className="w-full flex justify-between items-center mt-8 mb-4">
          <FormControlLabel
            control={<Checkbox />}
            label="Email me special offers and artist news."
            style={{ color: "rgb(140, 149, 165)", fontSize: "14px !important" }}
          />
        </div>
        <div
          className="flex justify-center items-center bg-red-500 w-full rounded-full h-12 text-sm 
        font-medium text-white cursor-pointer text-center"
        >
          Log In
        </div>
        <div className="my-7">
          Already have an account?
          <a href="/signup" className="font-semibold pl-2 ">
            Log In
          </a>
        </div>
        <div className="ml-auto mr-auto text-[#8c95a5] text-sm text-center mb-7">
          By clicking Sign Up, you agree to our
          <span className="font-semibold"> User Agreement</span> and
          <span className="font-semibold"> Privacy Policy.</span>
        </div>

        <div className="text-sm mb-[96px] text-center text-[#8c95a5]">
          This site is protected by reCAPTCHA and the Google
          <span className="font-semibold"> Privacy Policy</span> and 
          <span className="font-semibold"> Terms of Service apply.</span>
        </div>
      </div>
    </div>
  );
};

export default page;
