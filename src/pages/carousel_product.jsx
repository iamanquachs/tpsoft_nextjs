import React from "react";
import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CarouselProduct() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 374 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };
  const sliderImageUrl = [
    //First image url
    {
      url: require("../vendor/image/Logo_TimBacSi_w.svg"),
      text: "Đặt lịch khám bệnh",
      link: "/phan-mem-dat-lich",
    },
    {
      url: require("../vendor/image/logo_onebis_w.svg"),
      text: "Quản lý khám bệnh",
      link: "/phan-mem-phong-kham",
    },
    {
      url: require("../vendor/image/Logo_EGpp_w.svg"),
      text: "Quản lý Nhà thuốc",
      link: "/phan-mem-nha-thuoc",
    },
    {
      url: require("../vendor/image/Logo_KQXN_w.svg"),
      text: "Quản lý Xét nghiệm",
      link: "/phan-mem-xet-nghiem",
    },
    {
      url: require("../vendor/image/Logo_EGdp_w.svg"),
      text: "Quản lý Công ty Dược",
      link: "/phan-mem-cong-ty-duoc",
    },
    {
      url: require("../vendor/image/logo_onebis_w.svg"),
      text: "Quản lý Nha khoa",
      link: "/phan-mem-nha-khoa",
    },
    {
      url: require("../vendor/image/logo_onebis_w.svg"),
      text: "Quản lý Thẩm Mỹ",
      link: "/phan-mem-tham-my",
    },
    {
      url: require("../vendor/image/logo_onebis_w.svg"),
      text: "Quản lý Spa & Nail",
      link: "/phan-mem-spa-nail",
    },
  ];
  return (
    <div className="bg_gray parent ">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        autoPlaySpeed={3000}
        transitionDuration={3000}
        arrows={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider item_slider " key={index}>
              <Link href={imageUrl.link}>
                <Image src={imageUrl.url} width={50} height={50} />
                <p>{imageUrl.text} </p>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
