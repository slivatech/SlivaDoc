import CategorySection from "./CategorySection";
import DoctorsList from "./DoctorsList";
import { facilities, jamOperasional } from "./fakeData";
import ServicesList from "./ServicesList";
import { StyledInfoTab, StyledServiceTab } from "./TabSectionStyle";

interface TabProps {
  tab: "informasi" | "layanan" | "dokter";
}
const Tab = ({ tab }: TabProps) => {
  return <div style={{paddingTop:"1rem"}}>{tab === "informasi" ? <InfoTab /> : tab==="layanan" ? <ServiceTab /> : <DoctorTab />}</div>;
};

const InfoTab = () => {
  return (
    <div>
      <StyledInfoTab>
        <h2>Informasi Fasilitas Kesehatan</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numuam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum
          nesciunt ipsum debitis quas aliquid.
        </p>
      </StyledInfoTab>
      <StyledInfoTab>
        <h2>Jam Operasional</h2>
        {jamOperasional?.map((time, i) => (
          <div key={i}>
            <span style={{ fontWeight: 700, fontSize: "12px" }}>
              {time.day}:{" "}
              <p style={{ display: "inline-block" }}>{time.operationTime}</p>
            </span>
          </div>
        ))}
      </StyledInfoTab>
      <StyledInfoTab>
        <h2>Fasilitas</h2>
        <ul>
          {facilities.map((facility,i)=>(
            <li key={i}>
              {facility}
            </li>
          ))}
        </ul>
      </StyledInfoTab>
    </div>
  );
};

const ServiceTab = () => {
  return (
    <StyledServiceTab>
      <CategorySection />
      <ServicesList />
    </StyledServiceTab>
  )
}

const DoctorTab = () => {
  return (
    <div>
      <DoctorsList />
    </div>
  )
}

export default Tab;
