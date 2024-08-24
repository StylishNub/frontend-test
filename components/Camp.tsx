import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                key={url} // Menambahkan key untuk elemen yang diulang
                src="/ppp.png"
                alt="profile-pic"
                width={50} // Ukuran gambar disesuaikan
                height={50}
                className="rounded-full" // Menambahkan border-radius untuk gambar bulat
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="bg-[#ECF2FA] relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      {/* <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div> */}

      <div className="flex items-center mt-10 px-6 lg:mt-20 lg:px-12">
        <div className="flex-shrink-0 w-1/3">
          <Image
            src="/ppp.png"
            alt="logo"
            width={400} // Ukuran gambar diperbesar
            height={250}
            className="rounded-3xl"
          />
        </div>
        <div className="ml-6 flex flex-col justify-center bg-[#ECF2FA] p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-black">
            <strong>Reach Further with Ease</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-black">
            Fowardin memberikan Anda akses cepat untuk memperluas jangkauan
            komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim
            pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens
            Anda tidak pernah semudah ini.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Camp;
