/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
    <div className="footer">
      <p>
        Hotline: <a href="tel:+84901090917">0919 118 187</a> (Mr. Nhựt Tân) ©
        2017 - {new Date().getFullYear()} by TPSoft
      </p>
      <div className="_icon">
        <button onClick={() => router.back()}>
          <Image
            className="img_return"
            width={32}
            height={32}
            src={require("../vendor/image/top.svg")}
            alt={'Trở về'}
          />
        </button>
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <Image
            width={32}
            height={32}
            src={require("../vendor/image/top.svg")}
            alt={'On Top'}

          />
        </button>
        <a
          aria-label="Zalo"
          href="https://zalo.me/4210793912768709606?gidzl=Yigw3zZXprcEqxiDqllDM8_GlWF5hyC0m83Y1vMiaroJXRLOnwgMMvU4wWZ1hSbUdT2u3cHa74LYtERDN0"
          target="_blank"
        >
          <Image
            width={32}
            height={32}
            src={require("../vendor/image/zalo.svg")}
            alt={'Zalo'}

          />
        </a>
      </div>
    </div>
  );
}