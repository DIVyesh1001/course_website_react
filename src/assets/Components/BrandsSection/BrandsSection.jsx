import React from 'react'


const brands = [
  { name: "nykaa", logo: "https://images.seeklogo.com/logo-png/35/1/nykaa-logo-png_seeklogo-358073.png" },
  { name: "godrej", logo: "https://images.seeklogo.com/logo-png/6/1/godrej-logo-png_seeklogo-61760.png" },
  { name: "new balance", logo: "https://images.seeklogo.com/logo-png/9/1/new-balance-logo-png_seeklogo-98723.png" },
  { name: "cult.sport", logo: "https://images.seeklogo.com/logo-png/45/1/cult-fit-logo-png_seeklogo-454845.png" },
  { name: "sennheiser", logo: "https://i.postimg.cc/Z5q3hYmH/images.png" },
  { name: "serona", logo: "https://i.postimg.cc/TY3hKksY/pee-safe.png" },
  { name: "CAI", logo: "https://i.postimg.cc/1tS3sM6S/milton.png" },
  { name: "cult.sport", logo: "https://i.postimg.cc/cC9x7Sz1/bombay-shaving.jpg" },
  { name: "Daybreak", logo: "https://i.postimg.cc/0y2z74hH/vaidya-e1628684769180.png" },
  { name: "Dr. Vaidya's", logo: "https://i.postimg.cc/JzwCwtsM/Flo.webp" },
  { name: "EMBARK", logo: "https://i.postimg.cc/8cSXkGk7/images-4.png" },
  { name: "flo", logo: "https://i.postimg.cc/vTybVDtM/Timberland-logo.png" }
];


export default function BrandsSection() {
  return (
    <div className="bg-emerald-400 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-xl font-medium text-black">
          Trusted by nearly 200+ brands
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white flex items-center justify-center h-36 p-4 shadow-sm rounded"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-30 max-w-[90%] object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
