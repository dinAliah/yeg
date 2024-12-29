"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import Sidebar from "@/components/Sidebar.jsx";

export default function App() {
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

    fetch(
      "https://script.google.com/macros/s/AKfycbxTpE6RTvyxIt6DWLoiJXY6lBGuC4OGlaArmWvjOw23tNsvlslVu3utNQWql_heb2kj/exec",
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
