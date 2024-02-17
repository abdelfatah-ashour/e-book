import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function MainHeader() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className} ${index} w-6 h-6 rounded-sm bg-green-600 inline-block mx-1 cursor-pointer"></span>`;
    },
  };

  return (
    <section className="md:container mx-auto h-screen mt-8 mb-[3rem]">
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: pagination.renderBullet,
        }}
        modules={[Pagination]}
        className="relative w-full h-[40rem]"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <SwiperSlide
            key={index}
            className="relative flex justify-center items-center"
          >
            <img
              src="https://i.pinimg.com/736x/bb/f9/9e/bbf99e49da39f03696f9f5175e298f7b.jpg"
              alt="Big ramy"
              loading="lazy"
              className="absolute top-0 right-0 left-0 bottom-0 z-10 w-full h-full object-fill"
            />
            <div className="absolute top-0 right-0 left-0 bottom-0  z-20 bg-gradient-to-t from-black bg-opacity-45"></div>
            <div className=" flex flex-col items-center justify-end gap-6 pb-6 z-30">
              <h2 className="uppercase text-2xl text-enter font-medium">
                training courses, book
              </h2>
              <p className="text-4xl font-extrabold uppercase text-center">
                make your healthy body
                <br /> strong is our responsibly
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
