"use client";

import { useState } from "react";
import Link from 'next/link';

import Input from "./components/Input";
import Button from "./components/button";


const SigUp = () => {
  
  const [isLoading, setIsloading] = useState(false);
  const [inputValue, setinputValue] = useState('');

  const handleChange = (e: any) => {
    setinputValue(e.target.value);
  }

  return(   
    <div className="flex justify-center items-center bg-cyan-600 h-screen w-screen">
      <div className="flex flex-col mx-auto justify-center items-center bg-white rounded-lg">
        <form className="p-10 flex flex-col justify-center w-[500px] gap-10">
          <div>
            <h1 className="text-4xl font-bold text-cyan-500">Sigin</h1>
            <p>Fill in all the fields to register</p>
          </div>
          <div className="flex flex-col gap-10 justify-center items-center">
            <Input
              id="Names" 
              type="text"
              value={inputValue}
              text="Names"
              disabled={isLoading}
              onChange={() => handleChange}
            />
            <Input
              id="LastName" 
              type="text"
              value={inputValue}
              text="Last names"
              disabled={isLoading}
              onChange={() => handleChange}
            />
            <Input
              id="Email" 
              type="email"
              value={inputValue}
              text="Email"
              disabled={isLoading}
              onChange={() => handleChange}
            />
            <Input
              id="Password" 
              type="password"
              value={inputValue}
              text="Password"
              disabled={isLoading}
              onChange={() => handleChange}
            />
          </div>
          <Button 
            text="Sigin"
            disabled={isLoading}
          />
        </form>
        <p className="mb-5">Already you have an account? <Link href="/log-in" className=" text-cyan-600 font-semibold">Log in</Link></p>
      </div>
    </div>
  );
}

export default SigUp;