import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  > button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &:first-of-type {
      left: 18px;
    }
    &:last-of-type {
      right: 18px;
    }
  }
`;

export const Slider = styled.div`
  display: flex;
  width: ${props => `${props.width}%`};
  transform: ${props => `translateX(-${props.transformPercentage}%)`};
  ${({ suspendAnimation }) => !suspendAnimation &&
    css`
      transition: transform .5s ease;
    `
  }
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  gap: 20px;
`

export const Dot = styled(Button)`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #fff;
`;