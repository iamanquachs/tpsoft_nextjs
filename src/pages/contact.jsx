import { Container, Row, Col } from "react-bootstrap";
import Iframe from "react-iframe";
import Image from "next/image";
import Footer from "@/components/footer";
import Footer_LH from "../components/footer_lienhe.jsx";
import React, { useState, useEffect } from "react";
import mailAPI from "./api/mailAPI";
import CarouselProduct from "./carousel_product.jsx";

export default function Contact() {
  const date = new Date();

  var [ghichu, setGhichu] = useState("");
  var [dienthoai, setDienthoai] = useState("");
  var [hoten, setHoten] = useState("");
  const [showModal, setShowModal] = useState(false);

  const sendEmail = async (e) => {
    const error = document.getElementById("title_error");
    const success = document.getElementById("title_success");
    error.classList.add("hidden");
    success.classList.add("hidden");

    if (dienthoai != "" && hoten != "") {
      try {
        const params = {
          hoten: hoten,
          dienthoai: dienthoai,
          ghichu: ghichu,
          loai: "",
        };
        await mailAPI.send_mail(params);
      } catch (error) {
        console.log(error);
      }
      setGhichu("");
      setDienthoai("");
      setHoten("");
      success.classList.remove("hidden");
      setTimeout(() => {
        success.classList.add("hidden");
      }, 2000);
    } else {
      error.classList.remove("hidden");
      setTimeout(() => {
        error.classList.add("hidden");
      }, 2000);
    }
  };

  const replaceSDT = (e) => {
    const value = e.target.value.replace(/[^0-9\.\,]/g, "");
    document.getElementById("dienthoai").value = value;
  };
  return (
    <>
      <div className="contact_wrap">
        <div className="section_product">
          <div className="section_header_title p_nowrap_notproduct">
            <p>
              Khát vọng ứng dụng những thành tựu của công nghệ vào lĩnh vực y tế
            </p>
          </div>
        </div>
        <Container>
          <Row>
            <Col xs={12} sm={6} md={6} xl={7}>
              <div className="section_home_contact">
                <h4 style={{ color: "#818181" }}>Đường đến TPSoft</h4>
                <div className="section_content">
                  <Iframe
                    title="google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9390258040494!2d105.75381081428208!3d10.021890575407971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0884866ca3b4f%3A0x5673e506d4de6841!2zQ8O0bmcgVHkgVG5oaCBDw7RuZyBOZ2jhu4cgUGjhuqduIE3hu4FtIFRwc29mdA!5e0!3m2!1svi!2s!4v1613835567640!5m2!1svi!2s"
                    width="100%"
                    height="500px"
                    style="border:0;"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} xl={5}>
              <div className="section_home_contact ">
                <h4 style={{ color: "#818181" }}>Liên hệ với TPSoft</h4>
                <div className="section_home_div">
                  <input
                    style={{ color: "black" }}
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="Họ tên (*)"
                    onChange={(e) => {
                      setHoten(e.target.value);
                    }}
                    value={hoten}
                  />
                  <input
                    style={{ color: "black" }}
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="Điện thoại (*)"
                    id="dienthoai"
                    onKeyUp={(e) => {
                      replaceSDT(e);
                    }}
                    onChange={(e) => {
                      setDienthoai(e.target.value);
                    }}
                    value={dienthoai}
                  />
                  <input
                    style={{ color: "black" }}
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="Nội dung"
                    onChange={(e) => {
                      setGhichu(e.target.value);
                    }}
                    value={ghichu}
                  />
                  <div className="flex_contact">
                    <p
                      id="title_error"
                      style={{ color: "red" }}
                      className="hidden"
                    >
                      Chưa nhập đủ thông tin
                    </p>
                    <p
                      id="title_success"
                      style={{ color: "green" }}
                      className="hidden"
                    >
                      Gửi thành công
                    </p>
                    <button
                      style={{ backgroundColor: "#024893", color: "white" }}
                      onClick={(e) => {
                        sendEmail();
                      }}
                      type="button"
                    >
                      Gửi
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="section_home_info bg_home_info">
          <Container>
            <Row>
              <Col lg={7} sm={12} xs={12} className="section_info_left">
                <div>
                  <h3>~{((date.getFullYear() - 2017) * 600 * 365) / 1000}K</h3>
                  <div className="border_bottom_info"></div>
                  <p>YÊU CẦU HỖ TRỢ</p>
                </div>
                <div>
                  <h3>~{(date.getFullYear() - 2017) * 600}</h3>
                  <div className="border_bottom_info"></div>
                  <p>KHÁCH HÀNG TIN DÙNG</p>
                </div>
                <div>
                  <h3>8</h3>
                  <div className="border_bottom_info"></div>
                  <p>SẢN PHẨM CỐT LÕI</p>
                </div>
                <div>
                  <h3>~{date.getFullYear() - 2017} năm</h3>
                  <div className="border_bottom_info"></div>
                  <p>THỰC HIỆN KHÁT VỌNG</p>
                </div>
              </Col>
              <Col lg={5} sm={12} xs={12} className="section_info_right">
                <div>
                  <h4>SỨ MỆNH CỦA CHÚNG TÔI</h4>
                  <p>
                    TPSoft luôn nỗ lực sáng tạo sản phẩm ngày một thông minh hơn
                    và tiện ích hơn nhằm thực hiện khát vọng ứng dụng những
                    thành tựu của công nghệ vào lĩnh vực y tế.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <CarouselProduct />

        <div className="section_home_whatwedo">
          <Container>
            <Row>
              <Col lg={6} sm={12} className="section_whatwedo_left">
                <Image
                  className="image_home_whatwedo"
                  width={500}
                  height={500}
                  src={require("../vendor/image/collectionpro.svg")}
                  alt="Hệ sinh thái"
                />
              </Col>
              <Col lg={6} sm={12} className="section_whatwedo_right">
                <h2>HIỂU BIẾT CỦA CHÚNG TÔI</h2>
                <p>
                  Trong thế giới đang ngày càng số hóa, lĩnh vực chăm sóc sức
                  khỏe không nằm ngoài cuộc cách mạng công nghệ này. Sự hội tụ
                  của công nghệ đã mang lại những đột phá đáng kể trong cách
                  thức chăm sóc sức khỏe trên toàn thế giới.
                </p>
                <p>
                  Ứng dụng công nghệ trong lĩnh vực y tế đóng vai trò then chốt
                  trong việc đảm bảo hoạt động hiệu quả và thông suốt trong toàn
                  bộ quy trình khám chữa bệnh.
                </p>
                <p>
                  Với sự hỗ trợ của công nghệ đã giảm đáng kể về mặt thời gian
                  làm thủ tục, thời gian chờ khám, thời gian chờ mua thuốc; giảm
                  thiểu sai sót trong quá trình kê đơn. Đơn thuốc điện tử cũng
                  dễ đọc, do đó dược sĩ có thể xử lý nhanh chóng và ít xảy ra
                  lỗi trong quá trình cấp phát. Từ đó, có thể tiết kiệm thời
                  gian cho các bác sĩ, dược sĩ và cả người bệnh.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section_home_culture">
          <Container>
            <Row>
              <Col lg={6} sm={12} className="section_culture_right">
                <h2>NGUYÊN TẮC 6P CỦA CHÚNG TÔI</h2>
                <div>
                  <div className="flex_right_culture">
                    <h3>P</h3>
                    <p>rotection: Bảo vệ mọi quyền lợi của bạn</p>
                  </div>
                  <div className="flex_right_culture">
                    <h3>P</h3>
                    <p>urpose: Giải quyết những vấn đề của bạn</p>
                  </div>
                  <div className="flex_right_culture">
                    <h3>P</h3>
                    <p>artnership: Đồng hành phát triển cùng bạn</p>
                  </div>
                  <div className="flex_right_culture">
                    <h3>P</h3>
                    <p>ersonalization: Sản phẩm, dịch vụ dành riêng bạn</p>
                  </div>
                  <div className="flex_right_culture">
                    <h3>P</h3>
                    <p>rofessional: Chuyên nghiệp khi làm việc cùng bạn</p>
                  </div>
                  <div className="flex_right_culture">
                    <h3>P</h3>
                    <p>roud: Tự hào khi được phục vụ bạn</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} sm={12} className="section_culture_left">
                <Image
                  style={{
                    objectFit: "cover",
                    borderRadius: "50px 0px 50px 0px",
                    width: "1000px",
                    height: "350px",
                  }}
                  src={require("../vendor/image/commit.jpg")}
                  alt="Commit"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer_LH />
      <Footer />
    </>
  );
}