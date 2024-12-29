import React from 'react'

function VideoMqa() {
  return (
    <>
    <section>
      <div className="px-4">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-green-100">
                    <div className="hover:ease-out duration:300">
                    <iframe className="w-full" 
                            width="200"
                            height="400" 
                            src="https://www.youtube.com/embed/XmOfTJd2mM8" 
                            title="DIPLOMA IN AVIATION" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                            </iframe>
                    </div>
                </div>
                <div className="bg-red-600 rounded-md transition duration-300 ease-out hover:shadow-2xl py-8">
                  <div className="w-full h-full flex justify-center items-center bg-red-600">
                    <span className="text-white font-sans font-bold text-3xl">PENGIKTIRAFAN MQA</span>
                  </div>
                </div>
                <div className="bg-green-300">
                          <iframe className="w-full"
                            width="400" 
                            height="400" 
                            src="https://www.youtube.com/embed/aJLBouZawOA" 
                            title="ZARUL UMBRELLA JADI FELO MEATECH DENGAN KERJASAMA AVIATION CAREER MALAYSIA" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                          </iframe>
                </div>
            </div>
      </div>
            
        </section>
    </>
  )
}

export default VideoMqa