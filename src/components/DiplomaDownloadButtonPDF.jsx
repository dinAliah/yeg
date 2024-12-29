import React from 'react';

const DownloadButtonPDF = () => {
  const handleDownload = () => {
    // Muat Turun Surat Tawaran
    //   'Diploma' 'Ijazah',
    //   '_blank'
    // );

    window.open(
        'https://drive.google.com/uc?export=download&id=1yv3TOJYQXsR2Z4KCSCLJxs3u8HMhjS5x',
        '_blank'
      );
  };
  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
    >
      Diploma Pengurusan Haji & Umrah
    </button>
  );
};

export default DownloadButtonPDF;
