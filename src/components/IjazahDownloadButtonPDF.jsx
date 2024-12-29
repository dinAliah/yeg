import React from 'react';

const DownloadButtonPDF = () => {
  const handleDownload = () => {
    // Muat Turun Surat Tawaran
    //   'Diploma' 'Ijazah',
    //   '_blank'
    // );

    window.open(
        'https://drive.google.com/uc?export=download&id=1qV3YEPlyeFsxrvZfrRyeqy3DO5MuKj0v',
        '_blank'
      );
  };
  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
    >
      Ijazah Pengurusan Haji & Umrah
    </button>
  );
};

export default DownloadButtonPDF;
