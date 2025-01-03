import React from 'react'

function Syarat() {
  return (
    <>
    <div className="py-4"></div>
    <div className="bg-red-700 text-white py-4">
    <p className="pb-4" style={{color: '#FFFFFF', letterSpacing:'3.5px', fontFamily: '"anton", Sans-serif', fontSize: '23px', textAlign: 'center'}}>Syarat kelayakan</p>
      <div className=" text-center text-lg">
      <li>Memiliki SPM dengan memenuhi kepujian (C) untuk 3 mata pelajaran termasuk math dan satu subjek berkaitan sains/teknikal/vokasional</li>
      <li>Memiliki SPM dan sekurangnya 3 subjek kredit</li>
      <li>Sihat tubuh badan</li>
      <li>Tidak rabun warna</li>
      <li>Lulus bahasa inggeris</li>
    </div>
    </div>
    <div className="py-4"></div>    
    </>
  )
}

export default Syarat