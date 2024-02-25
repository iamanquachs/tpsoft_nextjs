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
          loai: "Phần mềm Phòng khám",
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

        <div className="section_product_detail" >
          <Container>
            <Row>
              <Col sm={4} className="section_product_detail_left">
                <Image
                  width={200}
                  src={require("../vendor/image/Logo_OneHis.svg")}
                  alt={"PHẦN MỀM QUẢN LÝ PHÒNG KHÁM, BÁC SĨ"}
                />
                <h3>Quản lý Phòng khám</h3>
              </Col>
              <Col sm={8} className="section_product_detail_right">
                <p>
                  Phần mềm quản lý phòng khám bệnh "onehis" là một giải pháp
                  công nghệ hiện đại, thiết kế nhằm tối ưu hóa quản lý hoạt động
                  hàng ngày của các phòng khám. Phần mềm này cung cấp một loạt
                  các tính năng mạnh mẽ, giúp đơn giản hóa quản lý khách hàng,
                  lịch sử khám, hồ sơ y tế, cũng như quản lý thu chi và kho
                  thuốc.
                </p>
                <p>
                  Tính năng quản lý khách hàng cho phép lưu trữ và truy cập dễ
                  dàng thông tin chi tiết của khách hàng, bao gồm lịch sử bệnh
                  án, kết quả xét nghiệm, và thông tin liên lạc. Tính năng này
                  cải thiện đáng kể hiệu suất của bác sĩ và nhân viên y tế trong
                  việc theo dõi sức khỏe khách hàng.
                </p>
                <p>
                  Giao diện trực quan, dễ sử dụng cùng với khả năng tùy chỉnh
                  linh hoạt làm cho phần mềm này trở thành một công cụ không thể
                  thiếu trong việc cải thiện chất lượng dịch vụ và nâng cao hiệu
                  quả hoạt động của phòng khám bệnh.
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
                    <div className="style_image_ctsanpham ec4"></div>
                  </Col>
                  <Col sm={6} xs={12}>
                    {/* <!-- EC Left --> */}
                    <div className="ec_item">
                      <ul>
                        <li>
                          <p className="stt"></p>
                          <p className="content">
                            Liên thông đơn thuốc điện tử quốc gia
                          </p>
                        </li>
                        <li>
                          <p className="stt"></p>
                          <p className="content">
                            Nghiệp vụ đầy đủ, chuyên sâu
                          </p>
                        </li>
                        <li>
                          <p className="stt"></p>
                          <p className="content">
                            Quy trình chuẩn mực cho ngành Y
                          </p>
                        </li>
                        <li>
                          <p className="stt"></p>
                          <p className="content">
                            Vận hành hiệu quả, nhanh chóng
                          </p>
                        </li>
                        <li>
                          <p className="stt"></p>
                          <p className="content">
                            Đội ngũ chuyên gia hỗ trợ 24/24
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
                    <div className="style_image_ctsanpham ec1"></div>
                  </Col>
                  <Col sm={6} xs={12}>
                    {/* <!-- EC Right --> */}
                    <div className="ec_item">
                      <ul>
                        <li>
                          <p>
                            Người bệnh tìm bác sĩ và đặt lịch với khung giờ phù
                            hợp nhất. Bác sĩ có nhiều thông tin và thời gian để
                            điều trị cho người bệnh.
                          </p>
                        </li>
                        <li>
                          <p>
                            Phần mềm kết nối và liên thông toàn diện với các
                            phân hệ chuyên sâu, riêng biệt: Tiếp nhận bệnh, Thu
                            tiền, Khám bệnh, Nhà thuốc, Siêu âm, X-Quang, Nọi
                            Soi, Xét nghiệm.
                          </p>
                        </li>

                        <li>
                          <p>
                            Loại bỏ hoàn toàn các công việc liên quan tới việc
                            ghi chép sổ sách, giấy tờ, giúp bác sĩ tập trung
                            nhiều hơn vào việc chăm sóc, chẩn đoán điều trị cho
                            khách hàng.
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
                    <div className="style_image_ctsanpham ec5"></div>
                  </Col>
                  <Col sm={6} xs={12}>
                    {/* <!-- EC Right --> */}
                    <div className="ec_item">
                      <ul>
                        <li>
                          <p>
                            Thực hiện y lệnh Cận lâm sàng, đơn thuốc. Lịch sử
                            khách hàng được lưu trữ xuyên suốt trong quá trình
                            khám bệnh, giúp bác sĩ có đầy đủ thông tin cho lần
                            khám tiếp theo.
                          </p>
                        </li>
                        <li>
                          <p>
                            Xem lại toa và các kết quả cận lâm sàng, xét nghiệm
                            lần trước, giúp bác sĩ theo dõi diễn biến trong điều
                            trị. Thiết lập Toa mẫu hoặc lấy lại Toa cũ giúp bác
                            sĩ chỉ định nhanh chóng.
                          </p>
                        </li>

                        <li>
                          <p>
                            Khi Bác sĩ khám xong, nếu được bố trí chỗ Phát thuốc
                            riêng, thì đơn thuốc đã được chuyển sang nhà thuốc
                            để hướng dẫn dùng thuốc, cấp phát và thu tiền.
                          </p>
                        </li>
                        <li>
                          <p>
                            Thông tin, hình ảnh y học có thể chia sẽ phục vụ
                            tham vấn chuyên môn, lưu trữ lâu dài, có tổ chức; có
                            thể tập hợp, phân tích, phục vụ nghiên cứu khoa học,
                            lợi ích cộng đồng, xã hội.
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
          <h2 style={{ color: "#22428f" }}>Đăng ký dùng thử</h2>
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
                style={{ backgroundColor: "#22428f", color: "white" }}
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
