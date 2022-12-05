import React from 'react';
import styled from 'styled-components';


// Styled Components
const StyledMain = styled.main`
  min-height: 80vh;
`;

const StyledAboutIntro = styled.section`
  justify-content: space-evenly;
  margin: 4em auto;

  @media screen and (max-width: 768px) {
    height: auto;
    margin: 2em auto;
  }
`;

const StyledTopIntroContainer = styled.div`
  width: 85%;
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledAboutTextContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

// Component function
const About = () => {
  return (
    <StyledMain>
      <StyledAboutIntro id="about-intro" className="intro container flex-item">
        <StyledTopIntroContainer className="top-intro-container flex-item">
          
          <StyledAboutTextContainer
            id="about-text-container"
            className="flex-item flex-column"
          >
            <h1 className="base-text"></h1>
            <p className="base-text">
              
            </p>
            <p className="base-text">
              
            </p>
          </StyledAboutTextContainer>
        </StyledTopIntroContainer>
      </StyledAboutIntro>

    </StyledMain>
  );
};

export default About;
