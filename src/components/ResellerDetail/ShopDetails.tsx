import React from "react";
import { ShopDetailsStyled } from "./ResellerDetailStyled";

const ShopDetails = () => {
  return (
    <ShopDetailsStyled>
      <div className="info">
        <div className="title">Informasi Toko</div>
        <div className="content">
          <div className="subcontent">
            <p className="key">Buka sejak</p>
            <p className="value">Juni 2023</p>
          </div>
          <div className="subcontent">
            <p className="key">Stok Produk</p>
            <p className="value">1359</p>
          </div>
          <div className="subcontent">
            <p className="key">Lokasi Toko</p>
            <p className="value">Kota Pekanbaru</p>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="title">Deskripsi Toko</div>
        <div className="content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            obcaecati modi possimus iure doloribus quo minima facere harum, enim
            inventore blanditiis nobis in. Culpa possimus harum voluptatibus qui
            commodi, rerum ad maiores. Reiciendis, facere? Facere minima
            veritatis architecto aliquid ex! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Laborum sunt ipsam ullam cumque esse
            explicabo est tempore a architecto unde magnam, cum ut reiciendis
            incidunt quisquam dicta dolor accusamus excepturi aut laudantium ex
            maxime. Vero odio numquam nostrum natus ipsum.
          </p>
        </div>
      </div>
    </ShopDetailsStyled>
  );
};

export default ShopDetails;
