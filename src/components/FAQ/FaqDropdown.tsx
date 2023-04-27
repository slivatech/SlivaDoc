import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface FaqProps {
    question: string;
    answer: string;
  }
  const Container = styled.div`
  border: 1px solid #ccc;
  width: 58.375rem;
  padding: 10px;
  margin-bottom: 10px;
`;
const Question = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;
const Answer = styled.p`
  margin: 0;
  font-size: 14px;
`;

  const FaqDropdown: React.FC<FaqProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    
    return (
      <Container ref={dropdownRef}>
        <Question onClick={toggleDropdown}>{question}</Question>
        {isOpen && <Answer>{answer}</Answer>}
      </Container>
    );
  };

  export default FaqDropdown;

