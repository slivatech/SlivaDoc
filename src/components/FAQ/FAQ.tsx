import React, { useState } from "react";
import styled from "styled-components";

interface Question {
  id: number;
  question: string;
  faqs: FAQ[];
}

interface FAQ {
  id: number;
  questionId: number;
  answer: string;
  questions: string;
}

interface FAQListProps {
  questions: Question[];
}

const FAQ: React.FC<FAQListProps> = ({ questions }) => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [selectedFAQs, setSelectedFAQs] = useState<FAQ[]>([]);

  // State untuk menyimpan status tampilan jawaban pada tiap pertanyaan
  const [showAnswers, setShowAnswers] = useState<{ [key: number]: boolean }>({});

  const handleQuestionClick = (questionId: number) => {
    const selectedQuestion = questions.find((question) => question.id === questionId);
    if (selectedQuestion) {
      setSelectedQuestion(selectedQuestion.id);
      setSelectedFAQs(selectedQuestion.faqs);
    }
  };

  // Fungsi untuk membalik status tampilan jawaban pada sebuah pertanyaan
  const toggleAnswer = (faqId: number) => {
    setShowAnswers({
      ...showAnswers,
      [faqId]: !showAnswers[faqId],
    });
  };

  return (
    <Container>
      <QuestionsContainer>
        <QuestionsList>
          {questions.map((question) => (
            <QuestionItem
              key={question.id}
              selected={question.id === selectedQuestion}
              onClick={() => handleQuestionClick(question.id)}
            >
              {question.question}
            </QuestionItem>
          ))}
        </QuestionsList>
      </QuestionsContainer>
      <FAQsContainer>
        <FAQList>
          {selectedFAQs.map((faq) => (
            <FAQItem key={faq.id}>
              <QuestionHeader onClick={() => toggleAnswer(faq.id)}>
                {faq.questions}{" "}
                {showAnswers[faq.id] ? (
                  <span role="img" aria-label="Hide Answer">
                    -
                  </span>
                ) : (
                  <span role="img" aria-label="Show Answer">
                    +
                  </span>
                )}
              </QuestionHeader>
              {/* Tampilkan jawaban hanya jika status tampilan jawaban pada pertanyaan tersebut true */}
              {showAnswers[faq.id] && <Answer>{faq.answer}</Answer>}
            </FAQItem>
          ))}
        </FAQList>
      </FAQsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
`;

const QuestionsContainer = styled.div`
  flex: 1;
`;

const QuestionsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;


  const QuestionItem = styled.li<{ selected: boolean }>`
  padding: 1rem;
  background-color: ${({ selected }) => (selected ? "#eee" : "#f5f5f5")};
  color: ${({ selected }) => (selected ? "#333" : "#555")};
  cursor: pointer;
  width: 324px;
  height: 51px;
  transition: all 0.2s ease-in-out;
  border-left: ${({ selected }) => (selected ? "2px solid #27a6f0;" : "4px solid transparent")};

  &:hover {
    background-color: #eee;
  }
`;

const FAQsContainer = styled.div`
  flex: 2;
`;

const FAQList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const FAQItem = styled.li`
  width:620px;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 0.25rem;
`;

const QuestionHeader = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

const Answer = styled.p`
  margin: 0;
`;
export default FAQ;
