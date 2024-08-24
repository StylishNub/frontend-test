import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="bg-[#ECF2FA] padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row xl:items-center xl:justify-between">
      <div className="relative z-20 flex flex-1 flex-col xl:w-3/4 xl:mr-8">
        <h3 className="text-[34px] font-extrabold">
          Elevate Your Messaging Efficiency with Our Innovative Admin Tools
        </h3>
        <p className="text-[14px] mt-6 xl:max-w-[520px]">
          Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah
          dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan
          dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis
          dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan
          dengan manajemen konten yang praktis.
        </p>

        <div className="flex flex-col w-full gap-3 sm:flex-row mt-4">
          <Button type="button" title="Daftar Sekarang" variant="btn_black" />
        </div>
      </div>
      <Image
        src="/log.png"
        alt="logo"
        width={186}
        height={219}
        className="xl:flex-shrink-0 xl:w-auto xl:h-auto"
      />
    </section>
  );
};

export default Hero;
