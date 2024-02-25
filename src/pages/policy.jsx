import Footer_LH from "../components/footer_lienhe.jsx";
import Footer from "../components/footer.jsx";
import { Row, Col, Container, CloseButton } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import mailAPI from "./api/mailAPI";
import React, { useState, useEffect } from "react";
import CarouselProduct from "./carousel_product.jsx";

export default function Policy() {
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
          loai: "Chính sách bảo mật",
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
                  width={150}
                  src={require("../vendor/image/chinhsachbaomat.png")}
                  alt={"PHẦN MỀM TÌM BÁC SĨ"}
                />
                <h3>Chính sách bảo mật</h3>
              </Col>
              <Col sm={8} className="section_product_detail_right">
                <p>
                  Chính sách bảo mật là một tài liệu quan trọng mà các tổ chức
                  và doanh nghiệp sử dụng để thông báo cho người dùng và khách
                  hàng của họ về cách thức thu thập, sử dụng, bảo vệ và chia sẻ
                  thông tin cá nhân.
                </p>
                <p>
                  Chính sách này thường bao gồm thông tin về loại dữ liệu được
                  thu thập, lý do thu thập, cách thức lưu trữ và bảo vệ dữ liệu,
                  cũng như quyền của người dùng đối với thông tin cá nhân của
                  họ. Mục tiêu của chính sách bảo mật là tăng cường minh bạch,
                  xây dựng niềm tin và tuân thủ các quy định pháp lý liên quan
                  đến bảo vệ dữ liệu cá nhân.
                </p>
              </Col>
              <Col sm={12} className="section_product_footer">
                <h1>{date.getFullYear() - 2006} năm</h1>
                <p>Kinh nghiệm</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Row>
              <Col xs={12}>
                <div className="section_title">
                  <h2>CHÍNH SÁCH BẢO MẬT</h2>
                </div>
              </Col>
              <Col xs={12}>
                <div className="policy_content">
                  <p className="title">
                    1. Mục đích thu thập thông tin cá nhân
                  </p>
                  <p>
                    Mục đích của việc thu thập thông tin khách hàng nhằm liên
                    quan đến các vấn đề như:
                  </p>
                  <p>- Hỗ trợ khách hàng: tư vấn các dịch vụ của chúng tôi.</p>
                  <p>
                    - Cung cấp thông tin các dịch vụ và hỗ trợ theo yêu cầu của
                    khách hàng.
                  </p>
                  <p>
                    - Gửi thông báo các chương trình, dịch vụ mới nhất của chúng
                    tôi.
                  </p>
                  <p>- Giải quyết vấn đề phát sinh khi sử dụng dịch vụ.</p>
                  <p>- Ngăn chặn các hoạt động phạm pháp.</p>
                  <p>- Đo lường và cải thiện các dịch vụ của chúng tôi.</p>
                  <p className="title">2. Phạm vi thu thập thông tin</p>
                  <p>
                    Chúng tôi thu thập thông tin cá nhân của khách hàng khi:
                  </p>
                  <p>
                    - Khách hàng trực tiếp cung cấp: Khách hàng trực tiếp cung
                    cấp bao gồm: họ tên, địa chỉ email, số điện thoại, địa chỉ.
                  </p>
                  <p>
                    {" "}
                    - Khách hàng tương tác với chúng tôi: Chúng tôi sử dụng
                    cookies để thu thập một số thông tin nhằm nâng cao chất
                    lượng phục vụ khi khách hàng tương tác trên website
                    https://tpsoftct.vn/.
                  </p>
                  <p>
                    - Từ những nguồn hợp pháp khác: Chúng tôi thu thập thông tin
                    khách hàng từ các nguồn hợp pháp khác.
                  </p>
                  <p className="title">3. Thời gian lưu trữ thông tin</p>
                  <p>
                    TPSoft sẽ lưu trữ các thông tin cá nhân do khách hàng cung
                    cấp trên các hệ thống nội bộ của chúng tôi trong quá trình
                    cung cấp dịch vụ cho khách hàng hoặc khi khách hàng có yêu
                    cầu hủy thông tin đã cấp.
                  </p>
                  <p className="title">
                    4. Những người hoặc tổ chức có thể được tiếp cận với thông
                    tin đó
                  </p>
                  <p>
                    - Các đối tác là bên cung cấp dịch vụ cho chúng tôi liên
                    quan đến thực hiện đơn hàng và chỉ giới hạn trong phạm vi
                    thông tin cần thiết cũng như áp dụng các quy định đảm bảo an
                    ninh, bảo mật các thông tin cá nhân.
                  </p>
                  <p>
                    - Chúng tôi sử dụng dịch vụ từ một nhà cung cấp dịch vụ là
                    bên thứ ba để thực hiện một số hoạt động liên quan đến
                    website https://tpsoftct.vn/. Khi đó, bên thứ ba có thể truy
                    cập hoặc xử lý các thông tin cá nhân trong quá trình cung
                    cấp các dịch vụ đó. Chúng tôi yêu cầu các bên thứ ba này
                    tuân thủ mọi luật lệ về bảo vệ thông tin cá nhân liên quan
                    và các yêu cầu về an ninh liên quan đến thông tin cá nhân.
                  </p>
                  <p>
                    - Các chương trình có tính liên kết, đồng thực hiện, thuê
                    ngoài cho các mục đích được nêu tại Mục 1 và luôn áp dụng
                    các yêu cầu bảo mật thông tin cá nhân.
                  </p>
                  <p>
                    - Yêu cầu pháp lý: Chúng tôi có thể tiết lộ các thông tin cá
                    nhân nếu điều đó do luật pháp yêu cầu và việc tiết lộ như
                    vậy là cần thiết một cách hợp lý để tuân thủ các quy trình
                    pháp lý.
                  </p>
                  <p>
                    - Chuyển giao kinh doanh (nếu có): trong trường hợp sáp
                    nhập, hợp nhất toàn bộ hoặc một phần với công ty khác, người
                    mua sẽ có quyền truy cập thông tin được chúng tôi lưu trữ,
                    duy trì trong đó bao gồm cả thông tin cá nhân.
                  </p>
                  <p className="title">
                    5. Địa chỉ của đơn vị thu thập và quản lý thông tin
                  </p>
                  <p>
                    - Tên doanh nghiệp: CÔNG TY TNHH CÔNG NGHỆ PHẦN MỀM TPSOFT
                  </p>
                  <p>
                    - Thành lập và hoạt động theo Giấy chứng nhận đăng ký doanh
                    nghiệp số: 1801632394, được Sở Kế hoạch và Đầu tư TP. Cần
                    Thơ cấp ngày 21/03/2019
                  </p>
                  <p>
                    - Trụ sở chính: Lô B303, đường B8, KDC 91B, Phường An Khánh,
                    Quận Ninh Kiều, TP. Cần Thơ
                  </p>
                  <p className="title">
                    6. Phương thức và công cụ để người dùng tiếp cận và chỉnh
                    sửa dữ liệu:
                  </p>
                  <p>
                    Nếu quý khách có bất cứ về yêu cầu nào về việc tiếp cận và
                    chỉnh sửa thông tin cá nhân đã cung cấp, quý khách có thể:
                  </p>
                  <p>- Gọi điện trực tiếp về số điện thoại: 0919 118 187</p>
                  <p>- Gửi mail: tpsoftct@gmail.com để được chúng tôi hỗ trợ</p>
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
