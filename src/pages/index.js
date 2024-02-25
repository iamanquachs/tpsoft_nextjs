import Footer_LH from "../components/footer_lienhe.jsx";
import Footer from "../components/footer.jsx";
import { Row, Col, Container, CloseButton } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import mailAPI from "./api/mailAPI";
import React, { useState, useEffect } from "react";
import ListProduct from "./list_product.jsx";
import CarouselProduct from "./carousel_product.jsx";

export default function Home() {
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
      <div className="section_home">
        <div className="section_home_header">
          <div className="section_home_title">
            <p className="title_main">TPSoft</p>
            <p className="title_child">
              Khát vọng ứng dụng những thành tựu của công nghệ vào lĩnh vực y tế
            </p>
          </div>
        </div>
        <div className="section_home_intro">
          <Container>
            <Row>
              <Col sm={4} xs={12} className="section_title_left">
                <h2>Hành trình khát vọng</h2>
              </Col>
              <Col sm={8} xs={12} className="section_title_right">
                <p>
                  "Công việc của bạn sẽ lấp đầy một phần lớn cuộc sống của bạn
                  và cách duy nhất để thực sự hài lòng đó là làm những gì bạn
                  tin điều đó là tuyệt vời. Và cách duy nhất để làm công việc
                  tuyệt vời đó là yêu những gì bạn làm" (Steve Jobs).
                </p>
                <p>
                  TPSoft tự hào chăm chỉ mỗi ngày xây dựng hệ sinh thái sản phẩm
                  hoàn chỉnh nhằm thực hiện khát vọng ứng dụng những thành tựu
                  của công nghệ vào lĩnh vực y tế.
                </p>
                <p>
                  Khi chúng tôi có một khát vọng đủ lớn thì một hành trình xuất
                  hiện, đồng nghĩa với việc sẽ phải chuẩn bị cho mình những hành
                  trang thiết yếu. Đó là những yếu tố chính giúp TPSoft vượt qua
                  khó khăn, thử thách để tiến về phía trước.
                </p>
              </Col>
              <Col sm={12} className="section_intro_footer">
                <h1>{date.getFullYear() - 2006} năm</h1>
                <p>Kinh nghiệm</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section_home_product">
          <ListProduct />
        </div>
        <div className="section_home_services">
          <Container className="section_body_services">
            <Row>
              <Col xs={12}>
                <div className="section_title">
                  <h2>Dịch vụ</h2>
                </div>
              </Col>
              <Col sm={4}>
                <div className="section_item item_dichvu">
                  <Link href={`/services#consult`}>
                    <div className="style_TuVan"></div>
                    <div>
                      <h2>Tư vấn chiến lược CNTT</h2>
                      <p>
                        Tư vấn giải pháp toàn diện, phù hợp cho chuyển đổi số và
                        ứng dụng công nghệ cho doanh nghiệp nhằm đáp ứng nhu cầu
                        quản trị, điều hành và gia tăng hiệu quả kinh doanh...
                      </p>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col sm={4}>
                <div className="section_item item_dichvu">
                  <Link href={`/services#ERP`}>
                    <div className="style_ERP"></div>
                    <div>
                      <h2>Giải pháp quản trị doanh nghiệp ERP</h2>
                      <p>
                        Khảo sát cơ sở hạ tầng CNTT, các quy trình nghiệp vụ và
                        đặc trưng của ngành. Từ đó xây dựng hồ sơ đánh giá làm
                        căn cứ đề xuất giải pháp phù hợp trong ngắn hạn, dài
                        hạn...
                      </p>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col sm={4}>
                <div className="section_item item_dichvu">
                  <Link href={`/services#CamAI`}>
                    <div className="style_Cam"></div>
                    <div>
                      <h2>Giải pháp Camera AI</h2>
                      <p>
                        Giám sát và lưu trữ trực tuyến trên nền tảng công nghệ
                        điện toán đám mây, hỗ trợ nhiều thiết bị. Với sự hỗ trợ
                        của công nghệ AI sẽ giúp camera trở nên thông minh
                        hơn...
                      </p>
                    </div>
                  </Link>
                </div>
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
        <div className="section_home_contact bg_home_contact">
          <h2>Yêu cầu tư vấn</h2>
          <div className="section_home_div">
            <input
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
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Ghi chú"
              onChange={(e) => {
                setGhichu(e.target.value);
              }}
              value={ghichu}
            />
            <div className="flex_contact">
              <p id="title_error" className="hidden">
                Chưa nhập đủ thông tin
              </p>
              <p id="title_success" className="hidden">
                Gửi thành công
              </p>
              <button
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
      </div>

      <Footer_LH />
      <Footer />
    </>
  );
}
