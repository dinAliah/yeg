import React from 'react'
import Image from 'next/image'
import VerticalCountdownTimer from '@/components/VerticalCountdownTimer'
import Faqticketmmp from '@/components/Faqticketmmp'
import Testimonimmp from '@/components/Testimonimmp'



function page() {

  const targetDate = new Date('2024-06-09T23:59:59');
                                            
  return (
    <>
    <main>
      <section>
        <div className="w-full flex justify-center bg-green-600">
          <div className="p-5">
          <p className="text-base font-bold text-center text-white">KHAS BUAT WARGA MALAYSIA, BRUNEI DAN SINGAPURA YANG TERCARI-CARI KURSUS JANGKA PENDEK MENJADI MUTAWWIF DAN MUTAWWIFAH 2024!</p>
          </div>
        </div>
      </section>
      <section>
      <div className="">
      <iframe
      className="w-full" 
        width="779"
        height="428" 
        src="https://www.youtube.com/embed/YUCnJftsR74?autoplay=1" 
        title="MELAHIRKAN MUTAWWIF PROFESSIONAL 3.0" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
       </iframe>
        </div>
      </section>
      <section>
        <div className="w-full flex justify-center bg-black">
          <div className="p-4 ">
            <p className="text-center text-base font-bold text-white">Anda teringin nak jadi mutawwif atau mutawwifah tapi tak tahu nak mula daripada mana? Ataupun mungkin, anda hanya seorang pencinta ilmu manasik haji dan umrah dan nak isi masa lapang dengan menuntut ilmu dari rumah?</p>
          </div>
        </div>
      </section>
      <section>
      <div className="w-full flex items-center">
        <Image 
            className="w-full"
            src="/ticketmpp.jpg"
            alt="kembarahaji1"
            width="90"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </section>
      <section>
        <div className="w-full flex justify-center bg-black">
          <div className="p-4">
            <p className="text-center text-base font-bold text-white ">Jom sertai kempen satu hari ini sebagai langkah pertama untuk mendaftar <a className="underline" href="/landingpage/mmp3.0"> Sijil Profesional Haji dan Umrah (SPHU)</a> dan <a className="underline" href="/landingpage/mmp3.0">Diploma Pengurusan Haji dan Umrah (DHUMY)</a> yang diajar oleh tenaga kerja profesional dalam industri.</p>
          </div>
        </div>
      </section>
      <div className="py-4 lg:py-10 md:[height:80px]"></div>

      <section className="px-4">
        <div className="border rounded-md shadow-md">
        <VerticalCountdownTimer targetDate={targetDate} />
        <div className="w-full flex justify-center py-2">
          <a href="https://yeg.onpay.my/order/form/onticketmmp3" className="bg-green-600 animate-pulse p-2 px-8 rounded-md">
            Book Ticket</a>
        </div>
        </div>
      </section>
      <div className="py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <div className="w-full flex justify-center px-4">
          <div className="w-full bg-green-300 space-y-6 p-8 rounded-md">
            <div className="px-4 list-disc">
              <h className="text-2xl font-bold">ADAKAH ANDA BERADA DALAM KATEGORI INI?</h>
            </div>
            <ul className="px-8 list-outside">
              <li className="text-lg list-disc "><span className="font-bold">Tiada masa untuk reskill ilmu baru.</span> Kekangan masa menyebabkan anda ingin mencari kelas dengan jadual yang fleksibel disamping dapat meneruskan kerjaya sedia ada.</li>
            </ul>
            <ul className="px-8 list-outside">
              <li className="text-lg list-disc"><span className="font-bold">Tiada ilmu pengurusan haji dan umrah.</span> Jarang ada kelas khusus untuk mengurusakan jemaah haji atau umrah dari A ke Z.</li>
            </ul>
            <ul className="px-8 list-outside">
              <li className="text-lg list-disc"><span className="font-bold">Ingin mendalami ilmu menasik haji dan umrah</span> Nak pergi kursus umrah perlu tunggu hujung minggu tetapi kadang terlepas sesetengah topik kerana komitmen lain.</li>
            </ul>
            <ul className="px-8 list-outside">
              <li className="text-lg list-disc"><span className="font-bold">Susah nak cari tenaga pengajar terbaik.</span> Kebanyakkan tenaga pengajar tidak mempunyai teknik mengajar yang berkesan dan membosankan.</li>
            </ul>
            <ul className="px-8 list-outside">
              <li className="text-lg list-disc"><span className="font-bold">Modul tidak tersusun.</span> Modul pembelajaran biasanya diajar dengan bertabur sehingga merumitkan seseorang untuk memahami perjalanan melaksanakan ibadah.</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <div className="grid grid-cols-1 px-4 space-y-4">
          <div className="p-2">
            <div className="w-full">
            <iframe
            className="w-full" 
              width="300" 
              height="300" 
              src="https://www.youtube.com/embed/6QmhmSB9FVc" 
              title="PAKYA SEPAHTU NAK JADI MUTAWWIF?!" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" a
              llowfullscreen>
            </iframe>
            </div>
            <div className="space-y-4">
              <h>“Yang penting sekarang ni, saya teringin nak jadi mutawwif sebab saya rasa mutawwif ni satu kerja yang baik di dunia dan di akhirat”</h>
              <h1>Pak Ya, Pelawak, Peserta SPHU</h1>
            </div>
          
          </div>
          <div className="border  p-2">
            <div className="w-full">
            <iframe
            className="w-full" 
              width="300" 
              height="300" 
              src="https://www.youtube.com/embed/UnACz9A5XQI" 
              title="ARTIS PUN JOIN SPHU" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
            </iframe>
            </div>
            <div className="space-y-4">
              <h>“Kita sebenarnya jangan fikir terlalu panjang yang macam sesetengah orang berfikiran boleh ke?, cukup ke masa? sempat ke?”</h>
              <h1>Wan Syarmila, Selebriti, Peserta SPHU</h1>
            </div>
          </div>
          <div className="border p-2 py-1">
            <div className="w-fll">
              <iframe
              className="w-full" 
              width="300" 
              height="300" 
              src="https://www.youtube.com/embed/gG8tV4g5ntI" 
              title="PLATFORM BERBALOI BELAJAR MANASIK HAJI &amp; UMRAH" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
            </iframe>
            </div>
            <div className="space-y-4">
              <h>“Tapi diberikan rezeki saya telah pun pergi ke umrah tahun lepas jadi, itu telah menguatkan azam saya lagi untuk join SPHU untuk mendalami lagi ilmu sebab kalau saya pergi lagi, saya dah ada ilmu”</h>
              <h1>Nor Ashikin, Pesara Guru, Peserta SPHU</h1>
            </div>
          </div>
          <div className="border p-2">
            <div className="w-full">
            <iframe 
            className="w-full"
              width="300" 
              height="300" 
              src="https://www.youtube.com/embed/3ywm6YSdM1k" 
              title="PRAKTIKAL DI KOTA SUCI &amp; BUAT HAJI SEUSIA MUDA" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
            </iframe>
            </div>
            <div className="space-y-4">
              <h>“Cuma saya bertugas di Saudi tu kiranya dapat tawaran menjadi petugas ziarah untuk 2 kali, Alhamdulillah. Baru-baru ni pun saya ada bawa jemaah haji untuk pengurusan haji di tanah haram”</h>
              <h1>Hilal, Executive Sale & Marketing, Peserta DHUMY</h1>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="bg-green-600 py-4 flex justify-center">
          <span className="p-4 font-semibold text-4xl font-sans text-white">Alumni Program</span>
        </div>
        <div className="w-full flex justify-center">
          <Testimoni/>
        </div>
      </section> */}
      <div className="py-4 lg:py-10 md:[height:80px]"></div>
      {/* <section>
      <div className="animate-pulse duration-800  bg-green-600 flex justify-center p-2 py-6">
        <h className="text-2xl text-slate-200 font-bold font-sans">Sebarang pertanyaan sila hubungi En.Saiyyid <span className="text-black">01115403660</span></h>
        </div>
      </section> */}
        
      {/* <section>
        <FormMmp/>
      </section> */}
      {/* <section>
        <Moto/>
      </section> */}
      <div className="bg-white py-4 lg:py-10 md:[height:80px]"></div>
      <section>
      <div className="flex items-center">
        <Image
            className="w-full"
            src="/mmpposter.jpg"
            alt="mmpposter"
            width="90"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </section>
      <div className="bg-white py-4 lg:py-10 md:[height:80px]"></div>
      <section>
      
      </section>
      <div className="bg-white py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="flex items-center">
        <Image
            className="w-full"
            src="/mmpperson1.jpg"
            alt="mmpperson1"
            width="90"
            height="200"
            style={{
              objectFit: "contain",
            }}/>
        </div>
        <div className="flex items-center">
        <Image
            className="w-full"
            src="/mmpperson2.jpg"
            alt="mmpperson2"
            width="90"
            height="200"
            style={{
              objectFit: "contain",
            }}/>
        </div>
        <div className="flex items-center">
        <Image
            className="w-full"
            src="/mmpperson3.jpg"
            alt="mmpperson3"
            width="90"
            height="200"
            style={{
              objectFit: "contain",
            }}/>
        </div>
        </div>
        <div className="w-full flex justify-center py-4">
        <a href="https://yeg.onpay.my/order/form/onticketmmp3" className="bg-green-600 animate-pulse p-1 px-8 rounded-md">
          Book Ticket</a>
      </div>
      </section>
      <div className="bg-white py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <Faqticketmmp /> 
      </section>
      <div className="bg-white py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <div className="px-4">
          <div className="p-2 bg-black">
            <h className="text-2xl text-white">Betul ke, rasa berbaloi untuk invest pada perkara bermanfaat?</h>
          </div>
        <Testimonimmp/>
        </div>
      </section>
      <div className="bg-white py-4 lg:py-10 md:[height:80px]"></div>
      <section>
        <div className="px-4">
        <div className="w-full flex justify-center bg-slate-700 p-4">
          <p className="text-white text-lg">Info Program</p>
        </div>
        <div className="flex items-center">
        <Image
            className="w-full"
            src="/mmpplace.jpg"
            alt="mmpplace"
            width="90"
            height="200"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div>
          <div className="p-4 w-full justify-center grid">
            <h className="text-center font-bold">Lokasi</h> 
            <h1 className="text-center">Dewan Melawati, Level 1 Kompleks Tabung Haji, Kelana Jaya</h1>
          </div>
        </div>
        <div>
          <div className="p-4 w-full justify-center grid">
            <h className="text-center font-bold">Tarikh:</h> 
            <h1>09 Jun 2024 (Ahad)</h1>
          </div>
        </div>
        <div>
          <div className="p-4 w-full justify-center grid">
            <h className="text-center font-bold">Masa:</h> 
            <h1>8.00 Pagi - 1.00 Petang</h1>
          </div>
        </div>
        </div>
      </section>
      <div className="w-full flex justify-center">
            <a href="https://yeg.onpay.my/order/form/onticketmmp3" className="bg-green-600 animate-pulse p-2 px-8 rounded-md">
              Book Ticket
            </a>
          </div>
          <div className="py-4 lg:py-10 md:[height:80px]"></div>
          <div className="py-4 lg:py-10 md:[height:80px]"></div>
    </main>
    </>  
  )
}

export default page



 