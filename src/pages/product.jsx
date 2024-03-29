import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Footer_LH from "../components/footer_lienhe.jsx";
import Footer from "../components/footer.jsx";
import ListProduct from "./list_product.jsx";

export default function Product() {
  return (
    <>
      <div className="section_product">
        <div className="section_header_title p_nowrap_notproduct">
          <p>
           Khát vọng ứng dụng những thành tựu của công nghệ vào
            lĩnh vực y tế
          </p>
        </div>
      </div>
      <div className="section_home_product">
        <ListProduct />
      </div>

      <Footer_LH />
      <Footer />
    </>
  );
}
