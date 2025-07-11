import React from 'react'


const brands = [
  { name: "aastey", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "Alpino", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "amanté", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "AZANI", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "The Whole Truth", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "BRB", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "CAI", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "cult.sport", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "Daybreak", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "Dr. Vaidya's", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "EMBARK", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "flo", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "Godrej", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "kikibix", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "Milton", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "Nestroots", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "Nykaa", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
  { name: "New Balance", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" }
];


export default function BrandsSection() {
  return (
    <div className="bg-emerald-400 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-xl font-medium text-black">
          Trusted by nearly 200+ paying customers
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
              className="max-h-12 max-w-[90%] object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
