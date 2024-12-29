import React from 'react'
import Image from 'next/image'

const items = [
  {
    title: "SCHOLARSHIP",
    descriptions: ["Dermasiswa khas untuk yuran pengajian."],
    icon: "/mqaicon1.png",
  },
  {
    title: "Certificate",
    descriptions: ["Percuma Sijil Kemahiran Industtri(SKIN)"],
    icon: "/mqaicon2.png",
  },
  {
    title: "allowance",
    descriptions: ["Elaun praktikal untuk program."],
    icon: "/mqaicon3.png",
  },
  {
    title: "COLLABORATION",
    descriptions: ["Percuma master untuk program Aviation & HajUmrah"],
    icon: "/mqaicon4.png",
  },
 
];

function Facility() {
  return (
    <section className="py-6 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
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


