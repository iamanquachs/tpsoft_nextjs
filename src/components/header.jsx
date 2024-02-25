import React, { useEffect, useState } from "react";
import Head from "next/head";

import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import ScrollIndicator from "../pages/ScrollIndicator";
export default function Header() {
  var title = "TPSoft";

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    // window.addEventListener("scroll", changSticky);
  });
  // const changSticky = () => {
  //   if (window.scrollY >= 0.1) {
  //     setSticky(true);
  //   } else {
  //     setSticky(false);
  //   }
  // };
  const router = useRouter();
  switch (router.pathname) {
    case "/intro":
      title = "TPSOFT | PHẦN MỀM BÁC SĨ | PHẦN MỀM NHÀ THUỐC";
      break;
    case "/product":
      title = "PHẦN MỀM PHÒNG KHÁM | PHẦN MỀM NHÀ THUỐC";
      break;
    case "/services":
      title = "ERP | OFFICE | WORD | EXCEL";
      break;
    case "/contact":
      title = "Liên hệ";
      break;
    default:
      title = "TPSoft";
      break;
  }
  return (
    <>
      <Head>
        <title id="title">{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://tpsoftct.vn" />

        <meta
          name="description"
          content="Phần mềm Phòng Khám Bác sĩ ● Phần mềm Nhà thuốc ● Đơn thuốc Quốc gia ● Liên thông Dược Quốc gia ● Liên thông, kết nối Sở Y tế"
        />
        <meta
          name="keywords"
          content="TPSoft, Nhà thuốc, Phòng khám, Gpp, Bác sĩ, Y tế, Phần mềm, Bệnh viện, Đặt lịch, Toa thuốc, Khám bệnh, Tìm bác sĩ, Cận lâm sàng, Xét nghiệm, Chuẩn đoán, Siêu âm, Online, Thầy thuốc, Cần Thơ, Vĩnh Long, Kiên Giang, Hồ Chí Minh"
        />
        <meta
          name="google-site-verification"
          content="nWG6AZeAYOKwP0Sqkf5RLn6EzIMctcv0d6Ssw9M8Bx8"
        />
        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="TPSoft" />
        <meta
          itemProp="description"
          content="Phần mềm Phòng Khám Bác sĩ ● Phần mềm Nhà thuốc ● Đơn thuốc Quốc gia ● Liên thông Dược Quốc gia ● Liên thông, kết nối Sở Y tế"
        />
        <meta itemProp="image" content="https://tpsoftct.vn/hinhanh_seo.jpg" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://tpsoftct.vn" />
        <meta property="og:site_name" content="Tpsoftct.vn" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="TPSoft" />
        <meta
          property="og:description"
          content="Phần mềm Phòng Khám Bác sĩ ● Phần mềm Nhà thuốc ● Đơn thuốc Quốc gia ● Liên thông Dược Quốc gia ● Liên thông, kết nối Sở Y tế"
        />
        <meta
          property="og:image"
          content="https://tpsoftct.vn/hinhanh_seo.jpg"
        />
        <meta property="og:image:alt" content="tpsoft-image" />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TPSoft" />
        <meta
          name="twitter:description"
          content="Phần mềm Phòng Khám Bác sĩ ● Phần mềm Nhà thuốc ● Đơn thuốc Quốc gia ● Liên thông Dược Quốc gia ● Liên thông, kết nối Sở Y tế"
        />
        <meta
          name="twitter:image"
          content="https://tpsoftct.vn/hinhanh_seo.jpg"
          alt="tpsoft-image"
        />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <div
        className={sticky ? "section_header sticky" : "section_header"}
        id="section_header"
      >
        <Row>
          <Col sm={3}>
            <div className="section_header_left">
              <Link href={`/`}>
                <Image
                  width={170}
                  src={require("../vendor/image/logo_tps.svg")}
                  alt={"logo"}
                />
              </Link>
            </div>
          </Col>
          <Col sm={9}>
            <div className="section_header_right">
              <ul>
                <li className={router.pathname == "/" ? "active" : ""}>
                  <Link href="/">Trang chủ</Link>
                </li>
                <li className={router.pathname == "/intro" ? "active" : ""}>
                  <Link href="/intro">Giới thiệu</Link>
                </li>
                <li className={router.pathname == "/product" ? "active" : ""}>
                  <Link href="/product">Sản phẩm</Link>
                </li>
                <li className={router.pathname == "/services" ? "active" : ""}>
                  <Link href="/services">Dịch vụ</Link>
                </li>
                <li className={router.pathname == "/contact" ? "active" : ""}>
                  <Link href="/contact">Liên hệ</Link>
                </li>
                <li>
                  <a href="tel:+84901090917" className="lienhe">
                    Hotline: 0919 118 187
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <div
        className={sticky ? "section_header_mb sticky" : "section_header_mb"}
        id="section_header_mb"
      >
        <div className="header_mb_top">
          <Image
            onClick={() => router.replace("/")}
            width={170}
            className={router.pathname == "/" ? "active" : ""}

            src={require("../vendor/image/logo_tps.svg")}
            alt={"logo-tpsoft"}
          />
          <div className="header_mb_lienhe">
            <Image
              src={require("../vendor/image/hotline_1.png")}
              alt={"Hotline"}
            />
            <p>0919 118 187</p>
          </div>
        </div>
        <div className="header_mb_bottom">
          <ul>
          
            <li
              className={router.pathname == "/intro" ? "active" : ""}
              onClick={() => router.replace("/intro")}
            >
              Giới thiệu
            </li>
            <li
              className={router.pathname == "/product" ? "active" : ""}
              onClick={() => router.replace("/product")}
            >
              Sản phẩm
            </li>
            <li
              className={router.pathname == "/services" ? "active" : ""}
              onClick={() => router.replace("/services")}
            >
              Dịch vụ
            </li>
            <li
              className={router.pathname == "/contact" ? "active" : ""}
              onClick={() => router.replace("/contact")}
            >
              Liên hệ
            </li>
          </ul>
        </div>
      </div>
      <ScrollIndicator />
    </>
  );
}
