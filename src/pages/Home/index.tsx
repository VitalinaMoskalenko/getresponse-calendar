import React from "react";
import moment from "moment";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Fotter";

const Container = styled.div``;
const BodyContainer = styled.div``;
const ProgressBar = styled.div``;
const Week = styled.div``;
const ProteinOption = styled.div``;
const HeaderBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function Home() {
  return (
    <Container>
      <Header />
      <BodyContainer>
        <HeaderBody>
          <ProgressBar />
          <Week />
          <ProteinOption />
        </HeaderBody>
      </BodyContainer>
      <Footer />
    </Container>
  );
}

export default Home;
