import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Line,
  LinkWrap,
  LogoWrap,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  SocialMediaWrap,
  TextWrap,
} from "./styled";
import { section2, section3, section4, section5, social } from "./fakeData";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <Container>
        <Section1>
          <LogoWrap>
            <img src="./assets/logo.svg" alt="" />
          </LogoWrap>
          <TextWrap>
            Aplikasi jaga kesehatan hewan dengan beragam layanan terpercaya.
          </TextWrap>
          <SocialMediaWrap>
            <div className="text">Tetap Terhubung Dengan Kami</div>
            <div className="social">
              {social?.map((data: any, idx: number) => (
                <Link to={data.url} target="_blank" key={idx}>
                  <img src={data.icon} alt={data.name} />
                </Link>
              ))}
            </div>
          </SocialMediaWrap>
        </Section1>
        <Line />
        <Section2>
          <div className="title">Lebih dekat</div>
          <div className="link">
            {section2?.map((data) => (
              <LinkWrap to={data.url} key={data.id}>
                {data.text}
              </LinkWrap>
            ))}
          </div>
        </Section2>
        <Line />
        <Section3>
          <div className="title">Layanan</div>
          <div className="link">
            {section3?.map((data) => (
              <LinkWrap to={data.url} key={data.id}>
                {data.text}
              </LinkWrap>
            ))}
          </div>
        </Section3>
        <Line />
        <Section4>
          <div className="title">Kolaborasi Dengan Kami</div>
          <div className="link">
            {section4?.map((data) => (
              <div className="collab" key={data.id}>
                <div className="first">{data.title}</div>
                <div className="second">{data.text}</div>
              </div>
            ))}
          </div>
        </Section4>
        <Section5>
          <div className="title">Get app</div>
          <div className="link">
            {section5?.map((data, idx) => (
              <LinkWrap to={data.url} key={idx}>
                <img src={data.icon} alt={data.name} />
              </LinkWrap>
            ))}
          </div>
        </Section5>
      </Container>
      <Copyright />
    </>
  );
};

export default Footer;
