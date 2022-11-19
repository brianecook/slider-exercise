import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  color: #fff;
  img {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: inline-flex;
  gap: 15px;
`;

export const Button = styled.a`
  all: unset;
  border: 2px solid #fff;
  cursor: pointer;
  text-transform: uppercase;
  padding: 12px 18px;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 800px;
  text-align: center;
  h2 {
    text-transform: uppercase;
  }
`;