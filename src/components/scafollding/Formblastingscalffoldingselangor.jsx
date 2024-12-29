"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import Sidebar from "@/components/Sidebar.jsx";

export default function App() {

  const [isOpen2, setIsOpen2] = useState(false);


  const [selectedItem2, setSelectedItem2] = useState(null);

  const [alertMessage, setAlertMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formError, setFormError] = useState('');

  function Submit(e) {
    e.preventDefault(); // Prevent default form submission behavior

    const emailValue = e.target.elements.Email.value;
    const nameValue = e.target.elements.Name.value;
    const phoneValue = e.target.elements.NumberPhone.value;
    const ageValue = e.target.elements.Age.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if all fields are filled
    if (!nameValue || !phoneValue || !emailValue || !ageValue) {
      setFormError('All fields must be filled.');
      return;
    }
    // Validate email format
    if (!emailRegex.test(emailValue)) {
      setEmailError('Email must be in a valid format.');
      alert('Email is incorrect!');
      return;
    }
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);

    formData.append("State", selectedItem2);


    fetch(
      "https://script.google.com/macros/s/AKfycbwNG-58NXdvuUPPRFpI0wyXlbD27i_7Q2mgZtiVHOWv70h-3PTzg4mzhh_eJnhSobFu/exec",
      {
        method: "POST",
        body: formData
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
    setFormError(''); // Clear form error message
    setEmailError(''); // Clear email error message
  }

  //state  
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };


  //state
  const handleItemClick2 = (item) => {
    setSelectedItem2(item);
    setIsOpen2(false);
  };


  return (
    <main>
      <div className="bg-white">
        <div className="hidden lg:block">j</div>
        <div className="p-4 lg:flex justify-center">
          <div className="lg:w-1/3">
            <form className="backdrop-blur-lg w-full p-6 border space-y-5 rounded-lg shadow-lg" onSubmit={(e) => Submit(e)}>
              <div className="py-6 text-black text-3xl font-bold">
                <h>Borang Pertanyaan</h>
              </div>
              <div className="grid space-y-4">
                <div className="grid rounded-md space-y-1">
                  <h className="">Nama</h>
                  <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="Name" type="text" />
                </div>
                <div className="grid space-y-1">
                  <h>Nombor Telefon</h>
                  <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="NumberPhone" type="text" />
                </div>
              </div>
              <div className="grid space-y-4">
                <div className="grid rounded-md space-y-1">
                  <h>Email</h>
                  <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="Email" type="text" />
                </div>
                <div className="grid space-y-1">
                  <h>Umur</h>
                  <input className="bg-gray-200 px-3 py-2 hover:shadow-md duration-500 rounded-md" placeholder="" name="Age" type="text" />
                </div>
              </div>


              <div className="grid  text-left">
        <p className="py-1 text-white">Negeri</p>
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



              <div className="pt-4">
                <button className="px-6 py-2 border rounded-md bg-yellow-500 hover:bg-yellow-600 hover:shadow-md duration-300" name="Submit" type="submit">Submit</button>
              </div>
            </form>
            {formError && (
              <div className="alert">
                {formError}
              </div>
            )}
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

