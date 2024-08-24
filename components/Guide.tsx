import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter ">
      <div className="padding-container max-container w-full pb-24">
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="text-[34px] xl:max-w-[390px] font-bold">
            Right Time, Effective Messages
          </h2>
          <p className="text-[14px]xl:max-w-[520px]">
            Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang
            tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan
            pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan
            Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full"></div>
      <div className="flex-shrink-0 w-1/3">
        <Image
          src="/sss.png"
          alt="logo"
          width={400} // Ukuran gambar diperbesar
          height={250}
          className="rounded-3xl"
        />
      </div>
    </section>
  );
}

export default Guide