import React from 'react';
import styled from 'styled-components';

const PopupCardContentContainer = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  margin: 0 0 16px 0;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 16px;
`;

interface PopupCardContentProps {
  title: string;
  description: string;
}

const PopupCardContent: React.FC<PopupCardContentProps> = ({ title, description }) => {
  return (
    <PopupCardContentContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </PopupCardContentContainer>
  );
};

export default PopupCardContent;
