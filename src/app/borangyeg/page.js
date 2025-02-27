"use client"
import React, {useState} from 'react';
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
    formDatab.append("Media", selectedItem1);
    formDatab.append("State", selectedItem2);
    

    fetch(
      "https://script.google.com/macros/s/AKfycbw8m7r6p8zv8-9yjiWiN6iNDaYq0JyDtTsuMVnZD5oE__NC1483gX0MxWH76z00zMscYg/exec",
      {
        method: "POST",
        body: formDatab
      }
      
    )
      .then((res) => res.json())
      .then((data) => {
       if(data.success) {
        setAlertMessage('Form submitted successfully!');
        alert('Penghantaran Berjaya!, Pegawai kami akan menghubungi anda secepat mungkin');
       }else{
        alert('dokleh send..cuba lagi')
       }
      })
      .catch((error) => {
        console.log(error);
      });  
  }



    
  // program yeg
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

  // media
    const toggleDropdown1 = () => {
      setIsOpen1(!isOpen1);
    };

  //state  
    const toggleDropdown2 = () => {
      setIsOpen2(!isOpen2);
    };


    // program yeg
    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
      };

    // media 
      const handleItemClick1 = (item) => {
        setSelectedItem1(item);
        setIsOpen1(false);
      };
    //state
      const handleItemClick2 = (item) => {
          setSelectedItem2(item);
          setIsOpen2(false);
        };
      


  return (
    <main>
      <title>YEG Academy - Borang YEG</title>
    <div className="bg-black"  >
    <div className=" flex justify-center">
      <Image
          className="w-full"
          src="/wbl2.png"
          alt="wbl2"
          width="1500"
          height="80"
          style={{
            objectFit:"contain",
          }}
        />
      </div>
          <div className="p-4 lg:flex justify-center  ">     
            <div className="w-full lg:w-2/3">
            <form className="bg-white w-full p-6 border space-y-5 rounded-lg shadow-lg" onSubmit={(e) => Submit(e)}>
            <div className="py-6 text-black text-3xl font-bold">
                <h>Course Enquiry</h>
          </div>
         
          <div className="grid md:flex gap-8">
          <div className="w-full grid rounded-md space-y-1 ">
              <h className="text-black">Full Name</h>
            <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md " placeholder="" name="Name" type="text" />
          </div>
          <div className="w-full grid space-y-1">
              <h>Phone Number</h>
            <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="NumberPhone" type="text" />
          </div>
          </div>

          <div className="grid md:flex lg:flex gap-8">
          <div className="w-full grid rounded-md space-y-1 ">
            <h>Email</h>
          <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md " 
            placeholder="" 
            name="Email" 
            type="text" />
          </div>
            <div className="w-full grid space-y-1 ">
              <h>Age</h>
              <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="Age" type="text" />
            </div>
          </div>
          
          <div>
          <div className="relative  inline-block text-left w-full py-8">
            <div className="pb-2">
            <h>Select your Programs Diploma, Programs Career, or Work-Based Learning (WBL)</h>
          </div>
            
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
        
          <p
            className="px-4 text-md py-2 cursor-pointer bg-yellow-500 font-bold"
          >
            Work Based Learning
          </p>
          <div className="pl-6 text-sm bg-yellow-500">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick(" DIPLOMA PENGURUSAN HAJI & UMRAH (DHUMY-WBL)")}
          >
            DIPLOMA PENGURUSAN HAJI & UMRAH (DHUMY-WBL) 
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENGURUSAN PERHOTELAN (DHM-WBL)")}
          >
            DIPLOMA PENGURUSAN PERHOTELAN (DHM-WBL)
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA SENI KULINARI (DCA-WBL)")}
          >
            DIPLOMA SENI KULINARI (DCA-WBL)
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENDIDIKAN AWAL KANAK-KANAK (DEC-WBL)")}
          >
            DIPLOMA PENDIDIKAN AWAL KANAK-KANAK (DEC-WBL)
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENGURUSAN KARGO UDARA (DACM-WBL)")}
          >
            DIPLOMA PENGURUSAN KARGO UDARA (DACM-WBL)
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
            onClick={() => handleItemClick("DIPLOMA PENGURUSAN HAJI & UMRAH (DHUMY)")}
          >
            DIPLOMA PENGURUSAN HAJI & UMRAH (DHUMY) 
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENGURUSAN PERHOTELAN (DHM)")}
          >
            DIPLOMA PENGURUSAN PERHOTELAN (DHM)
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA KEJURURAWATAN (DNUR)")}
          >
            DIPLOMA KEJURURAWATAN (DNUR)
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("DIPLOMA PENGUATKUASA UNDANG-UNDANG (DLE)")}
          >
            DIPLOMA PENGUATKUASA UNDANG-UNDANG (DLE)
          </p>
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
            onClick={() => handleItemClick("DIPLOMA AIRCRAFT MAINTAINANCE TECHNOLOGY (DAMT")}
          >
            DIPLOMA AIRCRAFT MAINTAINANCE TECHNOLOGY (DAMT)
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-slate-400 rounded-md"
            onClick={() => handleItemClick("SIJIL KEMAHIRAN MALAYSIA OPERASI PENYELENGGARAAN PESAWAT (AMT)")}
          >
            SIJIL KEMAHIRAN MALAYSIA OPERASI PENYELENGGARAAN PESAWAT (AMT)
          </p>
          </div>

          <p
            className="px-4 text-md py-2 cursor-pointer bg-gray-400 font-bold"
          >
            Kerjaya
          </p>
          <div className="pl-6 text-sm bg-gray-400">
          <p className=" py-2 cursor-pointer hover:bg-gray-500 rounded-md"
            onClick={() => handleItemClick("SPHU - SIJIL PROFESIONAL PENGURUSAN HAJI & UMRAH")}
          >
            SPHU - SIJIL PROFESIONAL PENGURUSAN HAJI & UMRAH 
          </p>
          
          <p className=" py-2 cursor-pointer hover:bg-gray-500 rounded-md"
            onClick={() => handleItemClick("AVIATION - CABIN CREW")}
          >
            AVIATION - CABIN CREW
          </p>
          <p className="py-2 cursor-pointer hover:bg-gray-500 rounded-md"
            onClick={() => handleItemClick("AVIATION - CUSTOMER SERVICE")}
          >
            AVIATION - CUSTOMER SERVICE
          </p>
          <p className="py-2 cursor-pointer hover:bg-gray-500 rounded-md"
            onClick={() => handleItemClick("AVIATION - GROUND HANDLING")}
          >
            AVIATION - GROUND HANDLING
          </p>
          <p className="py-2 cursor-pointer hover:bg-gray-500 rounded-md"
            onClick={() => handleItemClick("AVIATION - TICKETING")}
          >
            AVIATION - TICKETING
          </p>
          <p className="py-2 cursor-pointer hover:bg-gray-500 rounded-md"
            onClick={() => handleItemClick("OIL & GAS - PIPE GAS INSULATION")}
          >
            OIL & GAS - PIPE GAS INSULATION
          </p>
          <p className="py-2 cursor-pointer hover:bg-gray-500 rounded-md"
            onClick={() => handleItemClick("OIL & GAS - RIGGER FITTER")}
          >
            OIL & GAS - RIGGER FITTER
          </p>
          <p className="py-2 cursor-pointer hover:bg-gray-500 rounded-md"
            onClick={() => handleItemClick("OIL & GAS - CULINARY")}
          >
            OIL & GAS - CULINARY
          </p>
          <p className="py-2 cursor-pointer hover:bg-gray-500 rounded-md"
            onClick={() => handleItemClick("OIL & GAS - PIPE GAS INSULATION")}
          >
            OIL & GAS - PIPE GAS INSULATION
          </p>
          <p className="py-2 cursor-pointer hover:bg-gray-500 rounded-md"
            onClick={() => handleItemClick("MARITIME - DECK RATING & ENGINE RATING")}
          >
            MARITIME - DECK RATING & ENGINE RATING
          </p>
          </div>
        </div>
      )}
    </div>     
    </div>

    <div className="grid md:flex lg:flex gap-8 ">
    <div className="w-full grid space-y-1">
        <h>Parents Name</h>
        <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="ParentName" type="text" />
      </div>
          <div className="w-full grid space-y-1 ">
            <h>Parents Phone Number </h>
            <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="ParentNumber"  type="text" />
          </div>
    </div> 


          <div className="grid  text-left">
        <p className="py-1 ">Negeri</p>
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
          <p></p>
 
          <div className=" text-sm bg-yellow-500">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Johor")}
          >
            Johor
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Kedah")}
          >
            Kedah
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Kelantan")}
          >
            Kelantan
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Kuala Lumpur")}
          >
            Kuala Lumpur
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Labuan")}
          >
            Labuan
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
            onClick={() => handleItemClick2("Pahang")}
          >
            Pahang
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Perak")}
          >
            Perak
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Perlis")}
          >
            Perlis
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Pulau Pinang")}
          >
            Pulau Pinang
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Putrajaya")}
          >
            Putrajaya
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
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Selangor")}
          >
            Selangor
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick2("Terengganu")}
          >
            Terengganu
          </p>
          </div>     
        </div>
      )}
    </div>




          <div className=" inline-block text-left w-full">
        <p className="py-1 text-white">Where get this info:-</p>
      <button
        onClick={toggleDropdown1} 
        name="Media"
        type="button"
        className="bg-yellow-500 hover:bg-yellow-600 inline-flex justify-center w-full px-8 py-2 text-sm font-medium text-black  border border-transparent rounded-md focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-800"
      >
        {selectedItem1 ? selectedItem1 : "Select Media"}
      </button>

      {isOpen1 && (
        <div className="w-full right-0 mt-2  origin-top-right bg-white border border-gray-200 divide-y  rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
 
          <div className=" text-sm bg-yellow-500">
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Website YEG Academy")}
          >
            Website YEG Academy
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Tiktok")}
          >
            Tiktok
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Instagram")}
          >
            Instagram
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Facebook")}
          >
            Facebook
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Event")}
          >
            Event
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("Youtube")}
          >
            Youtube
          </p>
          <p className="px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-md"
            onClick={() => handleItemClick1("News")}
          >
            News
          </p>
          </div>     
        </div>
      )}
    </div>

    <div className="py-6 pt-10 flex justify-center">
    <button className="hover:animate-bounce px-6 py-2 border rounded-md bg-yellow-500 hover:bg-yellow-600 hover:shadow-md duration-300" name="Submit" type="submit" >Submit</button>
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
    <div>
      <Footer/>
    </div>
    </main>
  );
}