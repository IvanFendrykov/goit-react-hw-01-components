import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
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
  :hover {
   background-color: rgb(115, 120, 175);
-webkit-box-shadow: 0 6px 6px -6px #0E1119;
     -moz-box-shadow: 0 6px 6px -6px #0E1119;
          box-shadow: 0 6px 6px -6px #0E1119;
           color: #ffffff;
    text-shadow: .0625rem .0625rem .0625rem #400075;
`;

export const ExtendedTr = styled(Tr)`
  background-color: ${props =>
    props.idx % 2 === 0 ? props.theme.colors.muted : 'transparent'};
`;

export const Th = styled.th`
  padding-left: ${props => props.theme.space[4]}px;
  text-align: left;
`;

export const Tb = styled.tbody`
  background-color: ${props => props.theme.colors.white};
`;

export const Td = styled.td`
  padding-left: ${props => props.theme.space[4]}px;
  }
`;

export const Type = styled(Td)`
  text-transform: capitalize;
`;
