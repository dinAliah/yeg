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
                IJAZAH SARJANA PENGURUSAN HAJI DAN UMRAH 
              </p>
              <p>Master Hajj & Umrah Management - MHUM</p>
            </div>
            <p>
              Program Ijazah Sarjana Pengurusan Haji dan Umrah bertujuan melahirkan pakar dan profesional yang berkemampuan tinggi dalam aspek pengurusan, dasar dan penyelidikan berkaitan ibadah Haji dan Umrah. Ia memberi penekanan kepada pemikiran kritis, analisis strategik serta pembangunan model pengurusan berteraskan nilai Islam. 
            </p>
            <p>
               Graduan akan dilatih untuk memimpin organisasi berkaitan secara berkesan, menyumbang kepada pembangunan industri Haji dan Umrah, serta menghasilkan penyelidikan yang relevan dalam memperkasa sistem dan dasar pengurusan ibadah secara lebih mampan, berintegriti dan profesional di peringkat nasional dan antarabangsa.
            </p>
          </div>

          {/* Section 2 */}
          <div className="lg:py-10 py-6 space-y-4 text-black">
            <div>
              <p className="font-bold">
                IJAZAH SARJANA PENGURUSAN HAJI DAN UMRAH
              </p>
            </div>
            <div>
              <p>Dengan program ini, anda akan dapat:</p>
              <ul className="list-disc ml-6">
                <li>Tenaga Pengajar Dari Pakar Industri Yang Berpengalaman Lebih 20 Tahun (Badan Berautoriti)</li>
                <li>Modul Relevan & Terkini</li>
                <li>Fleksibel & Sesuai Untuk Profesional</li>
                <li>Membina Jaringan Industri Yang Luas</li>
                <li>Laluan Ke Peringkat Doktor Falsafah (Phd)</li>
              </ul>
            </div>

            <div>
              <p>Syarat Kelayakan:</p>
              <ul className="list-disc ml-6">
                <li>Ijazah Sarjana Muda Dengan Pngk Min. 2.75</li>
                <li>Atau, Pngk Min. 2.0 Dengan Syarat 5 Tahun</li>
                <li>Pengalaman Bekerja Dalam Bidang Berkaitan Atau, Apel A T7</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
