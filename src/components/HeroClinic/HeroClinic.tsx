import { Container } from "../Container";
import { StyledHeroClinic } from "./HeroClinicStyle";
import styled from "styled-components";
const AboutClinic = styled.div`
  padding-top: 1rem;
  h1 {
    text-transform: capitalize;
    font-weight: 700;
  font-size:clamp(14px,2vw,20px);

  }
  & > *:not(h1) {
    margin-top: 1rem;
  }
`;

const Location = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: clamp(8px, 2vw, 12px);
  align-items: flex-start;
  p {
    color: #1c1c1c;
    max-width: 75%;
  }

  img{
    align-self: center;
    object-fit: cover;

  }
`;

const HeroClinic = () => {
  return (
    <Container>
      <StyledHeroClinic>
        <img className="interiorImg" alt="hero" src="/assets/interior.png" />
        <div className="location">
          <AboutClinic>
            <h1>Klinik hewan indonesia</h1>
            <Location>
              <img src="/assets/location.svg" />
              <p>
                Tanah abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta
                10220, Karet Tengsin, Kota Jakarta Pusat, DKI Jakarta
              </p>
            </Location>
          </AboutClinic>
          <img className="locationImg" src="/assets/location-map.png" style={{ objectFit: "cover" }} />
        </div>
      </StyledHeroClinic>
    </Container>
  );
};

export default HeroClinic;
