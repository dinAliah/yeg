"use client"
import React, {useState} from 'react';
import {useEffect} from 'react';
import Image from 'next/image'
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"


export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem1, setSelectedItem1] = useState(null);
    const [selectedItem2, setSelectedItem2] = useState(null);


    const [alertMessage, setAlertMessage] = useState('');
    const [emailError, setEmailError] = useState('');

  function Submit(e) {

    const emailValue = e.target.elements.Email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailRegex.test(emailValue)) {
      setEmailError('Email must be in a valid format.');
      alert('Email is incorrect!');
      return;
    }

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    formDatab.append("Program", selectedItem);
    formDatab.append("State", selectedItem2);
    

    fetch(
      "https://script.google.com/macros/s/AKfycbwjSeWQGqPFAWD4IlQiKwwyycb1JxyGFcC3EVkWrKoAIw6Z7vv0fS0TM9OyNrbZTCsM/exec",
      {
        method: "POST",
        body: formDatab
      }
      
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

      setAlertMessage('Form submitted successfully!');
      alert('Penghantaran Berjaya!, Pegawai kami akan menghubungi anda secepat mungkin');
  }

  // program yeg
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

  // // media
  //   const toggleDropdown1 = () => {
  //     setIsOpen1(!isOpen1);
  //   };

  //state  
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

 

    // program yeg
    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
      };

    // // media 
    //   const handleItemClick1 = (item) => {
    //     setSelectedItem1(item);
    //     setIsOpen1(false);
    //   };
    //state
    const handleItemClick2 = (item) => {
      setSelectedItem2(item);
      setIsOpen2(false);
    };
     
  return (
    <main>      
    <div className="w-full">
        <div className="p-4 lg:flex justify-center">     
      <div className=" w-full">
      <form className="backdrop-blur-lg w-full p-6 border space-y-3 rounded-lg shadow-lg" onSubmit={(e) => Submit(e)}>
        <h className="py-6 text-black text-3xl font-bold">Course Enquiry</h>
 
      <div className="grid rounded-md">
        <h className="">Nama</h>
      <input className="bg-gray-200 px-3  hover:shadow-md duration-500 rounded-md " placeholder="" name="Name" type="text" />
      </div>
      <div className="grid rounded-md">
        <h>Email</h>
      <input className="bg-gray-200 px-3 hover:shadow-md duration-500 rounded-md " 
        placeholder="" 
        name="Email" 
        type="text" />
      </div>
      <div className="grid lg:flex  ">
      <div className="grid">
            <h> Number Tel </h>
            <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="NumberPhone" type="text" />
          </div>
          <div className="grid ">
            <h>Umur</h>
            <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="Age" type="text" />
          </div>
      </div>
      
      <div className="w-full relative inline-block text-left">
        <div>Pilih Kerjaya</div>
      <button
        onClick={toggleDropdown} 
        name="Program"
        type="button"
        className=" bg-yellow-500 hover:bg-yellow-600 inline-flex justify-center w-full py-2 text-sm font-medium text-black  border border-transparent rounded-md focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-800"
      >
        {selectedItem ? selectedItem : "Select Programs"}
      </button>

      {isOpen && (
        <div className="w-full right-0 mt-2  origin-top-right bg-white border border-gray-200 divide-y  rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
        
          <div className="pl-6 text-sm bg-yellow-500">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("AVIATION - CABIN CREW")}
          > AVIATION - CABIN CREW </p>
          </div>
          <div className="pl-6 text-sm text-white bg-slate-600">
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("AVIATION - CUSTOMER SERVICE")}
          > AVIATION - CUSTOMER SERVICE </p> 
          </div>
          <div className="pl-6 text-sm text-white bg-slate-600">
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("AVIATION - GROUND HANDLING")}
          > AVIATION - GROUND HANDLING </p> 
          </div>
          <div className="pl-6 text-sm text-white bg-slate-600">
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("AVIATION - TICKETING")}
          > AVIATION - TICKETING </p> 
          </div>
        </div>
      )}
    </div>
    {/* <div className="grid space-y-1">
      <h>Nama Penjaga</h>
      <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="ParentName" type="text" />
      </div>
      <div className="grid space-y-1">
      <h>Nombor Penjaga</h>
      <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="ParentNumber"  type="text" />
      </div>  */}


    

          
      <div className="grid  text-left">
        <p className="py-1 text-black">Tempat Interview</p>
      <button
        onClick={toggleDropdown2} 
        name="Negeri"
        type="button"
        className="bg-yellow-500 hover:bg-yellow-600 inline-flex justify-center w-full px-8 py-2 text-sm font-medium text-black  border border-transparent rounded-md focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-800"
      >
        {selectedItem2 ? selectedItem2 : "Select State"}
      </button>

      {isOpen2 && (
        <div className="w-full right-0 mt-2  origin-top-right bg-white border border-gray-200 divide-y  rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
 
          <div className=" text-sm bg-yellow-500">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Perlis")}
          >
            Perlis
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Kedah")}
          >
            Kedah
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Pulau Pinang")}
          >
            Pulau Pinang
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Pahang")}
          >
            Pahang
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Kelantan")}
          >
            Kelantan
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Terengganu")}
          >
            Terengganu
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Perak")}
          >
            Perak
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Selangor")}
          >
            Selangor
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Kuala Lumpur")}
          >
            Kuala Lumpur
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Putrajaya")}
          >
            Putrajaya
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Melaka")}
          >
            Melaka
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Negeri Sembilan")}
          >
            Negeri Sembilan
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Johor")}
          >
            Johor
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Sabah")}
          >
            Sabah
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Serawak")}
          >
            Serawak
          </p>
          </div>     
        </div>
      )}
    </div>      
    <div className="pt-4">
    <button className="px-6 py-2 border rounded-md bg-yellow-500 hover:bg-yellow-600 hover:shadow-md duration-300" name="Submit" type="submit" >Submit</button>
    </div>
        </form>
        {emailError && (
        <div className="alert">
          {emailError}
        </div>
      )}

      {alertMessage && (
        <div className="alert">
          {alertMessage}
        </div>
        )}
    </div>
    </div> 
    </div>
    
   
    </main>
  );
}
















// "use client"
// import React from 'react'

// export default function page() {
//     function Submit(e) {
//         const formEle = document.querySelector("form");
//         const formDatab = new FormData(formEle);
//         fetch(
//           "https://script.google.com/macros/s/AKfycbxGDBvXOji8jirgC_tVHaOTWkKzExfA3KXms1TFcQWLCz1UwkGlvkEtD6BVqzNG0hZfUw/exec",
//           {
//             method: "POST",
//             body: formDatab
//           }
//         )
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       }

//   return (
//     <div className=" py-20 flex justify-center">
        
//         <form className="bg-slate-100 w-1/4 border grid justify-center p-3 space-y-4 rounded-lg shadow-lg" onSubmit={(e) => Submit(e)}>
//         <div className="py-4">
//             <h>FROM YEG</h>
//         </div>
//             <div className="border rounded-md hover:shadow-md duration-500">
//                 <input 
//                 className="py-2 "
//                 id="name"
//                 type="text"
//                 placeholder="name"
//                 />
//             </div>
//             <div className="border rounded-md hover:shadow-md duration-500">
//                 <input
//                 className="py-2"
//                 id="email"
//                 type="email"
//                 placeholder="email"
//                 />
//             </div>
//             <div className="flex justify-center ">
//             <button className="px-6 py-2 border rounded-md hover:shadow-md duration-500">
//                 <h>SUBMIT</h>
//             </button>
//             </div>
//         </form>
//     </div>
//   )
// }