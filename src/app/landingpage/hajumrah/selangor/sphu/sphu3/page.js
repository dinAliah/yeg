import React from 'react'
import Image from 'next/image'
import FormSphuSelangorTiktok from '@/components/FormSphuSelangorTiktok'


const VideoPlayer1 = () => {
  // YouTube video embed URL (replace with your actual YouTube video ID)
  const videoEmbedUrl = 'https://www.youtube.com/embed/heszQsRflIw';

  return (
    <div className="flex justify-center">
      <iframe
        className="px-4"
        width="1000"
        height="500"
        src={videoEmbedUrl}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const VideoPlayer2 = () => {
  // YouTube video embed URL (replace with your actual YouTube video ID)
  const videoEmbedUrl = 'https://www.youtube.com/embed/bP6MnjxhbTM';

  return (
    <div className="flex justify-center">
      <iframe
        className="px-4"
        width="1000"
        height="500"
        src={videoEmbedUrl}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};



function page() {
  return (
    <div className="">
      
      <div className="">
        <div className="" style={{ backgroundImage: 'url("/bgsphu.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className=" flex justify-center">
      <Image
          className=""
          src="/sphucareer.jpg"
          alt="sphu1"
          width="700"
          height="80"
          style={{
            objectFit:"contain",
          }}
        />
      </div>
      </div>
      {/* <div className="bg-green-800 p-3 flex justify-center py-8">
          <h className="text-white text-center lg:text-5xl text-3xl font-extrabold">DERMASISWA <span className="text-yellow-600">RM10 JUTA</span> BAGI MEMBANTU <span  className="text-yellow-600">3000</span> PELAJAR</h>
        </div> */}
        {/* <div className="animate-pulse duration-800  bg-green-600 flex justify-center p-2">
              <h className="text-center text-3xl text-white font-bold font-sans">SESI BERLANGSUNG PADA<span className="text-yellow-500"> 30 MAC 2024 DI KUALA LUMPUR <span className="text-3xl text-white font-bold font-sans">DAFTAR SEGERA UNTUK DAPATKAN SLOT <span>TAKLIMAT</span><span className="text-yellow-500"> PERCUMA</span></span></span></h>
            </div>
        <div className=" py-2"></div>
        <VideoPlayer1 /> */}

        {/* <div className="bg-white flex justify-center">
      <Image
          className=""
          src="/sphu2.png"
          alt="sphu2"
          width="1300"
          height="80"
          style={{
            objectFit:"contain",
          }}
        />
      </div> */}
      {/* <div className="bg-white py-2 md:py-3 lg:py-6"></div>
      
      <div className="bg-white py-2 md:py-3 lg:py-86">.</div>
      <div className="bg-white flex justify-center ">
      <Image
          className=""
          src="/sphu3.png"
          alt="sphu3"
          width="800"
          height="80"
          style={{
            objectFit:"contain",
          }}
        />
      </div> */}
      
      {/* <div className='bg-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-6'>
                <card1 className=" p-4 rounded-md shadow-lg border">
                <Image
                  className=""
                  src="/ttmoni1.png"
                  alt="sphu3"
                  width="700"
                  height="80"
                  style={{
                    objectFit:"contain",
                  }}
                />
                </card1>
                <card2 className="p-4  rounded-md shadow-lg border">
                <Image
                  className=""
                  src="/ttmoni2.png"
                  alt="sphu3"
                  width="700"
                  height="80"
                  style={{
                    objectFit:"contain",
                  }}
                />
                </card2>
                <card3 className="p-4  rounded-md shadow-lg border">
                <Image
                  className=""
                  src="/ttmoni3.png"
                  alt="sphu3"
                  width="700"
                  height="80"
                  style={{
                    objectFit:"contain",
                  }}
                />
                </card3>
                <card4 className="p-4  rounded-md shadow-lg border">
                <Image
                  className=""
                  src="/ttmoni4.png"
                  alt="ttmoni4"
                  width="700"
                  height="80"
                  style={{
                    objectFit:"contain",
                  }}
                />
                </card4>
                <card5 className="p-4  rounded-md shadow-lg border">
                <Image
                  className=""
                  src="/ttmoni5.png"
                  alt="ttmoni5"
                  width="700"
                  height="80"
                  style={{
                    objectFit:"contain",
                  }}
                />
                </card5>
            </div> */}

            {/* <VideoPlayer2 /> */}
            
            <div >
              <FormSphuSelangorTiktok/>
            </div>
            <div className="">.</div>
      <div className=" flex justify-center ">
      <Image
          className=""
          src="/sphu4.png"
          alt="sphu4"
          width="1400"
          height="80"
          style={{
            objectFit:"contain",
          }}
        />
      </div>




      </div>
    </div>
  )
}

export default page