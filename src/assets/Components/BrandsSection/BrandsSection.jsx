import React from 'react'


const brands = [
  { name: "nykaa", logo: "https://images.seeklogo.com/logo-png/35/1/nykaa-logo-png_seeklogo-358073.png" },
  { name: "godrej", logo: "https://images.seeklogo.com/logo-png/6/1/godrej-logo-png_seeklogo-61760.png" },
  { name: "new balance", logo: "https://images.seeklogo.com/logo-png/9/1/new-balance-logo-png_seeklogo-98723.png" },
  { name: "cult.sport", logo: "https://images.seeklogo.com/logo-png/45/1/cult-fit-logo-png_seeklogo-454845.png" },
  { name: "sennheiser", logo: "https://images.seeklogo.com/logo-png/37/1/sennheiser-logo-png_seeklogo-375193.png" },
  { name: "BRB", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "CAI", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "cult.sport", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "Daybreak", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "Dr. Vaidya's", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "EMBARK", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "flo", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" }
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
