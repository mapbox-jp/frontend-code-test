import styled from 'styled-components';

type Container = {
  size?: string
  color?: string
}

export const Container = styled.i`
  display: inline-block;
  font-size: ${({ size }: Container) => size || null};
  color: ${({ color }: Container) => color || null};
`;
