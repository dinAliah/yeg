import React from 'react'

function Reference() {
  return (
    <>
    <div id="target-section" className="w-full fixed bottom-0 flex justify-center p-6">
    <div className="flex justify-center">
      <div className="bg-green-800 container lg:w-2/3 grid lg:flex justify-center p-4 rounded-md border relative ">
      {/* <div className="w-full flex justify-center absolute top-4 bg-red-300-translate-x-1/2 text-white text-xl">Info lanjut?</div> */}
      <div className="w-full grid lg:flex ">
        <div className="grid justify-center space-y-5 text-white">
          <p className="text-xl font-bold text-center">Hubungi Education Advisor kami</p>
          <div className="grid justify-center space-y-1">
          <a href="https://wa.me/+601115403660" className="p-1 flex items-center justify-center px-6 w-full border rounded-full">
            <h className="text-lg ">WhatsUp Us</h>
          </a>
          <p>Or call us now <a href="tel:+601115403660"  className="text-blue-600">Contact Us</a></p>
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


