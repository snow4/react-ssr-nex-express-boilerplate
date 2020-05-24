import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Container = styled.div``;
const Banner = styled.h1`
  padding: 1em;
  /* background: green; */
  color: navy;
`;
class HomePage extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Container>
          <Banner>Demo ssr</Banner>
        </Container>
      </Wrapper>
    );
  }
}

export default HomePage;
