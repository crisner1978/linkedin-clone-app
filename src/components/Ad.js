import styled from "styled-components";

const Ad = ({ href, title, desc }) => {
  return (
    <Container>
      <Content href={href} target="_blank" rel="noreferrer">
        <h5>{title}<span>{desc}</span>
        </h5>
      </Content>
    </Container>
  );
};

export default Ad;

const Container = styled.main`
  display: flex;
  justify-content: center;
  padding: 16px 0;
  min-height: 2.4rem;
`;

const Content = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  max-width: 100%;
  color: #0a66c2;
  span {
    color: #434649;
  }
  &:hover {
    text-decoration: underline;
    color: #434649;
  }
`;
