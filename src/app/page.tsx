"use client";
import Image from "next/image";
import Link from "next/link";
import TestimonialsAndPartners from "./components/part/TestimonialsAndPartners";
import BookingFlow from "./components/part/BookingFlow";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* HERO */}
        <section
          id="hero"
          className="relative flex items-center justify-between flex-1 px-20 py-10 bg-[#E6F8FF] overflow-hidden"
        >
          {/* Decorative Rectangles */}
          <Image
            src="/resource/rectangle.svg"
            width={100}
            height={100}
            alt="Decoration"
            className="absolute -top-10 left-5 w-24 rotate-50 z-0"
          />
          <Image
            src="/resource/rectangle.svg"
            width={100}
            height={100}
            alt="Decoration"
            className="absolute top-34 left-[500px] w-24 rotate-40 z-0"
          />
          <Image
            src="/resource/rectangle.svg"
            width={100}
            height={100}
            alt="Decoration"
            className="absolute top-[12rem] left-96 w-20 -rotate-10 z-0"
          />
          <Image
            src="/resource/rectangle.svg"
            width={100}
            height={100}
            alt="Decoration"
            className="absolute top-[12rem] left-12 w-12 rotate-12 z-0"
          />
          <Image
            src="/resource/rectangle.svg"
            width={100}
            height={100}
            alt="Decoration"
            className="absolute top-[380px] left-30 w-12 rotate-12 z-0"
          />
          <Image
            src="/resource/rectangle.svg"
            width={100}
            height={100}
            alt="Decoration"
            className="absolute bottom-10 right-20 w-16 rotate-30 z-0"
          />

          {/* Card */}
          <div className="relative z-20 max-w-md bg-white p-6 rounded-xl shadow-lg shadow-[#1790a03e] border border-[#178FA0] text-[#178FA0]">
            <h1 className="text-4xl font-bold mb-3">LUGGAGE BUDDY</h1>
            <p className="mb-5 font-medium">
              Solusi digital pintar yang dirancang untuk menyimpan dan
              mengantarkan barang bawaan para pelancong dengan cepat, aman, dan
              transparan.
            </p>
            <Link
              href="#how"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#178FA0] text-white rounded-md transition-all duration-200 hover:gap-4 hover:bg-[#F2C14E] hover:text-black"
            >
              <span className="font-semibold">More</span>
              <span className="text-xl">→</span>
            </Link>
          </div>

          {/* Drone + Shape with Hover */}
          <div className="group duration-300">
            <div className="group-hover:h-[500px] ease-in-out duration-300 absolute top-0 h-[400px] w-[300px] bg-[#178FA0] rounded-b-full right-40"></div>
            <Image
              src="/resource/drone.png"
              alt="Drone Delivery"
              width={300}
              height={300}
              className="relative z-10 right-[120px] ease-in-out group-hover:w-[350px] group-hover:h-[350px] duration-300"
            />
          </div>
        </section>

        {/* ABOUT / INTRO */}
        <section
          id="about"
          className="bg-white mx-auto px-[248px] py-12 flex flex-col md:flex-row items-center gap-8"
        >
          {/* Avatar */}
          <Image
            src="/resource/profile.png"
            alt="LuggageBuddy Profile"
            width={96}
            height={96}
            className="rounded-full flex-shrink-0"
          />

          {/* Text */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#178FA0]">LuggageBuddy</h2>
            <p className="text-[#178FA0] leading-relaxed">
              LuggageBuddy adalah layanan penyimpanan barang bawaan terpercaya
              yang membantu traveler, pekerja remote, dan pelancong urban
              menyimpan dan mengelola koper/bagasi dengan aman, mudah dilacak,
              dan dapat dipindahkan antar lokasi. Nikmati perjalanan tanpa
              ribet, fokus pada petualanganmu!
            </p>
          </div>
        </section>
      </div>
      <section className="w-full my-14 flex flex-col justify-center">
        <h2 className="text-[#1f6e7a] font-bold text-xl sm:text-3xl mb-8 text-center">
          Our Special Features
        </h2>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          <div className="flex flex-col items-center space-y-2 w-20 sm:w-24">
            <div className="text-[#1f6e7a] border border-[#1f6e7a] rounded-full p-3 sm:p-4 flex justify-center items-center">
              <Image
                src={"/resource/packet.svg"}
                width={30}
                height={30}
                alt={""}
              ></Image>
            </div>
            <p className="text-[#1f6e7a] text-[9px] sm:text-xs font-semibold text-center leading-tight">
              Drop N Go
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 w-20 sm:w-24">
            <div className="text-[#1f6e7a] border border-[#1f6e7a] rounded-full p-3 sm:p-4 flex justify-center items-center">
              <Image
                src={"/resource/security.svg"}
                width={30}
                height={30}
                alt={""}
              ></Image>
            </div>
            <p className="text-[#1f6e7a] text-[9px] sm:text-xs font-semibold text-center leading-tight">
              Safe Assurance
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 w-20 sm:w-24">
            <div className="text-[#1f6e7a] border border-[#1f6e7a] rounded-full p-3 sm:p-4 flex justify-center items-center">
              <Image
                src={"/resource/navigate.svg"}
                width={30}
                height={30}
                alt={""}
              ></Image>
            </div>
            <p className="text-[#1f6e7a] text-[9px] sm:text-xs font-semibold text-center leading-tight">
              Real Time Location
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 w-20 sm:w-24">
            <div className="text-[#1f6e7a] border border-[#1f6e7a] rounded-full p-3 sm:p-4 flex justify-center items-center">
              <Image
                src={"/resource/truck.svg"}
                width={30}
                height={30}
                alt={""}
              ></Image>
            </div>
            <p className="text-[#1f6e7a] text-[9px] sm:text-xs font-semibold text-center leading-tight">
              Transfer Luggage
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 w-20 sm:w-24">
            <div className="text-[#1f6e7a] border border-[#1f6e7a] rounded-full p-3 sm:p-4 flex justify-center items-center">
              <Image
                src={"/resource/chat.svg"}
                width={30}
                height={30}
                alt={""}
              ></Image>
            </div>
            <p className="text-[#1f6e7a] text-[9px] sm:text-xs font-semibold text-center leading-tight">
              Transparent Testimonial
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 w-20 sm:w-24">
            <div className="text-[#1f6e7a] border border-[#1f6e7a] rounded-full p-3 sm:p-4 flex justify-center items-center">
              <Image
                src={"/resource/phone.svg"}
                width={15}
                height={30}
                alt={""}
              ></Image>
            </div>
            <p className="text-[#1f6e7a] text-[9px] sm:text-xs font-semibold text-center leading-tight">
              Digital Payment
            </p>
          </div>
        </div>
      </section>

      <div className="mb-8">
        <section className="w-full max-w-md">
          <div className="bg-[white] border border-[#1f6e7a] rounded-lg shadow-[0_4px_6px_rgba(31,110,122,0.3)] px-5 py-3">
            <h3 className="text-[#1f6e7a] font-bold text-base sm:text-2xl leading-tight">
              Mengapa LuggageBuddy?
            </h3>
          </div>
        </section>

        {/* “Mengapa LuggageBuddy?” */}
        <section className="relative pb-16 px-4">
          {/* Bullet grid */}
          <div className="bg-white p-14 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 text-[#1f6e7a] text-sm font-medium">
              {[
                {
                  src: "/resource/packet.svg",
                  text: "Drop N Go, percayakan barang anda pada kami, dan kami akan menjamin keamanan barang anda.",
                },
                {
                  src: "/resource/security.svg",
                  text: "Safe Assurance, sistem jaminan yang aman untuk barang anda.",
                },
                {
                  src: "/resource/navigate.svg",
                  text: "Real Time Location, aplikasi kami yang memberi tahu anda lokasi barang tersebut.",
                },
                {
                  src: "/resource/truck.svg",
                  text: "Transfer Luggage, fitur untuk anda yang ingin memindahkan barang yang dititipkan ke lokasi lain.",
                },
                {
                  src: "/resource/chat.svg",
                  text: "Transparent Testimonial, bukti testimoni yang dapat dilihat semua orang, review yang jujur langsung dari customer lain.",
                },
                {
                  src: "/resource/phone.svg",
                  text: "Digital Payment, dapat dibayar kapanpun, dimanapun.",
                },
              ].map(({ src, text }, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="border border-[#1f6e7a] rounded-full p-3 flex-shrink-0 flex items-center justify-center">
                    <Image src={src} width={30} height={30} alt="" />
                  </div>
                  <p className="leading-relaxed w-[80%]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* HOW IT WORKS */}
      <section id="how" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-[#178FA0] font-bold text-2xl sm:text-3xl mb-12 text-center">
            Cara Menggunakan Jasa Kami
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-8 sm:space-y-0 sm:space-x-4">
            {/* Step 1 */}
            <div className="flex-1 bg-white border border-[#178FA0] rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="/resource/phone.svg"
                  width={24}
                  height={24}
                  alt="Form Icon"
                />
                <h3 className="ml-2 font-semibold text-[#178FA0]">
                  Memasukan Informasi
                </h3>
              </div>
              <ul className="list-disc list-inside text-[#178FA0] space-y-1 text-sm">
                <li>Pilih lokasi penyimpanan</li>
                <li>Detail barang</li>
                <li>Durasi penyimpanan</li>
              </ul>
            </div>

            {/* Dotted Connector (only on sm+ screen) */}
            <div className="hidden sm:block flex-none text-[#178FA0]">
              <span className="inline-block h-0.5 w-16 bg-dotted bg-[#178FA0]"></span>
            </div>

            {/* Step 2 */}
            <div className="flex-1 bg-white border border-[#178FA0] rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <h3 className="ml-2 font-semibold text-[#178FA0]">
                  Pilih Metode Pengiriman
                </h3>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <span>Drop-off</span>
                </div>
                <div className="h-px flex-1 bg-[#178FA0] mx-2"></div>
                <div className="flex items-center space-x-1">
                  <span>Pick-up</span>
                </div>
              </div>
            </div>

            {/* Dotted Connector */}
            <div className="hidden sm:block flex-none text-[#178FA0]">
              <span className="inline-block h-0.5 w-16 bg-dotted bg-[#178FA0]"></span>
            </div>

            {/* Step 3 */}
            <div className="flex-1 bg-white border border-[#178FA0] rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <h3 className="ml-2 font-semibold text-[#178FA0]">
                  Pembayaran & Proses
                </h3>
              </div>
              <ul className="list-disc list-inside text-[#178FA0] space-y-1 text-sm">
                <li>Pilih metode pembayaran</li>
                <li>Barang diproses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-[#178FA0] font-bold text-2xl sm:text-3xl mb-12 text-center">
            Paket-Paket yang Ditawarkan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "BuddyPro",
                price: "IDR 30K / hari",
                items: [
                  "2 koper/bagasi",
                  "Drop & pick 24 jam",
                  "Prioritas penjadwalan (slot pengambilan lebih cepat)",
                  "Asuransi standar",
                ],
                corners: "rounded-l-full",
              },
              {
                title: "Buddy",
                price: "IDR 20K / hari",
                items: [
                  "1 koper/bagasi",
                  "Drop & pick 24 jam",
                  "Notifikasi update",
                ],
                corners: "",
              },
              {
                title: "DroneBuddy",
                price: "IDR 30K / hari",
                items: [
                  "1 koper/bagasi",
                  "Pengantaran & pick-up lewat drone (area terbatas*)",
                  "Waktu pengiriman",
                ],
                corners: "rounded-r-full",
              },
            ].map(({ title, price, items, corners }, index) => (
              <div
                key={title}
                className={`
            bg-white border border-[#178FA0] shadow-lg p-6
            ${corners} ${index == 0 ? 'text-right' : ''} ${index == 1 ? 'text-center' : ''} rounded-lg
          `}
              >
                <h3 className="text-[#178FA0] font-semibold italic mb-2">
                  {title}
                </h3>
                <p className="text-[#178FA0] font-bold mb-4">{price}</p>
                <ul className="list-none  space-y-2 text-[#178FA0] text-sm">
                  {items.map((it, i) => (
                    <li key={i} className={`flex ${index == 0 ? 'text-right' : ''}`}>
                      <span className="mr-2 text-green-600">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialsAndPartners></TestimonialsAndPartners>
      <BookingFlow></BookingFlow>
    </>
  );
}
