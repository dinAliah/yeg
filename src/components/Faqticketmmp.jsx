'use client'
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
   
  export default function AccordionDemo() {
    return (
        <div className="w-full flex justify-center">
        <div className="w-full p-3">
          <div>
          FREQUENTLY ASKED QUESTIONS (FAQ)
          </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Kempen akan berjalan secara fizikal atau atas talian?</AccordionTrigger>
          <AccordionContent>
          Kempen akan dijalankan secara fizikal dan atas talian secara serentak. Penyertaan secara fizikal adalah terhad kepada 500 orang terawal sahaja.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Bagaimana nak sertai kempen Melahirkan Mutawwif Profesional 3.0?</AccordionTrigger>
          <AccordionContent>
          Anda hanya perlu menekan link di bio sosial media (Facebook: Pengurusan Haji dan Umrah, Instagram: @dhumy.official, Tiktok: @dhumy.official) dan mengisi borang yang disediakan. Pegawai bertugas kendalian penganjur akan menghubungi anda untuk maklumat lanjut.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Apa yang peserta akan dapat dengan menyertai kempen ini?</AccordionTrigger>
          <AccordionContent>
          Peserta yang menghadiri kempen MMP 3.0 secara fizikal akan diberikan lanyard, kad peserta, kad doa’ dan sedikit makanan ringan.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Siapa yang layak sertai kempen ini?</AccordionTrigger>
          <AccordionContent>
          Sesiapa sahaja layak untuk menyertai kempen Melahirkan Mutawwif Profesional 3.0. Namun, digalakkan bagi mereka yang berminat untuk menjadi mutawwif, mutawwifah dan bekerjaya dalam industri haji dan umrah sama ada golongan bekerjaya, lepasan SPM atau mereka yang sudah pencen. Kempen ini juga sesuai untuk mereka yang nak mendalami ilmu berkaitan ibadah haji dan umrah secara mendalam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Adakah saya boleh dapat rakaman sesi kempen berikut jika terlepas penyertaan?</AccordionTrigger>
          <AccordionContent>
          Tidak, kerana kempen Melahirkan Mutawwif Profesional 3.0 adalah sesi ekslusif.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Saya bukan warga Malaysia, adakah saya boleh sertai kempen ini?</AccordionTrigger>
          <AccordionContent>
          Ya, Melahirkan Mutawwif Profesional 3.0 terbuka kepada warga Malaysia, Brunei dan Singapura. Sekiranya terdapat peserta selain dari negara berikut, anda juga dialu-alukan untuk sertai bersama. Peserta yang tidak dapat hadir secara fizikal boleh menghadiri kempen secara atas talian.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Adakah saya boleh jadi Mutawwif dengan hanya sertai kempen ini?</AccordionTrigger>
          <AccordionContent>
          Kempen ini hanyalah sebahagian daripada perjalanan untuk menjadi mutawwif. Namun, ia adalah langkah pertama yang terbaik untuk memulakan kerjaya dalam bidang ini kerana peserta akan didedahkan dengan kursus jangka pendek seperti Sijil Profesional Haji dan Umrah (SPHU) atau kursus 3 tahun setengah seperti Diploma Pengurusan Haji dan Umrah (DHUMY). 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>Adakah terdapat pembayaran untuk penyertaan?</AccordionTrigger>
          <AccordionContent>
          Ya, satu penyertaan secara fizikal perlu membayar RM 10. Walau bagaimanapun, terdapat promosi beli 2 tiket dan percuma 1 tiket dengan harga RM 20.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
      </div>
    )
  }