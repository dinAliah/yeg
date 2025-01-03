import React from 'react'
import Image from 'next/image'

const items = [
  {
    title: "Dermasiswa",
    descriptions: ["Dermasiswa yuran pengajian sebanyak RM2500."],
    icon: "/mqaicon1.png",
  },
  {
    title: "Certificate",
    descriptions: ["Percuma Sijil Kemahiran Industtri(SKIN) Certified Mutawwif Profesional (CMP)"],
    icon: "/mqaicon2.png",
  },
  {
    title: "Elaun",
    descriptions: ["Penginapan disediakan untuk pelajar."],
    icon: "/mqaicon3.png",
  },
  {
    title: "Latihan Industri",
    descriptions: ["Latihan Indstri di Mekah & Madinah selama 1-3 bulan"],
    icon: "/mqaicon4.png",
  },
  {
    title: "Collaboration",
    descriptions: ["Bantuan penempatan kerjaya selepas tamat pengajian"],
    icon: "/mqaicon4.png",
  },
];

function Facility() {
  return (
    <section className="py-6 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-xl p-4 rounded-lg">
            {/* Icon */}
            <div className="mb-4">
              <Image
                src={item.icon}
                alt={`${item.title} icon`}
                width={80}
                height={80}
                style={{
                  objectFit: "contain",
                }}
                className="rounded-md"
              />
            </div>
            {/* Title */}
            <div className="text-lg font-bold mt-4">{item.title}</div>
            {/* Descriptions */}
            {item.descriptions && Array.isArray(item.descriptions) ? (
              item.descriptions.map((description, idx) => (
                <div key={idx} className="text-gray-700 mt-2 text-center">
                  {description}
                </div>
              ))
            ) : (
              <div className="text-gray-500 mt-2 text-center">
                No descriptions available
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Facility;


