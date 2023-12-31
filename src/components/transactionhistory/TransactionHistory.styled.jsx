import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 0 auto;
  padding: ${props => props.theme.space[4]}px;

  max-width: 100%;
  width: 100%;
  border-radius: ${props => props.theme.radii.medium};
`;

export const Thead = styled.thead`
  border-radius: ${props => props.theme.radii.medium};
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.accent};
  font-family: ${props => props.theme.fonts.heading};
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  color: ${props => props.theme.colors.black};
`;

export const Th = styled.th`
  padding-left: ${props => props.theme.space[4]}px;
  text-align: left;
`;

export const Tb = styled.tbody`
  background-color: ${props => props.theme.colors.white};
`;
