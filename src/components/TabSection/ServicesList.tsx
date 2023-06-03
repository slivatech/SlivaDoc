import AppointmentBox from "./AppointmentBox";
import { serviceAppointments } from "./fakeData";
import styled from "styled-components";

const ServicesListWrapper = styled.div`
  flex: 0.8;
  font-size: 14px;
  @media (max-width: 768px) {
    flex: 1;
  }
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ServicesList = () => {
  return (
    <ServicesListWrapper>
      {serviceAppointments.map((appointment, i) => (
        <AppointmentBox key={i} {...appointment} />
      ))}
    </ServicesListWrapper>
  );
};

export default ServicesList;
