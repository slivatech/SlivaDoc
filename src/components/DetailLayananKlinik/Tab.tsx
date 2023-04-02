
import { StyledInfoTab } from "./TabSectionStyle";

interface TabProps {
  tab: "informasi" | "Ulasan" ;
}

const Tab = ({ tab }: TabProps) => {
  return (
    <div style={{ paddingTop: "1rem" }}>
      {tab === "informasi" ? (
        <InfoTab />
      ) : tab === "Ulasan" ? (
        <UlasanTab/>
      ): null}
    </div>
  );
};

const InfoTab = () => {
  return (
    <div>
      <StyledInfoTab>
        <h2>Detail Layanan</h2>
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
    </div>
  );
};

const UlasanTab = () => {
    return (
      <div>
        <StyledInfoTab>
          <h2>Ulasan</h2>
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
      </div>
    );
  };

export default Tab;