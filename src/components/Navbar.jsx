"use client"
import React from 'react'
import Image from "next/image"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
    MenubarSubTrigger,
    MenubarSubContent,
    MenubarShortcut,
    MenubarSeparator,
    MenubarSub,
  } from "@/components/ui/menubar"
  

function Navbar() {
  return (
    <nav className="bg-slate-800">
        <div className="w-full "> 
        <Menubar >
        <div className="bg-slate-800 pl-4">
    <a href="/" className="">
            <Image
                className=""
                src="/logoyeg.svg"
                alt="logoyeg"
                height="140"
                width="140"
                style={{
                objectFit: "contain",
                }}/></a></div>
            <div className="bg-slate-800 flex w-full justify-end">

            <MenubarMenu>
              <MenubarTrigger>Career Program</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                <a className="text-md font-light ml-2" href="../kursuskerjaya/sphu">Sijil Program Profesional Haji & Umrah (SPHU)</a> </div>
                </MenubarItem>  
                <MenubarItem>
                <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                <a className="text-md font-light ml-2" href="../kursuskerjaya/acm">Aviation Career Malaysia (ACM)</a></div>
                </MenubarItem>
                <MenubarSub>
                  <MenubarSubTrigger>
                  <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                  <a className="text-md font-light ml-2" href="../kursuskerjaya/misa">Malaysia Industry Skills Academy(MISA)</a></div>
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem><a className="text-md font-light ml-2" href="../kursuskerjaya/misa/oilandgas">Oil & Gas</a></MenubarItem>
                    <MenubarItem><a className="text-md font-light ml-2" href="../kursuskerjaya/misa/maritim">Maritim</a></MenubarItem>
                    <MenubarItem><a className="text-md font-light ml-2" href="../kursuskerjaya/misa/telco">Telcomunication</a></MenubarItem>
                    <MenubarItem><a className="text-md font-light ml-2" href="../kursuskerjaya/misa/renewbleenergy">Renewble Energy</a></MenubarItem>
                    <MenubarItem><a className="text-md font-light ml-2" href="../kursuskerjaya/misa/aviation">Aviation</a></MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>




           
  
            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">Online Distance Learning</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../odl/diploma1">Diploma in Business & Administration</a></div>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">Diploma Courses</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dhumy">Diploma Pengurusan Haji & Umrah (DHUMY)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dle">Diploma Penguatkuasa Undang-Undang (DLE)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dnur">Diploma Kejururawatan (DNUR)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dacm">Diploma Pengurusan Kargo Udara (DACM)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/daom">Diploma Pengurusan Operasi Penerbangan (DAOM)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/damt">Diploma Penyelenggaraan Teknologi Pesawat (DAMT)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/amt">Sijil Kemahiran Malaysia Operasi Penyelenggaraan Pesawat (AMT)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dtmmea">Diploma Pengurusan Pelancongan (DTM-MEA)</a></div>
                    </MenubarItem>     
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">WBL Diploma Courses</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dhumywbl">Diploma Pengurusan Haji & Umrah (DHUMY-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dhmwbl">Diploma Pengurusan Perhotelan (DHM-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dcawbl">Diploma Seni Kulinari (DCA-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/decwbl">Diploma Pendidikan Awal Kanak-kanak (DEC-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dacmwbl">Diploma Pengurusan Kargo Udara (DACM-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/daomwbl">Diploma Pengurusan Operasi Penerbangan (DAOM-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiplomawbl/dasmwbl">Diploma Teknologi Pembaikan Struktur Pesawat - Kepingan Logam (DASM-WBL)</a></div>
                    </MenubarItem>
                    <MenubarItem>
                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="../kursusdiploma/dtmmea">Diploma Pengurusan Pelancongan (DTM-MEA)</a></div>
                    </MenubarItem>     
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">
                    <a className="" href="./careyeg">Article</a></MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">
                <a className="" href="../testimoni">Testimony</a></MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="hover:bg-slate-600">
                <a className="" href="../career">Job Vacancy</a></MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger><a className="">PDPT-YEG</a></MenubarTrigger>
                <MenubarContent>
                    <MenubarItem className="grid">
                        <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="https://lll-52a72qasy-fuaadtarmizis-projects.vercel.app/">Haj Umrah Examination</a></div>
                        <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="/">Health Science Examination</a></div>
                        <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="/">Aviation Examination</a></div>
                        <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                        <a className="text-md font-light ml-2" href="/">Penguatkuasa Undang-Undang Examination</a></div>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="bg-yellow-500 hover:bg-yellow-400">
                <a href="./borangyeg">Contact Us</a> </MenubarTrigger>
            </MenubarMenu>
            </div>
            </Menubar>
        </div>
    </nav>
  )
}

export default Navbar