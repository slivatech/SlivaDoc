import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar/Avatar";
import BarChartComponent from "../Chart/BarChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export const CustomerSidebarStyle = styled.aside<{ isOpen: boolean }>(
  ({ isOpen }) => `
height: 100%; /* 100% Full-height */
  width: ${isOpen ? "25%" : 0}; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  right: 0;
  background-color: white;
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
`
);

export const ProfileSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 1px solid #06152b18;
  padding: 2rem 1rem;
  .name {
    font-size: 22px;
    color: #06152b;
  }
  p {
    color: #06152b;
    font-size: 14px;
  }
`;

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem ;
  color: #06152b;

  div {
    padding: 1rem 0;
  }

  .email {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border-bottom: 1px solid #06152b13;
  }

  .location {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const PerformanceSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #06152b;
  padding:0 1rem;
`;

export const CircularProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: .5rem;
  justify-content:space-between;
`;

export const CircularProgressBox = styled.div`
  border: 1px solid #f1f4fa;
  border-radius: 5px;
  padding:.5rem;
  max-width:150px;

`;

const CustomerSidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <CustomerSidebarStyle isOpen={isOpen}>
      <ProfileSection>
        <Avatar
          size={50}
          imgSrc="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <h1 className="name">John Doe</h1>
        <p>Entrepreneur</p>
      </ProfileSection>
      <ContactSection>
        <h2>Contact Info</h2>
        <div className="email">
          <img src={"/assets/message.svg"} />
          <p>kajope5182@ummoh.com</p>
        </div>
        <div className="location">
          <img src={"/assets/location-2.svg"} />
          <p>2239 Hog Camp Road</p>
        </div>
      </ContactSection>
      <PerformanceSection>
        <h2>Performance</h2>
        <BarChartComponent />
        <CircularProgressContainer>
          <CircularProgressBox>
            <CircularProgressbar
              value={60}
              text={`60%`}
              styles={buildStyles({
                trailColor: "#f4f4ff",
                pathColor: "#03A89E",
                textColor: "#06152B",
              })}
            />
          </CircularProgressBox>
          <CircularProgressBox>
            <CircularProgressbar
              value={70}
              text={`70%`}
              styles={buildStyles({
                trailColor: "#f4f4ff",
                pathColor: "#3A36DB",
                textColor: "#06152B",
              })}
            />
          </CircularProgressBox>
        </CircularProgressContainer>
      </PerformanceSection>
    </CustomerSidebarStyle>
  );
};

export default CustomerSidebar;
