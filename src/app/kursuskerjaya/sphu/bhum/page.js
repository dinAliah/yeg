import Image from 'next/image'
import React from 'react'

function Page() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: 'url("/bgkembarahaji.jpg")',
          backgroundSize: 'auto',
          backgroundPosition: 'top',
        }}
      />
      {/* White overlay with opacity */}
      <div className="absolute inset-0 bg-white opacity-80"></div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-10">
        <div className="pb-6">
          {/* Banner or heading image */}
          <div>
            <Image
              className="w-full drop-shadow-lg"
              src="/coursehajiumrah.svg"
              alt="coursehajiumrah"
              width={900}
              height={200}
              style={{
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Section 1 */}
          <div className="lg:py-10 py-6 space-y-4 text-black">
            <div>
              <p className="font-bold">
                IJAZAH SARJANA MUDA PENGURUSAN HAJI DAN UMRAH (Kepujian)
              </p>
              <p>Bachelor’s Degree Hajj & Umrah Management (Hons.) - BHUM</p>
            </div>
            <p>
              Program ini bertujuan melahirkan graduan yang berpengetahuan, berkemahiran dan
              beretika dalam bidang pengurusan ibadah Haji dan Umrah. Ia memberi tumpuan kepada
              aspek syariah, pengurusan operasi, logistik, serta bimbingan jemaah secara
              keseluruhan. Graduan akan dilengkapkan dengan kemahiran teori dan praktikal untuk
              berkhidmat dalam industri pelancongan Islam serta institusi berkaitan.
            </p>
            <p>
              Program ini dilahirkan untuk menggalakkan penyelidikan dan inovasi dalam meningkatkan
              mutu perkhidmatan Haji dan Umrah, di samping memperkukuh kesedaran masyarakat terhadap
              kepentingan ilmu dan pengurusan ibadah secara profesional dan berintegriti.
            </p>
          </div>

          {/* Section 2 */}
          <div className="lg:py-10 py-6 space-y-4 text-black">
            <div>
              <p className="font-bold">
                IJAZAH SARJANA MUDA PENGURUSAN HAJI DAN UMRAH (Kepujian) – MQA/PA 17040
              </p>
              <p>Dengan program ini, anda akan dapat:</p>
            </div>

            <p>1) Melalui pembelajaran Secara Hybrid</p>

            <div>
              <p>2) Professor Adjung Dari Industri Sebagai Tenaga Pengajar:</p>
              <ul className="list-disc ml-6">
                <li>Hajah Ida Riswana Idris (Pengarah Andalusia Travel & Tours)</li>
                <li>Haji Jainal Haji Ismail (CEO FGV Transport)</li>
                <li>
                  Al-Habib Sheikh Dr. Prof. Omar Kalash Al-Husainiyy (Baitussaadah)
                </li>
              </ul>
            </div>

            <div>
              <p>Syarat Kelayakan:</p>
              <ul className="list-disc ml-6">
                <li>Diploma CGPA 2.0 ke atas</li>
                <li>Matrikulasi CGPA 2.0 ke atas</li>
                <li>STPM CGPA 2.0 ke atas</li>
                <li>STAM minimum adalah Maqbul</li>
                <li>Sihat fizikal tubuh badan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
