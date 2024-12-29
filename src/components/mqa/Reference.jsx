import React from 'react'

function Reference() {
  return (
    <>
    <div className="flex justify-center">
          <div className="bg-slate-800 container lg:w-2/3 grid lg:flex justify-center p-4 rounded-md border relative py-16">
          <div className="w-full flex justify-center absolute top-4 bg-red-300-translate-x-1/2 text-white text-xl">Info lanjut?</div>
          <div className="w-full grid lg:flex">
          <div className=" w-full p-6 border-b-1 lg:border-b-0 lg:border-r-1 md:border-r-1">
            <div className="grid justify-center space-y-5 text-white">
              <p className="text-xl font-bold ">Speak with Education Advisor</p>
              <p className="text-md text-center">Get in touch about our programs</p>
              <div className="grid justify-center space-y-1">
              <a href="tel:+60361435073" className="p-1 flex items-center justify-center px-6 w-full border rounded-full">
                <h className="text-lg ">WhatsUp Us</h>
              </a>
              <p>Or call us now <a href="tel:+60361435073"  className="text-blue-600">Contact Us</a></p>
              </div>
            </div>
          </div>
          <div className="w-full p-6">
            <div className="grid justify-center space-y-5 text-white">
              <p className="text-xl font-bold text-center">Download the module programe</p>
              <p className="text-md text-center">Get detailed programme insights with our education advisor</p>
              <div className="grid justify-center space-y-1">
              <a href="tel:+60361435073" className="p-1 flex items-center justify-center px-6 w-full border rounded-full">
                <h className="text-lg ">Download</h>
              </a>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
        </>
  )
}

export default Reference