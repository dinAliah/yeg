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
              <p className="font-bold">Sijil Profesional Haji & Umrah</p>
              {/* <p>Master Hajj & Umrah Management - MHUM</p> */}
            </div>
            <p>
              Program SPHU adalah kerjasama antara YEG Academy, AMTC dan FINE Academ 
              sebagai alternatif pendek kepada Diploma Pengurusan Haji dan Umrah. 
              la ditawarkan kepada ibubapa dan penjaga yang ingin mendalami ilmu 
              haji dan umrah secara fleksible dan intensif.
            </p>
            <p>
               Program ini dijalankan sepenuhnya atas talian selama 3 bulan, 
               dengan akses kepada portal e-hajj 24jam sehari hingga 2 thaun. 
               Peserta belajar secara kendiri mengikut jadual masing-masing.
            </p>
            <p>
              Tenaga pengajar terdiri daripada tokoh industri berpengalaman 
              seperti Datuk Haji Kamal dan Dato'Haji Md Daud Che Ngah.
            </p>
            <p>
              Modul pembelajaran merangkumi 20 topik seperti fiqh haji dan umrah, 
              kesihatan, bahasa Arab, sirah serta kemahiran komunikasi dan kepimpinan.
            </p>
          </div>

          {/* Section 2 */}
          <div className="lg:py-10 py-6 space-y-4 text-black">
            <div>
            </div>
            <div>
              <p>Antara kelebihan Program, anda akan dapat:</p>
              <ul className="list-disc ml-6 py-2">
                <li>Percuma penginapan semasa latihan praktikal 2 hari 1 malam.</li>
                <li>Percuma Boucher RM500 Umrah Kembara Penyucian Jiwa Train The Trainer(Kpj-Ttt)</li>
                <li>Percuma buku solusi menuju Baitullah + Mudahnya umrah dengan kaedah S.A.L.A.K</li>
                <li>Akses 24jam selama setahun modul latihan</li>
                <li>Sesi live coaching khas bersama pakar industri</li>
                <li>Potongan 50% Sijil Profesional Haij & Umrah</li>
                <li>Bonus 17 Modul dan 6 Modul Eksklusif</li>
                <li>Himpunan lebih 5000 soalan & Jawapan (Faq) mengenai Haji dan Umrah (Bank Soalan)</li>
                <li>Kelayakan Eksklusif ke Ijazah Sarjana Muda yang diiktiraf oleh Mqa (Mqa/Pa 17040)</li>
              </ul>
            </div>
             <div class='py-2'>
              <p class='font-bold'>Tahun Pengajian</p>
              <p class=''>3 Bulan (secara atas talian)</p>
            </div>

            <div>
              <p className='font-bold'>Syarat Kelayakan</p>
              <p>Calon yang berminat untuk mengikuti program ini mestilah memenuhi salah satu daripada kriteria berikut:</p>
              <ul className="list-disc ml-6">
                <li>Berumur 18 tahun ke atas</li>
                <li>Boleh membaca, menulis dan mengira serta mempunyai minat mendalam dalam bidang berkaitan</li>
                <li>Sihat tubuh badan</li>
                <li>Bebas daripada sebarang penyalahgunaan dadah atau rekod jenayah</li>
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

