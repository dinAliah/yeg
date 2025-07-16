import Image from 'next/image'
import React from 'react'
import Contactus from '@/components/Contactus'

function Page() {
  return (
    <div className="relative w-full min-h-screen inline-flex overflow-hidden ">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: 'url("/bgkembarahaji.jpg")',
          backgroundSize: 'auto',
          backgroundPosition: 'top',
        }}
      />
      <div className="absolute inset-0 bg-white opacity-80"></div>
    
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
              <p className="font-bold">
                IJAZAH SARJANA MUDA PENGURUSAN HAJI DAN UMRAH (Kepujian) – MQA/PA 17040
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
              <p>Dengan mengikuti program ini, anda akan:</p>
            </div>

            <p>1) Mengikuti pembelajaran secara hybrid, yang menggabungkan sesi dalam talian dan bersemuka bagi memberikan fleksibiliti tanpa menjejaskan kualiti akademik.</p>

            <div>
              <p>2)Mendapat bimbingan terus daripada Profesor Adjung yang berpengalaman 
                luas dalam industri, yang turut terlibat secara aktif dalam pengurusan 
                ibadah Haji dan Umrah serta sektor logistik dan kebajikan jemaah. 
                Antara tenaga pengajar jemputan yang berwibawa ialah:</p>
                <ul className="list-disc ml-6 py-2">
                    <li>Hajah Ida Riswana Idris, Pengarah Andalusia Travel & Tours – tokoh dalam pelancongan Islam dan pengurusan jemaah.</li>
                    <li>Haji Jainal Haji Ismail, Ketua Pegawai Eksekutif FGV Transport Services – pakar dalam logistik dan pengurusan operasi berskala besar.</li>
                    <li>Al-Habib Sheikh Dr. Prof. Omar Kalash Al-Husainiyy, tokoh ulama dan penasihat di Baitussaadah – berperanan dalam pembentukan spiritualiti dan bimbingan rohani jemaah.</li>
                </ul>
            </div>
            <div class='py-2'>
              <p class='font-bold'>Tahun Pengajian</p>
              <p class=''>3 tahun (9 Semester)</p>
            </div>
            <div>
              <p class='font-bold'>Syarat Kelayakan:</p>
              <p class=''>Calon yang ingin memohon mestilah memenuhi salah satu daripada kelayakan akademik berikut:</p>
              <ul className="list-disc ml-6 py-1">
                <li>Memiliki Diploma dengan PNGK minimum 2.00 ke atas daripada institusi yang diiktiraf</li>
                <li>Lulus Matrikulasi dengan PNGK minimum 2.00 ke atas</li>
                <li>Lulus Sijil Tinggi Persekolahan Malaysia (STPM) dengan PNGK minimum 2.00 ke atas</li>
                <li>STAM minimum adalah Maqbul</li>
                <li>Lulus Sijil Tinggi Agama Malaysia (STAM) dengan pencapaian minimum pangkat Maqbul</li>
                <li>Sihat tubuh badan dan berupaya menjalani aktiviti akademik dan kokurikulum dengan baik</li>
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
