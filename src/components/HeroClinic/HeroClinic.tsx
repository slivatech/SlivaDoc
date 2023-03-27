import { Container } from '../Container'
import { StyledHeroClinic } from './HeroClinicStyle'
import styled from 'styled-components'
const AboutClinic = styled.div`
    padding-top:1rem;
    h1 {
        text-transform: capitalize;
        font-weight:700;
    }
    & >*:not(h1) {
        margin-top:1rem ;
    }
`

const Location = styled.div`
    display:flex;
    gap:.5rem;
    font-size:clamp(10px,2vw,12px);
    align-items: center;
    p {
        color:#1C1C1C
    }
`

const HeroClinic = () => {
  return (
    <Container>
        <StyledHeroClinic>
            <img src='/assets/interior.png' />
            <AboutClinic>
                <h1>Klinik hewan indonesia</h1>
                <Location>

                    <img src="/assets/location.svg" />
                    <p>Tanah abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10220, Karet Tengsin, Kota Jakarta Pusat, DKI Jakarta</p>
                </Location>
            </AboutClinic>
            <img src="/assets/location-map.png" style={{objectFit:"cover"}} />
        </StyledHeroClinic>
    </Container>
  )
}

export default HeroClinic