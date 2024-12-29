import React from 'react'
import Footer from "@/components/Footer.jsx"
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"


function page() {
  return (
    <div>
        <title>YEG Academy - artikel</title>
        {/* <nav className="hidden lg:block sticky top-0 ">
        <Navbar/>
    </nav>
      <nav>
    <div className="lg:hidden">
        <Sidebar/>
    </div>
    </nav> */}
        <section1 className="">
        <div className="lg:pt-8 px-4 lg:px-28"> 
            <div className="flex justify-center py-8">
        <div className="group w-3/4 h-full grid justify-center ">
          <span className="text-slate-700 font-bold text-4xl bg-gradient-to-r from-yellow-500 to-yellow-500 bg-no-repeat [background-position:0_88%] [background-size:1%_100%] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">
          ARTIKEL YEG ACADEMY</span>
      </div>
      </div>
            </div>
            <div className=" lg:px-14">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-6'>
                <a href="./article/article1"
                className="group p-3 flex justify-center rounded-md hover:shadow-slate-500 hover:shadow-xl shadow-md duration-300" style={{ backgroundImage: 'url("/article1(1).svg")', backgroundSize: 'cover', backgroundPosition: 'center',  }}>
                <div className="py-20">
                    <div className="w-full flex items-center">
                        <h className="font-bold p-3 group-hover:rounded-md group-hover:bg-black duration-500 text-xl px-8 text-white">" PERMINTAAN KERJAYA TERKINI "</h>
                    </div>
                    </div>
                </a>
                <div className="grid grid-cols-2 gap-2">
                    <a href="./article/article2"
                    className="group p-3 flex justify-center rounded-md hover:shadow-slate-500 hover:shadow-xl shadow-md duration-300" style={{ backgroundImage: 'url("/article2(1).jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="py-20">
                    <div className="w-full flex items-center">
                        <h className="font-bold p-3 group-hover:rounded-md group-hover:bg-black duration-500 text-xl px-8 text-white">" SENANG DAPAT KERJA? "</h>
                    </div>
                    </div>   
                    </a>
                    <a href="./article/article3"
                    className="group p-3 flex justify-center rounded-md hover:shadow-slate-500 hover:shadow-xl shadow-md duration-300" style={{ backgroundImage: 'url("article3(9).png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="py-20">
                    <div className="w-full flex items-center">
                        <h className="font-bold p-3 group-hover:rounded-md group-hover:bg-black duration-500 text-xl px-8 text-white">" KURSUS UNTUK RESKILL"</h>
                    </div>
                    </div> 
                    </a>
                    <a href="./article/article4"
                    className="group p-3 flex justify-center rounded-md hover:shadow-slate-500 hover:shadow-xl shadow-md duration-300" style={{ backgroundImage: 'url("/article3(5).png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="py-20">
                    <div className="w-full flex items-center">
                        <h className="font-bold p-3 group-hover:rounded-md group-hover:bg-black duration-500 text-xl px-8 text-white">" BIDANG KERJAYA "</h>
                    </div>
                    </div>
                    </a>
                    <a href="./article/article5"
                    className="group p-3 flex justify-center rounded-md hover:shadow-slate-500 hover:shadow-xl shadow-md duration-300" style={{ backgroundImage: 'url("/article3(6).png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="py-20">
                    <div className="w-full flex items-center">
                        <h className="font-bold p-3 group-hover:rounded-md group-hover:bg-black duration-500 text-xl px-8 text-white">"DIPLOMA WBL?"</h>
                    </div>
                    </div>
                    </a>
                </div>
               
            </div>
            </div>
        </section1>
        <div className="py-8 lg:py-10 md:[height:80px]"></div>
        <section2 className="">
            <div className="">
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 px-6'>
                <a href="./article/article6">
                <card className="p-3 flex group justify-center rounded-md border hover:shadow-slate-500 hover:shadow-xl shadow-md duration-300" style={{ backgroundImage: 'url("/article6(1).jpg")', backgroundSize: 'cover', backgroundPosition: 'center',  }}>
                <div className="py-20">
                <div className="w-full flex items-center">
                    <h className="font-bold p-3 group-hover:rounded-md group-hover:bg-black duration-500 text-xl text-white">DIPLOMA PILIHAN TERBAIK?</h>
                </div></div></card></a>
                <a href="./article/article7">
                <card className="p-3 flex group justify-center rounded-md border hover:shadow-slate-500 hover:shadow-xl shadow-md duration-300" style={{ backgroundImage: 'url("/article7(5).jpg")', backgroundSize: 'cover', backgroundPosition: 'center',  }}>
                <div className="py-20">
                <div className="w-full flex items-center">
                    <h className="font-bold p-3 group-hover:rounded-md group-hover:bg-black duration-500 text-xl text-white">DIPLOMA PILIHAN TERBAIK?</h>
                </div></div></card></a>

                <a href="./article/Yegcare">
                <card className="p-3 flex justify-center rounded-md border hover:shadow-slate-500 hover:shadow-xl shadow-md duration-300" style={{ backgroundImage: 'linear-gradient(to top, rgba(50, 50, 50, 2), rgba(200, 200, 200, 0.1)), url(https://asset-2.tstatic.net/palembang/foto/bank/images/simon-lee.jpg)', backgroundSize: 'cover', backgroundPosition: 'center',  }}>
                <div className="py-20">
                <div className="w-full flex items-center">
                    <h className="font-bold p-3 group-hover:rounded-md group-hover:bg-black duration-500 text-xl text-white">YEG CARE</h>
                </div>
                </div>
                </card></a>
                </div>
            </div>
        </section2>
        
        <section3 className="">
            <div className="hidden">
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 px-6'>
                <card1 className="p-3 flex justify-center rounded-md border hover:shadow-slate-500 hover:shadow-xl shadow-md duration-300" style={{ backgroundImage: '', backgroundSize: 'cover', backgroundPosition: 'center',  }}>
                <div className="py-20">
                    <div className="w-full flex items-center">
                        <h className="font-bold text-base px-8 text-black">soon</h>
                    </div>
                    </div>
                </card1>
                <card2 className="p-3 flex justify-center rounded-md border hover:shadow-slate-500 hover:shadow-xl shadow-md duration-300" style={{ backgroundImage: '', backgroundSize: 'cover', backgroundPosition: 'center',  }}>
                <div className="py-20">
                    <div className="w-full flex items-center">
                        <h className="font-bold text-base px-8 text-black">soon</h>
                    </div>
                    </div>
                </card2>
                <card3 className="p-3 flex justify-center rounded-md border hover:shadow-slate-500 hover:shadow-xl shadow-md duration-300" style={{ backgroundImage: '', backgroundSize: 'cover', backgroundPosition: 'center',  }}>
                <div className="py-20">
                    <div className="w-full flex items-center">
                        <h className="font-bold text-base px-8 text-black ">soon</h>
                    </div>
                    </div>
                </card3>
                </div>
            </div>
        </section3>
        <div className="py-8 lg:py-10 md:[height:80px]"></div>    
    <div>
      <Footer/>
    </div>
    </div>
    
  )
}

export default page