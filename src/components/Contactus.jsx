import React from 'react'
import Image from "next/image"


function contactus() {
  return (
    <main>
    
    <div className="hidden lg:block md:block w-full">
    <div className=" h-full flex w-full lg:grid-cols-2 justify-center">

      <div className="px-4 flex justify-end ">
          <Image
            className=" "
            src="/contactuslogo3.svg"
            alt="contactuslogo3"
            width="200"
            height="200"
            style={{
                objectFit:"contain",
            }}
            />
    </div>
    <div className="grid border-l-2 border-black px-6">
    <div className=" grid justify-start ">
        <h1 className="font-normal text-center text-2xl ">
          Hello there, welcome to
        </h1>
        <h2 className="font-normal text-center text-2xl">
           YEG Academy
        </h2>
        <h3 className="text-2xl text-center">
          <span className="font-bold text-2xl">Need Education Advice?</span> Call Us Now.
        </h3> 
        </div>

        <div className=" hidden lg:block md:block justify-start py-4 space-y-4 ">
        <div className=" grid justify-start">
      <div className="flex space-x-8">
            <div className="">
            <Image
              className=""
              src="/contactuslogo2.svg"
              alt="contactuslogo2"
              width="55"
              height="20"
              style={{
                objectFit:"contain",
              }}
                />
            </div>
            <a href="tel:+60361435073" className="flex items-center justify-center px-4 w-full border rounded-full">
              <h className="text-lg ">Get Our Adviser Now</h>
            </a>
          </div>
          </div>

        <div className=" grid justify-start space-y-4">
          <div className="flex space-x-8">
            <div className="">
            <Image
              className=""
              src="/contactuslogo1.svg"
              alt="contactuslogo1"
              width="55"
              height="20"
              style={{
                objectFit:"contain",
              }}
                />
            </div>
            <a href="../borangyeg" className="flex items-center justify-center px-4 w-full border rounded-full">
              <h className="text-lg">Book an appoitment now</h>
            </a>
          </div>
        </div> 
    </div>
      </div> 
    </div>         
</div>



<div className=" lg:hidden md:hidden h-full w-full grid-cols-1 space-y-4">
<div className="px-4 flex justify-center ">
    <Image
      className=" "
      src="/contactuslogo3.svg"
      alt="contactuslogo3"
      width="200"
      height="200"
      style={{
          objectFit:"contain",
      }}
      />
</div>

<div className="grid px-6">
<div className="grid border-t-2 border-black justify-start py-2">
  <h1 className="font-normal text-center text-2xl ">
    Hello there, welcome to
  </h1>
  <h2 className="font-normal text-center text-2xl">
     YEG Academy
  </h2>
  <h3 className="text-2xl text-center">
    <span className="font-bold text-2xl">Need Education Advice?</span> Call Us Now.
  </h3> 
  </div>

  <div className=" lg:hidden justify-start py-3 space-y-4 ">
  <div className="grid justify-start space-y-4">
<div className="flex space-x-8">
      <div className="">
      <Image
        className=""
        src="/contactuslogo2.svg"
        alt="contactuslogo2"
        width="55"
        height="20"
        style={{
          objectFit:"contain",
        }}
          />
      </div>
      <a href="tel:+60361435073" className="flex items-center justify-center px-6 w-full border rounded-full">
        <h className="text-lg ">Get Our Adviser Now</h>
      </a>
    </div>
    </div>

  <div className=" grid justify-start space-y-4">
    <div className="flex space-x-8">
      <div className="">
      <Image
        className=""
        src="/contactuslogo1.svg"
        alt="contactuslogo1"
        width="55"
        height="20"
        style={{
          objectFit:"contain",
        }}
          />
      </div>
      <a href="../borangyeg" className="flex items-center justify-center px-4 w-full border rounded-full">
        <h className="text-lg">Book an apoitment now</h>
      </a>
    </div>
  </div> 
</div>
</div> 
</div>
</main>



  )
}

export default contactus