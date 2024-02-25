import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/header";
import Footer_LH from "../components/footer_lienhe.jsx";
import Footer from "../components/footer.jsx";
export default function intro() {
  const date = new Date();
  return (
    <main>
      <div className="intro_wrap">
        <div className="section_intro">
          <div className="section_header_title">
            <h2>Hành trình {new Date().getFullYear() - 2017} năm</h2>
            <p>
              Thực hiện khát vọng ứng dụng những thành tựu của công nghệ vào
              lĩnh vực y tế
            </p>
          </div>
        </div>
        <div className="section_home_intro">
          <Container>
            <Row>
              <Col sm={4} xs={12} className="section_title_left">
                <h2>Hiểu biết của chúng tôi</h2>
              </Col>
              <Col sm={8} xs={12} className="section_title_right">
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
        <div className="style_gioithieu">
          <Container>
            <Col sm={12} xs={12} className="style_gioithieu">
              <h2>Hệ sinh thái sản phẩm</h2>
            </Col>
            <Row>
              <Col lg={12} sm={12} className="section_whatwedo_left">
                <Image
                  className="image_home_whatwedo"
                  width={500}
                  height={500}
                  src={require("../vendor/image/collectionpro.svg")}
                  alt="Hệ sinh thái"

                />
              </Col>
            </Row>
          </Container>
        </div>
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
        <div className="bg_white">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="section_title">
                  <h2>ĐỊNH VỊ</h2>
                </div>
                <div className="style_img_gioithieu">
                  <Image
                    src={require("../vendor/image/target.jpg")}
                    alt={"PHẦN MỀM NHÀ THUỐC"}
                  />
                  <p>
                    TPSoft là công ty chuyên về phần mềm Nhà thuốc, Phần mềm
                    Phòng khám
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg_gray">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="section_title">
                  <h2>TẦM NHÌN</h2>
                </div>
                <div className="style_img_gioithieu">
                  <Image
                    src={require("../vendor/image/tamnhin.png")}
                    alt={"PHẦN MỀM PHÒNG KHÁM"}
                  />
                  <p>Công ty số 1 về phần mềm Nhà thuốc, Phần mềm Phòng khám</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg_white">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="section_title">
                  <h2>SỨ MẠNG</h2>
                </div>
                <div className="style_img_gioithieu">
                  <Image
                    src={require("../vendor/image/sumang.png")}
                    alt={"PHẦN MỀM PHÒNG MẠCH"}
                  />
                  <div className="sumang">
                    <p>
                      TPSoft luôn nỗ lực sáng tạo sản phẩm ngày một thông minh
                      hơn và tiện ích hơn nhằm thực hiện khát vọng ứng dụng
                      những thành tựu của CNTT vào lĩnh vực y tế
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg_gray">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="section_title">
                  <h2>GIÁ TRỊ CỐT LÕI</h2>
                </div>
                <div className="style_img_gioithieu">
                  <Image
                    className="widthstyle"
                    src={require("../vendor/image/commit1.png")}
                    alt={"PHẦN MỀM BÁC SĨ"}
                  />
                  <p className="giatricotloi_header">ĐỐI VỚI KHÁCH HÀNG</p>
                  <p className="giatricotloi_line">
                    Đặt sự hài lòng của khách hàng trong từng suy nghĩ và hành
                    động
                  </p>
                  <p className="giatricotloi_header">ĐỐI VỚI SẢN PHẨM</p>
                  <p className="giatricotloi_line">
                    Phù hợp - Thân thiện - Nổi bật - Khác biệt
                  </p>
                  <p className="giatricotloi_header">ĐỐI VỚI CHÍNH MÌNH</p>
                  <p className="giatricotloi_line">
                    Kỷ luật - Nghiêm khắc - Tiến bộ - Khát khao
                  </p>
                  <p className="giatricotloi_header">ĐỐI VỚI CÔNG VIỆC</p>
                  <p className="giatricotloi_line">
                    Trách nhiệm - Chất lượng - Tận tâm - Đúng hạn
                  </p>
                  <p className="giatricotloi_header">ĐỐI VỚI CÔNG TY</p>
                  <p className="giatricotloi_line">
                    Bảo mật - Chính trực - Trách nhiệm - Nhiệt huyết
                  </p>
                  <p className="giatricotloi_header">ĐỐI VỚI ĐỒNG NGHIỆP</p>
                  <p className="giatricotloi_line">
                    Chính trực - Tôn trọng - Giúp đỡ - Nhã nhặn
                  </p>
                  <p className="giatricotloi_header">ĐỐI VỚI ĐỐI TÁC</p>
                  <p className="giatricotloi_line">
                    Cân bằng - Tiết kiệm - Trách nhiệm - Bền vững
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer_LH />
      <Footer />
    </main>
  );
}
