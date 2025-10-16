import React from 'react';
import Image from 'next/image';

function Collabration() {
  return (
    <div className="relative w-full">
      {/* Blinking Light Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-900 rounded-md blur-lg animate-pulse"></div>

      {/* Logos Section */}
      <section className="w-full absolute bottom-16 px-24 hidden lg:block">
        <div className="w-full h-full bg-white rounded-md flex justify-center shadow-2xl space-x-16">
          <div className="flex items-center">
            <Image
              src="/collabration/iuclogo.png"
              width={160}
              height={200}
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/collabration/meatech2logo.png"
              alt="meatech2logo"
              width={230}
              height={200}
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/collabration/mahsalogo.svg"
              alt="mahsalogo"
              width={180}
              height={200}
              style={{
                objectFit: 'contain',
              }}
            />
          </div>

          <div className="flex items-center">
            <Image
              src="/collabration/meatechlogo.svg"
              alt="meatechlogo"
              width={120}
              height={200}
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
           <div className="flex items-center">
                      <Image
                        src="/collabration/logoamtc.png"
                        alt="logoamtc"
                        width={180}
                        height={200}
                        style={{
                          objectFit: 'contain',
                        }}
                      />
                    </div>
         {/*}<div className="flex items-center">
            <Image
              src="/collabration/logopelita.svg"
              alt="logopelita"
              width={90}
              height={200}
              style={{
                objectFit: 'contain',
              }}
            />
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Collabration;
