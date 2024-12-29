import React from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

function telco() {
  return (
    <>
    {/* <nav className="hidden lg:block sticky top-0 ">
      <Navbar />
    </nav>
    <nav className="lg:hidden">
      <Sidebar />
    </nav> */}
    <div className="flex grid-cols-2 gap-4">
        <div className="p-2">
        <div className="w-full shadow-md p-2">
        <div className="p-4">
            <div className="py-4">
              <h className="font-bold">Malaysia Industry Skills Academy(MISA)</h>
            </div>
            <div className="py-3 grid space-y-5">
              <h className="font-semibold">Authorised Gas Tester and Entry Supervisor(AGTES)</h>
              <h>Melangkah ke dunia penguji gas dan penyelia masuk, keselamatan tinggi, pengiktirafan, dan peluang global.</h>
            </div>
            <div className="space-y-5">
              <div className="flex justify-center">
                <h className="text-justify">Kursus ini memberi latihan dan pensijilan kepada individu yang terlibat dalam pekerjaan di ruang terkurung, seperti penguji gas dan penyelia kemasukkan. Kurusus ini bertujuan untuk memastikan keselamatan ketika bekerja di ruang terkurung, termasuk mengenal pasti bahaya, menggunakan alat pengesan gas, dan mengikut prosedur kerja yang betul. Peserta kursus AGTES akan dilatih untuk memahami undang-undang berkaitan ruang terkurung, menguji gas dan mentafsir keputusan ujian, serta mengetahui langkah-langkah kecemasan. Kursus ini biasanya berlangsung selama tiga hari dan terbuka kepada pelbagai individu yang terlibat dalam pekerjaan ruang terkurung seperti jurutera,penyelia,pegawai keselamatan dan pekerja am. Untuk memenuhi syarat sebagai AGTES, seseorang perlu lulus kursus ini dan mempunyai pengalaman dalam bidang terkurung, serta kredit dalam subjek sains di peringkat SPM</h>
              </div>

              <div className="grid space-y-2">
                <h className="">Authorised Gas Tester (AGT):</h>
                <ul class="list-disc list-outside px-6">
                  <li>Melakukan ujian gas sebelum dan semasa operasi di ruang terkurung.</li>
                  <li> Mengukur kehadiran gas-gas berbahaya seperti oksigen, karbon monoksida, hidrogen sulfida, dan bahan mudah terbakar</li>
                  <li>Menggunakan peralatan pengesan gas untuk memastikan tahap keselamatan yang mencukupi</li>
                </ul>
              </div>

              <div className="grid space-y-2">
                <h className="">Entry Supervisor:</h>
                <ul class="list-disc list-outside px-6">
                  <li>Menyelia keseluruhan aktiviti kemasukan ke dalam ruang terkurung.</li>
                  <li>emastikan semua prosedur keselamatan dipatuhi, termasuk dokumen-dokumen seperti permit kemasukan (Entry Permit).</li>
                  <li>Menentukan sama ada ruang selamat untuk dimasuki dan menyelia pekerja sepanjang tempoh operasi di ruang tersebut.</li>
                </ul>
              </div>

              <div className="py-3 grid space-y-5">
                <h>Kerja di ruang terkurung membawa risiko tinggi, termasuk kekurangan oksigen atau pendedahan kepada gas beracun. Oleh itu, AGTES dilatih untuk mengenali bahaya ini dan mengambil langkah-langkah keselamatan yang diperlukan bagi mengelakkan kemalangan atau kecelakaan. AGTES adalah sebahagian daripada systems keselamatan yang penting di industri seperti pembinaan, minyak dan gas, serta loji petrokimia, di mana kerja dalam ruang terkurung adalah rutin. Latihan dan pensijilan AGTES diberikan oleh badan-badan yang diiktiraf, termasuk Jabatan Keselamatan dan Kesihatan Pekerjaan (DOSH), dan melibatkan latihan praktikal serta teori. Kursus jangka pendek yang ditawarkan oleh AGTES biasanya berkaitan dengan keselamatan dan pengurusan ruang terkurung. Antara kursus jangka pendek yang sering disebabkan adalah:</h>
              </div>

              <div className="grid space-y-2">
                <div><h className="">1. Menguji dan memantau tahap gas.</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Mengukur kepekatan gas dab memastikan tahap gas selamat</li>
                  </ul></div>
                <div><h className="">2. Mengendalikan peralatan pengesan gas</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Contoh, gas detektor. Memastikan ia berfungsi dengan betul sebelum digunakan</li>
                  </ul></div>
                <div><h className="">3. Menyediakan permit kemasukan (Permit-To-Work - PTW)</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Menyemak dan meluluskan permit</li>
                    <li>Mengesahkan bahawa semua langkah keselamatan telah diambil</li>
                  </ul></div>
                <div><h className="">4. Memberi taklimat keselamatan kepada pekerja</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Mengadakan sesi taklimat keselamtan</li>
                    <li>Memastikan semua pekerja memahami risiko</li>
                  </ul></div>
                <div><h className="">5. Menyelia kemasukkan dan aktiviti pekerja di ruang terkurung</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Mengawasi pekerja</li>
                    <li>engesan sebarang perubahan bahaya</li>
                  </ul></div>
                  <div><h className="">6. Memastikan penggunaan peralatan perlindungan diri(PPE)</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Menyemak keberkesanan dan kebolehlaksanaan PPE</li>
                  </ul></div>
                  <div><h className="">7. Menjalankan penilaian risiko</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Mengambil langkah mitigasi yang sesuai</li>
                  </ul></div>
                  <div><h className="">8. Menangani kecemasan dan prosedur peneyelamatan</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Merancang dan melaksanakan prosedur kecemasan</li>
                    <li>Membuat keputusan segera</li>
                  </ul></div>
                  <div><h className="">9. Menyediakan laporan keselamatan</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Merekod keputusan pengujian gas</li>
                  </ul></div>
                  <div><h className="">10. Bekerjasama dengan pasukan keselamatan lain</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Menyelaras tindakkan keselamatan</li>
                  </ul></div>
              </div>

              <div className="grid space-y-2">
                <h className="">Dengan Kursus Ini, Anda Akan Dapat:</h>
                <li className="px-4">Penginapan disediakan secara percuma</li>
                <li className="px-4">Penempatan kerja disediakan</li>
                <li className="px-4"> Sijil industri yang diiktiraf Jabatan Keselamatan dan Kesihatan Pekerjaan (DOSH)</li>
                <li className="px-4">Bill elektrik dan bil air disediakan secara percuma untuk mereka yang menginap di asrama</li>
                <li className="px-4">Percuma makan dan minum tiga kali sehari semasa latihan</li>
                <li className="px-4">Percuma basic uniform PPE(helmet keselamatan & kasut keselamatan)</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Antara Sijil yang diiktiraf:</h>
                <li className="px-4">Kursus Authorised Gas Tester And Entry Supervisor (AGTES)</li>
                <li className="px-4">Authorised Entrant Standby Person(AESPTM)</li>
                <li className="px-4">NIOSH TM Safety Passport(NTMSP)</li>
                <li className="px-4">CA2C</li>
                <li className="px-4">Ocupational Safety & Health Coordinator(OSHC)</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Syarat-Syarat Kelayakan</h>
                <li className="px-4">18 tahun ke atas</li>
                <li className="px-4">Minimum SPM (kredit subjek sains, contoh kimia, fizik atau setaraf)</li>
                <li className="px-4">Sihat tubuh badan</li>
                <li className="px-4">Bebas penyalahgunaan dadah</li>
                <li className="px-4">Tiada rekod jenayah</li>
                <li className="px-4">Penguasaan Bahasa Melayu dan Bahasa inggeris yang baik</li>
              </div>
            </div>
          </div>
        </div>
        </div>


        <div>
        <div>
        <div className="p-2">
        <div className="w-full shadow-md p-2">
            <div className="py-4">
              <h className="font-bold">Malaysia Industry Skills Academy(MISA)</h>
            </div>
            <div className="py-3 grid space-y-5">
              <h className="font-semibold">Fiber Optic Splicer Technician(FOST)</h>
              <h>Melangkah ke dunia penguji gas dan penyelia masuk, keselamatan tinggi, pengiktirafan, dan peluang global.</h>
            </div>
            <div className="space-y-5">
              <div className="flex justify-center">
                <h className="text-justify">Kursus ini bertanggunjawab untuk menyambung dan memastikan sambungan gentian optik berfungsi dengan betul dalam systems komunikasi optik. Gentian optik adalah teknologi yang menggunakan kabel yang diperbuat daripada serat kaca atau plastik untuk menghantar data dalam bentuk Cahaya, dan tugas utama juruteknik ini adalah memastikan bahawa sambungan gentian optik bebas daripada kerosakkan dan dapat memindahkan data dengan cekap.</h>
              </div>

              <div className="grid space-y-2">
                <h className="">Peranan dan kepentingan:</h>
                <ul class="list-disc list-outside px-6">
                  <li><span className="font-bold">Penting dalam Infrastruktur Telkomunikasi:</span>Fibre optik splider technicians memainkan peranan kritikal dalam membina, menyambung, dan menyelenggara infrastruktur komunikasi modern, termasuk internet berkelajuan tinggi, kabel TV, dan rangkaian telefon.</li>
                  <li><span className="font-bold">Kecekapan Penghantaran Data:</span>Kerja mereka memastikan bahawa penghantaran data melalui gentian optikadalah cekap, mengurangkan kelewatan atau kehilangan isyarat.</li>
                </ul>
              </div>
              <div className="grid space-y-2">
                <h className="font-bold">Kemahiran yang diperlukan:</h>
                <ul class="list-disc list-outside px-6">
                  <li><span className="font-bold">Kemahiran Teknikal:</span>Kemahiran dalam menggunakan peralatan penyambungan dan pengujian optik.</li>
                  <li><span className="font-bold">Ketelitian:</span>Proses splicing memerlukan ketepatan tinggi untuk memastikan penyambungan yang sempurna</li>
                  <li><span className="font-bold">Pemahaman Mengenai Sistem Komunikasi:</span>Pengetahuan dalam sistems rangkaian dan pengendalian gentian optik dalam pelbagai aplikasi.</li>
                </ul>
              </div>
              <div className="grid space-y-2">
                <h className="font-bold">Kelebihan program:</h>
                <ul class="list-disc list-outside px-6">
                  <li> Majikan telah menawarkan pekerjaan sebelum peserta tamat latihan.</li>
                  <li> Keutamaan bekerja di lokaliti setempat.</li>
                  <li>Memberi peluang kedua kepada remaja yang gagal dalam akademik.</li>
                </ul>
              </div>
              <div className="grid space-y-2">
                <h className="font-bold">Berikut adalah sijil yang diiktiraf dalam kursus ini:</h>
                <ul class="list-disc list-outside px-6">
                  <li>NIOSH TM Safety Passport.</li>
                  <li>NIOSH TENAGA Safety Passport</li>
                  <li>Authorised Entrant and Standby Person FOR TM Contractor (AESPTM).</li>
                  <li>TM-CA1C</li>
                  <li>TM-CA2C</li>
                  <li>Fibre Optic Splicing</li>
                  <li>Basic Occupational First Aid (BOFA)</li>
                  <li>Pole Proficiency</li>
                </ul>
              </div>
              <div className="grid space-y-2">
                <h className="font-bold">Badan pensijilan yang terlibat:</h>
                <ul class="list-disc list-outside px-6">
                  <li>NIOSH</li>
                  <li>TM</li>
                  <li>SRC GLOBAL RESOURCES</li>
                </ul>
              </div>
              <div className="grid space-y-2">
                <h className="font-bold">Syarat kelaykan:</h>
                <ul class="list-disc list-outside px-6">
                  <li>Minimum SPM</li>
                  <li>Berumur 18 tahun ke atas</li>
                  <li>Lelaki</li>
                  <li>Tidak rabun warna</li>
                  <li>Tidak mempunyai rekod jenayah</li>
                  <li>Sihat tubuh badan</li>
                  <li>Bebas penyalahgunaan dadah</li>
                </ul>
              </div>


              <div className="grid space-y-2">
                <h className="">Dengan Kursus Ini, Anda Akan Dapat:</h>
                <li className="px-4">Penginapan disediakan secara percuma</li>
                <li className="px-4">Penempatan kerja disediakan</li>
                <li className="px-4"> Sijil industri yang diiktiraf Jabatan Keselamatan dan Kesihatan Pekerjaan (FOST)</li>
                <li className="px-4">Bill elektrik dan bil air disediakan secara percuma untuk mereka yang menginap di asrama</li>
                <li className="px-4">Percuma makan dan minum tiga kali sehari semasa latihan</li>
                <li className="px-4">Percuma basic uniform PPE(helmet keselamatan & kasut keselamatan)</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Antara Sijil yang diiktiraf:</h>
                <li className="px-4">Kursus Authorised Gas Tester And Entry Supervisor (AGTES)</li>
                <li className="px-4">Authorised Entrant Standby Person(AESPTM)</li>
                <li className="px-4">NIOSH TM Safety Passport(NTMSP)</li>
                <li className="px-4">CA2C</li>
                <li className="px-4">Ocupational Safety & Health Coordinator(OSHC)</li>
              </div>
              <div className="grid space-y-2">
                <h className="">Syarat-Syarat Kelayakan</h>
                <li className="px-4">18 tahun ke atas</li>
                <li className="px-4">Minimum SPM (kredit subjek sains, contoh kimia, fizik atau setaraf)</li>
                <li className="px-4">Sihat tubuh badan</li>
                <li className="px-4">Bebas penyalahgunaan dadah</li>
                <li className="px-4">Tiada rekod jenayah</li>
                <li className="px-4">Penguasaan Bahasa Melayu dan Bahasa inggeris yang baik</li>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    </div>
    
    <div className="flex grid-cols-2 gap-4">
        <div className="p-2">
        <div className="w-full shadow-md p-2">
        <div className=" p-4">
            <div className="py-4">
              <h className="font-bold">Malaysia Industry Skills Academy(MISA)</h>
            </div>
            <div className="py-3 grid space-y-5">
              <h className="font-semibold">FIBRE OPTIC TECHNICIAN(FOT)</h>
              <h>Melangkah ke kemahiran tinggi, peluang luas.</h>
            </div>
            <div className="py-3 grid space-y-5">
                <h>Kursus ini bertanggungjawab untuk memasang, menyelenggara, menguji, dan membaiki sistem gentian optik yang digunakan untuk penghantaran data berkelajuan tinggi. Gentian optik merupakan kabel yang diperbuat daripada kaca atau plastic halus yang menghantar isyarat cahaya, digunakan secara meluas dalam telekomunikasi, internet, dan rangkaian kabel TV</h>
              </div>
            <div className="space-y-5">
              <div className="flex justify-start">
                <h className="text-justify">Konsep Utama:</h>
              </div>
              <div className="grid space-y-2">
                <div><h className="">1. Pemasangan Kabel Gentian Optik:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Juruteknik bertugas untuk memasang kabel gentian optik di pelbagai persekitaran, seperti di bawah tanah, di dalam bangunan, atau di menara komunikasi. Mereka memastikan pemasangan dilakukan dengan betul untuk memaksimumkan kecekapan penghantaran data.</li>
                  </ul></div>
                <div><h className="">2. Penyambungan Gentian Optik(Splicing):</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Penyambungan (splicing) adalah proses menyambungkan dua hujung gentian optik untuk memastikan kesinambungan dalam sistem. Teknik utama termasuk fusion splicing dan mechanical splicing, di mana juruteknik memastikan bahawa penyambungan ini dilakukan dengan tepat untuk mengelakkan kehilangan isyarat</li>
                  </ul></div>
                <div><h className="">3. Pengujian dan Penyelesaian Masalah:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Juruteknik menggunakan peralatan seperti Optical Time-Domain Reflectometer (OTDR) dan power meters untuk mengesan dan menganalisis isyarat dalam kabel gentian optik. Mereka menguji kekuatan isyarat dan mencari punca gangguan atau kehilangan data</li>
                  </ul></div>
                  <div><h className="">4. Penyelenggaraan dan Pembaikan:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Juruteknik menggunakan peralatan seperti Optical Time-Domain Reflectometer (OTDR) dan power meters untuk mengesan dan menganalisis isyarat dalam kabel gentian optik. Mereka menguji kekuatan isyarat dan mencari punca gangguan atau kehilangan data.</li>
                  </ul></div>
                  <div><h className="">5. Pemahaman Terhadap Standart Indstri:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Juruteknik menggunakan peralatan seperti Optical Time-Domain Reflectometer (OTDR) dan power meters untuk mengesan dan menganalisis isyarat dalamkabel gentian optik. Mereka menguji kekuatan isyarat dan mencari punca gangguan atau kehilangan data.</li>
                  </ul></div>
                  <div><h className="">6. Bekerja dengan Peralatan Perlindungan Diri (PPE):</h>
                  <ul class="list-disc list-outside px-6">
                    <li>Juruteknik menggunakan peralatan seperti Optical Time-Domain Reflectometer (OTDR) dan power meters untuk mengesan dan menganalisis isyarat dalam kabel gentian optik. Mereka menguji kekuatan isyarat dan mencari punca gangguan atau kehilangan data.</li>
                  </ul></div>
              </div>
              <div className="py-3 grid space-y-5">
                <h>Terdapat pelbagai kursus jangka pendek yang ditawarkan untuk kursus ini bagi membangunkan kemahiran teknikal dan profesional mereka. Berikut adalah beberapa kursus yang biasanya tersedia:</h>
              </div>
              <div className="grid space-y-2">
                <div><h className="">1. Pemasangan, Penyambungan, Ujian Dan Penyelenggaraan Fiber:</h>
                  <ul class="list-disc list-outside px-6">
                    <li> Fiber Optic Communication Technology.</li>
                    <li> Fiber Optic Cables and Connector</li>
                    <li> Fiber Optic Test and Measurement</li>
                    <li> Optical Fiber Installation</li>
                    <li> Fiber Splicing</li>
                    <li> OTDR Test</li>
                  </ul></div>
                <div><h className="">2. Pemasangan, Penyambungan, Ujian Dan Penyelenggaraan Cooper:</h>
                  <ul class="list-disc list-outside px-6">
                    <li> Cooper Communication Technology.</li>
                    <li> Cooper Cables and Connector.</li>
                    <li> Cooper Test and Measurement.</li>
                    <li> Cooper Installation.</li>
                    <li> Testing.</li>
                    <li> Terminology and safety equipment.</li>
                  </ul></div>
                <div><h className="">3. Amali Pemasangan Dan Demo</h></div>
                <div><h className="">4. Authorised Entrant and Standby Person for Confined Space for Telekom Malaysia(AESPTM)</h></div>
                <div><h className="">5. Niosh TM Safety Passport(NTMSP)</h></div>
                <div><h className="">6.  Working At Height (Pole Proficiency)</h></div>
                <div><h className="">7.  Basic Occupational First Aid (BOFA)</h></div>
                <div><h className="">8.  Program Kerohanian dan Motivasi</h></div>
              </div>
              <div><h className="">Berikut adalah sijil yang diiktiraf dalam kursus ini:</h>
                  <ul class="list-disc list-outside px-6">
                    <li>NIOSH TM Safety Passport</li>
                    <li>Authorised Entrant and Standby Person FOR TM Contractor (AESPTM)</li>
                    <li>TM – CA1C</li>
                    <li>TM – CA2C</li>
                    <li>TM – CA2A</li>
                    <li>Basic Occupational First Aid (BOFA)</li>
                    <li>Pole Proficiencly</li>
                  </ul></div>
                <div><h className="">Badan pensijilan yang terlibat:</h>
                <ul class="list-disc list-outside px-6">
                  <li>NIOSH</li>
                  <li>TM</li>
                  <li>SRC Global Resources</li>
                </ul></div>
                <div><h className="">Syarat kelayakan:</h>
                <ul class="list-disc list-outside px-6">
                  <li>Minimum SPM</li>
                  <li>Berumur 18 tahun dan ke atas</li>
                  <li>Lelaki</li>
                  <li>Tidak rabun warna</li>
                  <li>Tiada rekod jenayah</li>
                  <li>Sihat tubuh badan</li>
                  <li>Bebas penyelahgunaan dadah</li>
                </ul></div>
            </div>
          </div>
        </div>
        </div>
        <div>2</div>
    </div>

    </>
  )
}

export default telco