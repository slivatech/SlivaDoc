import ResellerProfile from "../../components/ResellerDetail/ResellerProfile";
import Navbar from "../../components/Navbar/Navbar";
import { Container } from "../../components/Container";
import Footer from "../../components/Footer/Footer";
import Tabs from "../../components/Common/Tabs/Tabs";
import ResellerMainTab from "../../components/ResellerDetail/ResellerMainTab";
import { ShopDetailsStyled } from "../../components/ResellerDetail/ResellerDetailStyled";
import ShopDetails from "../../components/ResellerDetail/ShopDetails";
import ResellerProductTab from "../../components/ResellerDetail/ResellerProductTab";

const ResellerDetailPage = () => {
  return (
    <div style={{background:"rgba(230, 231, 232, 0.3)"}}>
      <Navbar width={100} />
      <Container>
        <ResellerProfile />
        <div style={{ margin: "2rem 0" }}>
          <Tabs
            activeColor="#2335D4"
            width="35%"
            indicatorColor="#2335D4"
            activeIndicatorColor="#2335D4"
            tabs={[
              {
                title: "Beranda",
                render: () => <ResellerMainTab />,
              },
              {
                title: "Produk",
                render: () => <ResellerProductTab />,
              },
              {
                title: "Ulasan",
                render: () => <></>,
              },
            ]}
          />
        </div>
        <ShopDetails />
      </Container>
      <Footer />
    </div>
  );
};

export default ResellerDetailPage;
