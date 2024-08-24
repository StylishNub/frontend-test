import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="flex py-24 bg-[#ECF2FA]">
      {/* Gambar di sebelah kiri */}
      <div className="flex-shrink-0 w-1/3 p-6">
        <Image
          src="/qqq.png"
          alt="logo"
          width={400} // Ukuran gambar diperbesar
          height={250}
          className="rounded-3xl"
        />
      </div>
      {/* Konten teks di sebelah kanan */}
      <div className="flex-1 max-container padding-container relative flex flex-col justify-center">
        <div className="relative w-full">
          <h2 className="text-xl lg:text-4xl font-bold">
            Respond Faster with the Convenience of Auto Reply
          </h2>
          <h3 className="mt-6">
            Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan
            dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami,
            Anda dapat menjawab pertanyaan atau memberikan respon otomatis,
            menghemat waktu dan energi Anda. Tanggap lebih cepat dengan
            Fowardin.
          </h3>
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
