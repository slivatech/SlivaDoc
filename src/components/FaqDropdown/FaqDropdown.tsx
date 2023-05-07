import React, { useState } from "react";
import styled from "styled-components";
import more from "../../assets/icon/morearrow.svg"
import less from "../../assets/icon/lessarrow.svg"

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  questions: Question[];
}

const FaqDropdown: React.FC<FAQProps> = ({ questions }) => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const handleQuestionClick = (id: number) => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };

  return (
    <Container>
      <QuestionList>
        {questions.map((question) => (
          <QuestionItem key={question.id}>
            <QuestionHeader
                onClick={() => handleQuestionClick(question.id)}
                isActive={activeQuestion === question.id}
                >
              {question.question}
              <ExpandIcon>
                {activeQuestion === question.id ? 
                <img src={less} alt="Less"/> : 
                <img src={more} alt="More"/>}
            </ExpandIcon>
            </QuestionHeader>
            {activeQuestion === question.id && (
              <Answer>{question.answer}</Answer>
            )}
          </QuestionItem>
        ))}
      </QuestionList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;


const QuestionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const QuestionItem = styled.li`
  margin: 0;
  border-left:1px solid #62DAE1;;
  border-bottom: 1px solid #62DAE1;
transform: rotate(0.06deg);
`;

const QuestionHeader = styled.button<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #505050;
  align-items: center;
  width: 100%;
  background-color: #ffff;
  padding: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  border-left: ${({ isActive }) =>
    isActive ? '2px solid #08A1F8' : 'none'};

  &:hover {
    background-color: #eee;
  }
`;

const Answer = styled.div`
  padding: 1rem;
  font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #505050;
`;

const ExpandIcon = styled.span`
  width: 48px;
height: 48px;
`;

export default FaqDropdown;
