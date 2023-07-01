import styled from '@emotion/styled';
import { getRandomHexColor } from 'until/getrandomcalor.js';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto 16px;
  width: 350px;
  text-align: center;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
`;

export const Title = styled.h2`
  padding: ${props => props.theme.space[4]}px;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size:  font-size: ${props => props.theme.fontSizes.l};
  text-transform: uppercase;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: ${props => props.theme.space[0]}px;
  margin: 0;
  list-style: none;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;

  padding: ${props => props.theme.space[4]}px;
  margin: 0;
  border-radius: 5px;
  background-color: ${props => getRandomHexColor(props.index)};
`;

export const Label = styled.span`
  font-size: 0.8;
  color: ${props => props.theme.colors.black};
`;

export const Percentage = styled.span`
  font-size: 1.2;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.black};
`;
