import styled from "styled-components";

export const Body = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.body}px;
  font-family: Arial;
  margin: 0;
`;

export const SmallBody = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.smallBody}px;
  font-family: Arial;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0;
`;
