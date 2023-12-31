import styled from '@emotion/styled';


export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: ${props => props.theme.colors.backgroundColor};
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;