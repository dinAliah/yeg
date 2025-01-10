import React from 'react'
import Image from "next/image"


function ContactUs() {
  return (
    <>
    <div className="">
    <div className="  w-[400px] hidden lg:block md:block bg-slate-800 rounded-l-xl ease-out ">
    <div className="absolute z-50 -left-9 bottom-4 bg-yellow-500 rounded-full p-2 w-[75px]">
      <Image
      className=""
      src="/icon/comment.png"
      width="58"
      height="2"
      style={{objectFit:"contain"}}/>
      </div>
      <p className="text-xl text-white text-end mr-4 py-1"><span className="font-bold text-xl">Need Education Advice?</span> Call Us Now.</p> 
      <div className=" hidden lg:block md:block justify-start py-2">
        <div className="grid justify-center gap-2">
            <div className="flex gap-2">
            <Image
            className=" "
            src="/icon/callcolour.png"
            alt="Whatsupcolour"
            width="25"
            height="2"
            style={{objectFit:"contain"}}/>
            <a href="tel:+60361435073" className="bg-white flex items-center justify-center px-4 w-full border rounded-full">Call Our Advisor</a>
            </div>
            <div className="flex gap-2">
            <Image
            className=" "
            src="/icon/Whatsupcolour.png"
            alt="Whatsupcolour"
            width="25"
            height="2"
            style={{objectFit:"contain"}}/>
            
                <a href="tel:+60361435073" className="bg-white flex items-center justify-center px-4 w-full border rounded-full">WhatsUp Us</a>
            </div>
          </div>
        </div>
      </div>
      </div>
</>
  )
}
export default ContactUs