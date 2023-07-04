import React from "react";
import {
  ResellerProfileStyled,
  ResellerProfileWrapper,
  SecondaryWrapper,
} from "./ResellerDetailStyled";
import BaseButton from "../Common/Buttons/BaseButton";

const ResellerProfile = () => {
  return (
    <ResellerProfileStyled>
      <ResellerProfileWrapper>
        <img src="/assets/slivapetlogo.svg" alt="slivapetlogo" />
        <div className="content">
          <h2 className="store-name">SlivaPetStore</h2>
          <p className="city">Kota Bandung</p>
          <SecondaryWrapper>
            <div>
              <div className="profile-buttons">
                <BaseButton
                  radius="5px"
                  fontSize="14px"
                  text="Chat Sekarang"
                  color="#CEEAF0"
                  textColor="#2335D4"
                  width="160px"
                  height="40px"
                />
                <BaseButton
                  radius="5px"
                  text="Kunjungi Toko"
                  fontSize="14px"
                  color="#CEEAF0"
                  textColor="#2335D4"
                  width="160px"
                  height="40px"
                />
              </div>
              <div>
                <p className="time">09.00 WIB - 21.00 WIB</p>
                <p>Jam operasional toko</p>
              </div>
            </div>
            <div className="stats">
              <div className="stat">
                <span>Penilaian</span>
                <span className="number">1.6jt</span>
              </div>
              <div className="stat">
                <span>Bergabung</span>
                <span className="number">1 bulan lalu</span>
              </div>
              <div className="stat">
                <span>Produk</span>
                <span className="number">1.6rb</span>
              </div>
              <div className="stat">
                <span>Pengikut</span>
                <span className="number">1.6rb</span>
              </div>
            </div>
          </SecondaryWrapper>
        </div>
      </ResellerProfileWrapper>
    </ResellerProfileStyled>
  );
};

export default ResellerProfile;
