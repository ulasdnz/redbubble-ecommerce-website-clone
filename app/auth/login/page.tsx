"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useRouter } from "next/navigation";

const page = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    console.log("mail: ", mail);
    console.log("password: ", password);
    if (mail == "ulasdeniz" && password == "asdasd") {
      localStorage.setItem("auth","true")
      router.push("/user");
    }else{
      alert("mail or password is incorrect")
    }
  };

  return (
    <div className="w-full h-auto">
      <div className="w-[400px] flex flex-col items-center ml-auto mr-auto">
        <div className="mt-12 pt-6 text-2xl	font-medium	leading-9 pb-1 text-[#40354e]">
          Log In
        </div>
        <div className="mb-16">
          Need an account?
          <a href="/auth/signup" className="font-semibold pl-2 ">
            Sign Up
          </a>
        </div>
        <div className="w-full">
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            label="Email or Username"
            variant="standard"
            value={mail}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setMail(event.target.value);
            }}
          />
        </div>
        <div className="w-full mt-8">
          <TextField
            sx={{ width: "100%" }}
            id="standard-password-input"
            label="Password"
            type="password"
            variant="standard"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <div className="w-full flex justify-between items-center m-10 ">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember Me"
            style={{ fontSize: "14px" }}
          />
          <div>Lost Password?</div>
        </div>
        <div className="ml-auto mr-auto text-[#8c95a5] text-sm mb-8">
          By clicking Log In, you agree to our User Agreement
        </div>
        <div
          className="flex justify-center items-center bg-red-500 w-full rounded-full h-12 text-sm 
        font-medium text-white cursor-pointer"
          onClick={handleLogin}
        >
          Log In
        </div>
        <div className="mt-6 text-sm mb-[96px] text-center text-[#8c95a5]">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </div>
      </div>
    </div>
  );
};

export default page;
