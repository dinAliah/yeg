import Image from 'next/image'
import React from 'react'

function Page() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
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
      <div className="relative z-10 max-w-screen-lg mx-auto px-6 py-10">
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
            <div class='space-y-2'>
              <p className="font-bold">IJAZAH SARJANA PENGURUSAN HAJI DAN UMRAH (Bermula Dalam Tahun Ini)</p>
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
            </div>
            <div>
              <p>Dengan program ini, anda akan dapat:</p>
              <ul className="list-disc ml-6 py-2">
                <li>Belajar daripada tenaga pengajar yang merupakan pakar industri berpengalaman lebih 20 tahun, termasuk tokoh dalam badan-badan berautoriti berkaitan Haji dan Umrah.</li>
                <li>Mendalami modul pengajian yang relevan dan terkini, dirangka khusus bagi memenuhi keperluan industri semasa serta perkembangan pengurusan ibadah secara global.</li>
                <li>Menikmati pendekatan pembelajaran yang fleksibel, sesuai untuk golongan profesional yang ingin melanjutkan pengajian tanpa menjejaskan komitmen kerjaya.</li>
                <li>Membina jaringan industri yang luas, melalui kerjasama dengan pelbagai organisasi, agensi, dan pakar dalam bidang pengurusan Haji, Umrah dan pelancongan Islam.</li>
                <li>Meneruskan laluan akademik ke peringkat lebih tinggi, termasuk peluang menyambung pengajian ke peringkat Doktor Falsafah (PhD) dalam bidang berkaitan.</li>
              </ul>
            </div>
             <div class='py-2'>
              <p class='font-bold'>Tahun Pengajian</p>
              <p class=''>1 Tahun</p>
            </div>

            <div>
              <p className='font-bold'>Syarat Kelayakan</p>
              <p>Calon yang berminat untuk mengikuti program ini mestilah memenuhi salah satu daripada kriteria berikut:</p>
              <ul className="list-disc ml-6">
                <li>Memiliki Ijazah Sarjana Muda dengan Purata Nilai Gred Kumulatif (PNGK) minimum 2.75 daripada institusi yang diiktiraf</li>
                <li>Memiliki Ijazah Sarjana Muda dengan PNGK minimum 2.00, dan mempunyai sekurang-kurangnya lima (5) tahun pengalaman kerja dalam bidang berkaitan</li>
                <li>Pemohon yang layak melalui APEL A Tahap 7 (Accreditation of Prior Experiential Learning – Level 7), selaras dengan garis panduan Agensi Kelayakan Malaysia (MQA).</li>
              </ul>
            </div>
          </div>
        </div>
        <div class='bg-green-600 w-[200px] drop-shadow-lg text-white p-2 flex justify-center rounded hover:animate-bounce'>
        <a href='/borangyeg'>SERTAI SEKARANG</a></div>
      </div>
    </div>
  )
}

export default Page

