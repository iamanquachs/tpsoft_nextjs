/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Iframe from "react-iframe";
import Image from "next/image";
import Link from "next/link";

export default function Footer_LH() {
  return (
    <div className="bg_footer">
      <Container>
        <Row>
          <Col className="col_footer" sm={4}>
            <div className="lienhe_header">
              <h2>► CÔNG TY TNHH CÔNG NGHỆ PHẦN MỀM TPSOFT</h2>
              <p>• GPKD: 1801632394, Sở KHĐT Cần Thơ, cấp ngày 21/03/2019.</p>
              <p>
                • VPGD: 135 Ngô Thì Nhậm, P. An Khánh, Q. Ninh Kiều, TP. Cần
                Thơ;
              </p>
              <p>
                • Địa chỉ: Thửa đất số 606, Tờ bản đồ số 47, đường B8, KDC 91B,
                P. An Khánh, Q. Ninh Kiều, TP. Cần Thơ.
              </p>
              <p>• ĐT: 0919 118 187 (Mr. Nhựt Tân)</p>
              <p>• Email: contact@tpsoftct.vn</p>
            </div>
          </Col>
          <Col className="col_footer" sm={4}>
            <div className="lienhe_header">
              <h2>► PHẠM VI CUNG CẤP</h2>
              <p>• TPSoft hân hạnh được cung cấp sản phẩm và dịch vụ 24/24.</p>
              <p>
                • Không giới hạn chức năng, cam kết hoàn tiền 100% trong 3 tháng
                đầu tiên nếu có bất kỳ vấn đề gì không hài lòng trong quá trình
                sử dụng hoặc không muốn tiếp tục sử dụng sản phẩm và dịch vụ của
                TPSoft.
              </p>
              <p>• Bảo hành sản phẩm trong suốt thời gian hợp đồng.</p>
              <p>• Thực hiện đầy đủ các nghĩa vụ như đã thỏa thuận.</p>
            </div>
          </Col>
          <Col className="col_footer" sm={4}>
            <div className="lienhe_header">
              <h2>► CHÍNH SÁCH</h2>
              <p>
                • Chính sách thanh toán: Tiền mặt: Tại địa chỉ của khách hàng
                hoặc văn phòng của TPSoft. Chuyển khoản: 0111 000 349798
                (Vietcombank - CN Cần Thơ).
              </p>
              <p>► CHÍNH SÁCH CUNG CẤP DỊCH VỤ</p>
              <p>
                • Trong vòng 3 ngày làm việc, TPSoft cử chuyên viên đến trực
                tiếp địa chỉ của khách hàng để tư vấn chuyển giao.
              </p>
              <p>
                <Link href={`/policy`}> ► CHÍNH SÁCH BẢO MẬT</Link>
              </p>
              <p>
                <Link href={`/requiredelete`}> ► YÊU CẦU XÓA DỮ LIỆU</Link>
              </p>
            </div>
          </Col>
          <Col className="col_footer" sm={4}>
            <div className="lienhe_header">
              <h2>► CHỨNG NHẬN</h2>
              <ul>
                <li>
                  <Image
                    className="img_tinnhiemmang"
                    src={require("../vendor/image/partner.webp")}
                    alt={"partner"}
                  />
                </li>
                <li>
                  <a
                    href="https://tinnhiemmang.vn/danh-ba-tin-nhiem/tpsoftctvn-1640762496"
                    title="Chung nhan Tin Nhiem Mang"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Chung nhan Tin Nhiem Mang"
                  >
                    <Image
                      src={require("../vendor/image/handle_cert.webp")}
                      width="150px"
                      height="auto"
                      alt="Chung nhan Tin Nhiem Mang"
                    />
                  </a>
                </li>

                <li>
                  <Image src={require("../vendor/image/ssl.png")} alt="" />
                </li>
                <li>
                  <a
                    href="http://online.gov.vn/Home/WebDetails/78344"
                    target="blank"
                    alt="da-thong-bao-cong-thuong"
                    aria-label="Da Thong Bao Bo Cong Thuong"
                  >
                    <Image
                      src={require("../vendor/image/logoSaleNoti.webp")}
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="col_footer" sm={4}>
            <div className="info_lienhe">
              <h2>► ĐƯỜNG ĐẾN TPSOFT</h2>
              <Iframe
                title={"duong-den-tpsoft"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9390258040494!2d105.75381081428208!3d10.021890575407971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0884866ca3b4f%3A0x5673e506d4de6841!2zQ8O0bmcgVHkgVG5oaCBDw7RuZyBOZ2jhu4cgUGjhuqduIE3hu4FtIFRwc29mdA!5e0!3m2!1svi!2s!4v1613835567640!5m2!1svi!2s"
                width="100%"
                height="315px"
                styles={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Col>
          <Col className="col_footer" sm={4}>
            <div className="info_lienhe">
              <h6>► THÔNG TIN TỪ TPSOFT</h6>
              <Iframe
                title="facebook"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTPSoftGroup%2F&tabs=timeline&width=397&height=360&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="315"
                style="border:none;overflow:hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></Iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}