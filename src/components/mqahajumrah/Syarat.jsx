import React from 'react'

function Syarat() {
  return (
    <>
    <div className="py-4"></div>
    <div className="bg-green-700 text-white py-4">
    <p className="pb-3" style={{color: '#FFFFFF', letterSpacing:'3.5px', fontFamily: '"anton", Sans-serif', fontSize: '28px', textAlign: 'center'}}>Syarat kelayakan</p>
      <div className="space-y-3 text-center text-lg">
      <li>Mempunyai minimum 3 kredit dalam mana-mana subjek SPM</li>
      <li>Keputusan Percubaan SPM diterima</li>
      <li>Mempunyai minimum 1 kredit dalam mana-mana subjek SPM (Pra-Diploma)</li>
      <li>Lulus SPM, Sejarah & Bahasa Melayu</li>
      <li>Sihat fizikal tubuh badan</li>
    </div>
    </div>
    <div className="py-4"></div>    
    </>
  )
}

export default Syarat