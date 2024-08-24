import React from "react";
import Image from "next/image"; // Pastikan Anda mengimpor Image dari 'next/image'

const GetApp = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full pb-[100px] ">
      {/* Gambar di sebelah kiri */}
      <div className="flex-shrink-0 w-full lg:w-1/2 flex items-center justify-center lg:justify-start p-6">
        <Image
          src="/aaa.png"
          alt="logo"
          width={400} // Ukuran gambar diperbesar
          height={250}
          className="rounded-3xl"
        />
      </div>

      {/* Konten di sebelah kanan */}
      <div className="flex flex-col items-center lg:items-start lg:w-1/2 p-6 lg:pl-12 lg:pr-6 lg:py-10">
        <h2 className="text-xl font-bold text-[#3366FF] text-center lg:text-left xl:max-w-[400px]">
          "One Step Closer to More Effective and"
          <br />
          <span className="block mt-2">Connected Communication!</span>
        </h2>

        {/* Buttons and Description */}
        <div className="flex flex-col items-center lg:items-start gap-4 mt-6 w-full text-center lg:text-left">
          <div className="flex flex-wrap justify-center gap-4 w-full">
            <button className="px-6 py-2 bg-[#3366FF] text-white font-semibold rounded-md">
              Bisnis dan Pemasaran
            </button>
            <button className="px-6 py-2 border border-[#3366FF] text-[#3366FF] font-semibold rounded-md">
              Komersial dan Penjualan
            </button>
            <button className="px-6 py-2 border border-[#3366FF] text-[#3366FF] font-semibold rounded-md">
              Organisasi Sosial
            </button>
          </div>
          <p className="regular-16 mt-4 text-justify w-full max-w-[800px]">
            Bidang ini dapat memanfaatkan fitur Broadcast untuk mengirim
            promosi, pengumuman, dan informasi produk kepada pelanggan dalam
            jumlah besar secara efisien. Selain itu, fitur Campaign dapat
            membantu merencanakan dan menyampaikan pesan iklan dengan waktu yang
            tepat kepada target audiens yang sesuai.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
