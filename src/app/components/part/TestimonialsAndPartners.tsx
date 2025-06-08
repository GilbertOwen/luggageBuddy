// components/TestimonialsAndPartners.tsx
"use client";
import Image from "next/image";
import { useRef } from "react";

export default function TestimonialsAndPartners() {
  const testimonials = [
    {
      text: "Super praktis dan terpercaya, cara pesennya ga ribet sama sekali!",
      name: "Gilbert Owen",
    },
    {
      text: "Fitur Real-time Location sangat berguna dan sangat presisi, jadi ga takut untuk percayain barang-barang ke sini",
      name: "Muhammad Rizki",
    },
    {
      text: "Pilihan payment yang disediakan sangat lengkap, jadi ga ragu untuk pakai jasa dari LuggageBuddy",
      name: "Billy Ananda",
    },
    {
      text: "Fast response dan bagasinya selalu sampai tepat waktu. Highly recommended!",
      name: "Bianca Putri",
    },
    {
      text: "Fast response dan bagasinya selalu sampai tepat waktu. Highly recommended!",
      name: "Bianca Putri",
    },
    {
      text: "Fast response dan bagasinya selalu sampai tepat waktu. Highly recommended!",
      name: "Bianca Putri",
    },
    {
      text: "Fast response dan bagasinya selalu sampai tepat waktu. Highly recommended!",
      name: "Bianca Putri",
    },
  ];

  const partners = [
    "/resource/kayak_logo.svg",
    "/resource/trivago.svg",
    "/resource/google.svg",
    "/resource/expedia.svg",
    "/resource/airbnb.svg",
    "/resource/airbnb.svg",
    "/resource/airbnb.svg",
    "/resource/airbnb.svg",
    "/resource/airbnb.svg",
  ];
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className={"relative bg-[#E6F8FF] py-16 overflow-hidden"}>
      {/* Yellow tape decorations */}
      <div className={"absolute -top-4 -left-4 w-16 h-12 bg-[#F2C14E] rotate-12"}></div>
      <div className={"absolute top-8 right-8 w-12 h-16 bg-[#F2C14E] -rotate-6"}></div>

      {/* Testimonial & Rating */}
      <h2 className={"text-center text-2xl sm:text-3xl font-bold text-[#178FA0] mb-8"}>
        {"Testimonial & Rating"}
      </h2>

      <div className={"relative"}>
        <div className={"flex space-x-6 overflow-x-auto scrollbar-hide px-12 scroll-smooth snap-x snap-mandatory"}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={"snap-start flex-shrink-0 w-72 bg-white border border-[#178FA0] rounded-lg p-6"}
            >
              <p className={"text-sm mb-4 leading-relaxed"}>{t.text}</p>
              <div className={"flex items-center mb-2"}>
                {/* 5 stars, you can swap for an SVG icon if you like */}
                {Array(5)
                  .fill(0)
                  .map((_, j) => (
                    <span key={j} className={"text-yellow-400"}>
                      {"★"}
                    </span>
                  ))}
                <span className={"ml-2 text-sm font-medium text-[#178FA0]"}>
                  {"5.0"}
                </span>
              </div>
              <p className={"text-xs font-medium"}>{t.name}</p>
            </div>
          ))}
        </div>
        {/* Left/Right scroll hints */}
        <div className={"pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#E6F8FF] to-transparent"}></div>
        <div className={"pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#E6F8FF] to-transparent"}></div>
      </div>

      {/* Our Partners */}
      <div className={"container mx-auto px-4 mt-16 relative"}>
        <h2 className={"text-center text-2xl sm:text-3xl font-bold text-[#178FA0] mb-6"}>
          {"Our Partners"}
        </h2>

        {/* Wrapper hides overflow entirely */}
        <div className={"relative overflow-hidden px-16"}>
          {/* LEFT ARROW */}
          <button
            onClick={() => scroll(-240)}
            className={
              "absolute left-0 top-1/2 transform -translate-y-1/2"
              + " bg-white w-12 h-12 rounded-xl shadow-md"
              + " flex items-center justify-center z-10"
            }
          >
            {"‹"}
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className={
              "flex space-x-6"
              + " transition-transform duration-300"
              + " overflow-x-auto scrollbar-hide"
            }
          >
            {partners.map((src, i) => (
              <div
                key={i}
                className={
                  "flex-shrink-0 w-40 h-24"
                  + " bg-white border border-[#178FA0]"
                  + " rounded-xl"
                  + " flex items-center justify-center"
                }
              >
                <Image
                  src={src}
                  alt={`Partner ${i + 1}`}
                  width={100}
                  height={60}
                  className={"object-contain"}
                />
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll(240)}
            className={
              "absolute right-0 top-1/2 transform -translate-y-1/2"
              + " bg-white w-12 h-12 rounded-xl shadow-md"
              + " flex items-center justify-center z-10"
            }
          >
            {"›"}
          </button>
        </div>
      </div>
    </section>
  );
}
