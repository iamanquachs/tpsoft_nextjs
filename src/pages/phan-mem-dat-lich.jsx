import Footer_LH from "../components/footer_lienhe.jsx";
import Footer from "../components/footer.jsx";
import { Row, Col, Container, CloseButton } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import mailAPI from "./api/mailAPI";
import React, { useState, useEffect } from "react";
import CarouselProduct from "./carousel_product.jsx";

export default function Home() {
  const date = new Date();

  var [ghichu, setGhichu] = useState([]);
  var [dienthoai, setDienthoai] = useState([]);
  var [hoten, setHoten] = useState([]);

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
          loai: "Phần mềm đặt lịch",
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
        <div className="section_product">
          <div className="section_header_title p_nowrap">
            <p>Phù hợp, Thân thiện - Nổi bật, Khác biệt</p>
            <p>Thấu hiểu, Sáng tạo - Đồng hành, Chia sẻ</p>
          </div>
        </div>

        <div className="section_product_detail">
          <Container>
            <Row>
              <Col sm={4} className="section_product_detail_left">
                <Image
                  width={200}
                  src={require("../vendor/image/Logo_TimBacSi.svg")}
                  alt={"PHẦN MỀM TÌM BÁC SĨ"}
                />
                <h3>Kênh tìm bác sĩ và đặt lịch khám</h3>
              </Col>
              <Col sm={8} className="section_product_detail_right">
                <p>
                  Phần mềm tìm bác sĩ và đặt lịch khám là một giải pháp công
                  nghệ tiên tiến, được thiết kế để đơn giản hóa quá trình tìm
                  kiếm chuyên gia y tế và đặt lịch khám một cách nhanh chóng và
                  tiện lợi. Sử dụng phần mềm này, người dùng có thể tìm kiếm
                  theo tên bác sĩ, chuyên khoa và bản đồ chỉ đường đến phòng
                  khám.
                </p>
                <p>
                  Không chỉ dừng lại ở việc tìm kiếm, phần mềm còn cung cấp tính
                  năng đặt lịch khám trực tuyến. Người dùng có thể chọn thời
                  gian phù hợp và xác nhận lịch hẹn mà không cần phải qua trung
                  gian hay chờ đợi. Ngoài ra, người dùng còn biết được lịch khám
                  bệnh của bác sĩ. Điều này giúp tối ưu hóa quá trình khám bệnh,
                  đồng thời tăng cường sự thuận tiện và linh hoạt cho cả người
                  dùng và bác sĩ.
                </p>
              </Col>
              <Col sm={12} className="section_product_footer">
                <h1>{date.getFullYear() - 2006} năm</h1>
                <p>Kinh nghiệm</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="product_wrap">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="section_sanpham_item row">
                  <Col sm={6} xs={12}>
                    <div className="style_image_ctsanpham tbs1"></div>
                  </Col>
                  <Col sm={6} xs={12}>
                    {/* <!-- EC Left --> */}
                    <div className="ec_item">
                      <ul>
                        <li>
                          <p className="stt"></p>
                          <p className="content">
                            Phòng khám được tiếp cận thêm khách hàng
                          </p>
                        </li>
                        <li>
                          <p className="stt"></p>
                          <p className="content">
                            Người bệnh tìm được bác sĩ chuyên khoa và đặt lịch
                            khám dễ dàng
                          </p>
                        </li>
                        <li>
                          <p className="stt"></p>
                          <p className="content">
                            Người bệnh chọn được khung giờ khám bệnh phù hợp
                            nhất
                          </p>
                        </li>
                        <li>
                          <p className="stt"></p>
                          <p className="content">
                            Người bệnh thuận tiện và chủ động được thời gian đến
                            khám bệnh
                          </p>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </div>
              </Col>
              <Col xs={12}>
                <div className="section_sanpham_item row">
                  <Col sm={6} xs={12}>
                    <div className="style_image_ctsanpham tbs2"></div>
                  </Col>
                  <Col sm={6} xs={12}>
                    {/* <!-- EC Right --> */}
                    <div className="ec_item">
                      <ul>
                        <li>
                          <p>
                            Người bệnh dễ dàng tìm được phòng khám qua chỉ đường
                            trên bản đồ
                          </p>
                        </li>
                        <li>
                          <p>
                            Hệ thống đặt lịch luôn sẵn sàng phục vụ người bệnh.
                            Tiết kiệm nhân sự và chi phí cho bộ phận tiếp nhận
                            đặt lịch
                          </p>
                        </li>

                        <li>
                          <p>
                            Biết được lịch khám bệnh của bác sĩ để đến đúng ngày
                            phù hợp
                          </p>
                        </li>
                        <li>
                          <p>
                            Thông tin lịch khám được đồng bộ về phòng khám, giúp
                            quy trình tiếp đón và khám bệnh được nhanh chóng và
                            thuận tiện
                          </p>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section_home_contact bg_product_tuvan">
          <h2 style={{ color: "#de2c68" }}>Đăng ký dùng thử</h2>
          <div className="section_home_div">
            <input
              style={{ color: "black" }}
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Họ tên  (*)"
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
              placeholder="Ghi chú"
              onChange={(e) => {
                setGhichu(e.target.value);
              }}
              value={ghichu}
            />
            <div className="flex_contact">
              <p id="title_error" style={{ color: "red" }} className="hidden">
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
                style={{ backgroundColor: "#de2c68", color: "white" }}
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
        <CarouselProduct />

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
                  src={require("../vendor/image/collectionpro.svg")}
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
                    <h5>P</h5>
                    <p>rotection: Bảo vệ mọi quyền lợi của bạn</p>
                  </div>
                  <div className="flex_right_culture">
                    <h5>P</h5>
                    <p>urpose: Giải quyết những vấn đề của bạn</p>
                  </div>
                  <div className="flex_right_culture">
                    <h5>P</h5>
                    <p>artnership: Đồng hành phát triển cùng bạn</p>
                  </div>
                  <div className="flex_right_culture">
                    <h5>P</h5>
                    <p>ersonalization: Sản phẩm, dịch vụ dành riêng bạn</p>
                  </div>
                  <div className="flex_right_culture">
                    <h5>P</h5>
                    <p>rofessional: Chuyên nghiệp khi làm việc cùng bạn</p>
                  </div>
                  <div className="flex_right_culture">
                    <h5>P</h5>
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
