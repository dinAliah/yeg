"use client"
import React, { useState, useEffect  } from 'react';


export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem1, setSelectedItem1] = useState("Event");

    const [alertMessage, setAlertMessage] = useState('');
    const [emailError, setEmailError] = useState('');

    


    useEffect(() => {
      if (selectedItem1 === 'Whatsup') {
        Submit();
      }
    }, [selectedItem1]);

    

    
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
    formDatab.append("Source", selectedItem1);


    fetch(

      "https://script.google.com/macros/s/AKfycbz4ot3lPKtrN5-5DmzYBpXrQdtRxsBh2RR1YjELfkmxlsgRSXc1IrhqYWgO9IhWrgrnxg/exec",
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
      alert('Penghantaran Berjaya!, Pegawai kami akan menghubungi anda secepat mungkin. Sila klik untuk download E-book kami');
      setTimeout(() => {
        window.location.href = 'https://drive.google.com/file/d/17JZC99hMXGGDURA0iBt21Cz7jIkyNm1j/view?usp=drive_link';
      }, 100);
  }

  
    
  // program yeg
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    
    // program yeg
    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
      };

    const handleWhatsupClick = () => {
      setSelectedItem1("Event");
  };


    // const handleDownload = () => {
    //   // Your download logic here, such as redirecting to the download link
    //   window.location.href = 'https://example.com/path/to/your/file.pdf';
    // };
    // const handleClick = () => {
    //   // Show alert with download message
    //   alert('Penghantaran Berjaya!, Pegawai kami akan menghubungi anda secepat mungkin. Sila klik untuk download E-book kami');
      
    //   // Trigger download when the user clicks OK in the alert
    //   handleDownload();
    // };
  
  


  return (
    <main>
    <div className="bg-white">
    <div className=" hidden lg:block"></div>
        <div className="p-4  lg:flex justify-center  ">     
      <div className="lg:w-1/3 ">
      <form className=" backdrop-blur-lg w-full p-6 border space-y-5 rounded-lg shadow-lg" onSubmit={(e) => Submit(e)}>
      <div className="py-6 text-black text-3xl font-bold">

      

             <h>Borang Pendaftaran</h>
         </div>
            <div className=" grid space-y-4">
      <div className="grid rounded-md space-y-1 ">
        <h className="">Nama Pelajar</h>
      <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md " placeholder="" name="Name" type="text" />
      </div>
          <div className="grid space-y-1">
          <h>Nombor Telefon Pelajar </h>
          <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="NumberPhone" type="text" />
          </div>
          </div>

          <div className="grid space-y-4">

      <div className="grid rounded-md space-y-1 ">
        <h>Email</h>
      <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md " 
        placeholder="" 
        name="Email" 
        type="text" />
      </div>

          <div className="grid space-y-1">
          <h>Umur</h>
          <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="Age" type="text" />
          </div>
          </div>

          
          <div>
          <div className="relative inline-block text-left">
            <div>Pilihan Program</div>
      <button
        onClick={toggleDropdown}
        name="Program"
        type="button"
        className="bg-yellow-500 hover:bg-yellow-600 inline-flex justify-center w-full py-2 text-sm font-medium text-black  border border-transparent rounded-md focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-800"
      >
        {selectedItem ? selectedItem : "Select Programs"}
      </button>

      {isOpen && (
        <div className="w-full right-0 mt-2  origin-top-right bg-white border border-gray-200 divide-y  rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
        
          <p
            className="px-4 text-md py-2 cursor-pointer bg-yellow-500 font-bold"
          >
            Work Based Learning
          </p>
          <div className="pl-6 text-sm bg-yellow-500">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENGURUSAN KARGO PENERBANGAN (DACM-WBL) ")}
          >
            DIPLOMA PENGURUSAN KARGO PENERBANGAN (DACM-WBL) 
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENGURUSAN OPERASI PENERBANGAN (DAOM-WBL)")}
          >
            DIPLOMA PENGURUSAN OPERASI PENERBANGAN (DAOM-WBL) 
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA TEKNOLOGI PEMBAIKAN STRUKTUR PESAWAT - KEPINGAN LOGAM (DASM-WBL)")}
          >
            DIPLOMA TEKNOLOGI PEMBAIKAN STRUKTUR PESAWAT - KEPINGAN LOGAM (DASM-WBL) 
          </p>
          </div>

          <p className="px-4 text-md font-bold py-2 hover:bg-gray-200 bg-slate-600"  >
            Diploma Kovensional
          </p>
          <div className="pl-6 text-sm text-white bg-slate-600">
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENGURUSAN KARGO UDARA (DACM)")}
          >
            DIPLOMA PENGURUSAN KARGO UDARA (DACM) 
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENGURUSAN OPERASI PENERBANGAN (DAOM)")}
          >
            DIPLOMA PENGURUSAN OPERASI PENERBANGAN (DAOM) 
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA AIRCRAFT MAINTANANCE TECHNOLOGY (DAMT)")}
          >
            DIPLOMA AIRCRAFT MAINTANANCE TECHNOLOGY (DAMT) 
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("SIJIL KEMAHIRAN MALAYSIA OPERASI PENYELENGGARAAN PESAWAT (CAMO) ")}
          >
            SIJIL KEMAHIRAN MALAYSIA OPERASI PENYELENGGARAAN PESAWAT (CAMO) 
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("SIJIL KEMAHIRAN MALAYSIA OPERASI PERKHIDMATAN PESAWAT (CAS)")}
          >
            SIJIL KEMAHIRAN MALAYSIA OPERASI PERKHIDMATAN PESAWAT (CAS) 
          </p>
          </div>

          <p className="px-4 text-md font-bold py-2 hover:bg-gray-200 bg-slate-600"  >
            Kerjaya
          </p>
          <div className="pl-6 text-sm text-white bg-slate-600">
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("AVIATION - CABIN CREW ")}
          >
            AVIATION - CABIN CREW 
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("AVIATION - CUSTOMER SERVICE")}
          >
            AVIATION - CUSTOMER SERVICE 
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("AVIATION - GROUND HANDLING ")}
          >
            AVIATION - GROUND HANDLING 
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("AVIATION - TICKETING ")}
          >
            AVIATION - TICKETING 
          </p>
          
          </div>
        </div>
      )}
    </div>     
    </div>

          <div className="grid space-y-1">
          <h>Nama Penjaga</h>
          <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="ParentName" type="text" />
          </div>

          <div className="grid space-y-1">
          <h>Nombor Penjaga</h>
          <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="ParentNumber"  type="text" />
          </div>

          <div className="relative inline-block text-left">
              <div
              onClick={handleWhatsupClick}
                  name="Source"
                  className="px-4 bg-yellow-500 hover:bg-yellow-600 inline-flex justify-center w-full py-2 text-sm font-medium text-black border border-transparent rounded-md focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-800"
              > Event
              </div>
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















