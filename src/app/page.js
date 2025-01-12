'use client'
import Intro from '@/components/homepage/Intro'
import Collabration from '@/components/homepage/Collabration'
import SliderRamadan from '@/components/homepage/SliderRamadan';
import Mainstream from '@/components/homepage/MainStream'
import Mainstream2 from '@/components/homepage/MainStream2'
import Qualities from '@/components/homepage/Qualities'
import Courses from '@/components/homepage/Courses'
import Trendmark from '@/components/homepage/Trendmark'
import Courses2 from '@/components/homepage/Courses2'
import Trendmark2 from '@/components/homepage/Trendmark2'
import Entertainment from '@/components/homepage/Entertainment'
import News from '@/components/homepage/News'
import Footer from "@/components/Footer.jsx"
import ContactUs from "@/components/homepage/ContactUs"



export default function home() {
  return (
    <>
    <html lang="en">
      <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-6199758154363864"
      data-ad-slot="1234567890" // Replace with your ad slot ID
      data-ad-format="auto">
      </ins>
      <main>

        <Intro/>
        <Collabration/>
        <div className="static">
          <div className="fixed right-0 z-50 bottom-0 mb-4"><ContactUs/></div>
        </div>
        {/* <SliderRamadan/> */}
        <Mainstream/>
        <Mainstream2/>

        


        <Qualities/>
        <Courses/>
        <Trendmark/>
        <Courses2/>
        <Trendmark2/>
        <Entertainment/>
        <News/>
        <Footer/>
      </main>
    </html>
    </>
    
  )
}











{/* <div className="fixed bottom-0 w-full flex justify-end p-4">
      <div className=" hover:slide-in-from-left-1 flex items-center right-2  rounded-full bg-yellow-500">
        <h className=" p-3 flex items-center rounded-full font-extrabold">Get in Touch</h>
        <a href="/borangyeg"
      className="">
      <Image 
          className=""
          src="/fixedcontactus.svg"
          alt="fixedcontactus"
          width="60"
          height="80"
          style={{
            objectFit:"contain",
          }}
        />
      </a>
        </div>
    </div> */}
    
    
    
    
    {/* <section>
      <div className="bg-black px-14">
      <div className="bg-green-300 grid grid-cols-3 gap-4">
        <div className=" w-full">
          <div className="hover:bg-yellow-400 duration-300 w-full border-2 border-yellow-400 rounded-lg p-2">
            <div className="">
            <h className="text-white">Pengurusan Haji & Umrah</h>
            </div>
            </div>
        </div>
        <div className=" w-full">
          <div className="w-full border-2 border-yellow-500 rounded-lg p-2">Pengurusan Operasi Penerbangan</div>
        </div>
        <div className=" w-full">
          <div className="w-full border-2 border-yellow-300 rounded-lg p-2">Penyelenggaraan Teknologi Pesawat</div>
        </div>
        <div className=" w-full">
          <div className="w-full border-2 border-yellow-300 rounded-lg p-2">Pengurusan Perhotelan</div>
        </div>
        <div className=" w-full">
          <div className="w-full border-2 border-yellow-300 rounded-lg p-2">Seni Kulinari</div>
        </div>
        <div className=" w-full">
          <div className="w-full border-2 border-yellow-300 rounded-lg p-2">Pendidikan Awal Kanak-Kanak</div>
        </div>
        <div className=" w-full">
          <div className="w-full border-2 border-yellow-300 rounded-lg p-2">Pengurusan Kargo Udara</div>
        </div>
        <div className=" w-full">
          <div className="w-full border-2 border-yellow-300 rounded-lg p-2">Pengurusan Operasi Penerbangan</div>
        </div>
        <div className=" w-full">
          <div className="w-full border-2 border-yellow-300 rounded-lg p-2">View more courses...</div>
        </div>
      </div>
      </div>
    </section> */}