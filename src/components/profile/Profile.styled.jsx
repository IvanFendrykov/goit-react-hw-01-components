import styled from 'styled-components';

export const ProfileCard = styled.div`
  margin: 0 auto;
  width: 300px;
  text-align: center;
  align-items: center;
  background-color: white;
  margin-bottom: 16px;
`;

export const Description = styled.div`
  padding: 20px;
`;
export const Avatar = styled.img`
  width: 80px;
  border-radius: 50%;
`;
export const Name = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
  color: rgb(32, 32, 32);
  font-size: 32px;
  font-weight: 500;
`;

export const Tag = styled.p`
  color: rgb(192, 192, 192);
  text-shadow: rgb(255, 255, 255) 1px 1px 1px;
  font-family: Roboto;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  color: rgb(192, 192, 192);
  text-shadow: rgb(255, 255, 255) 1px 1px 1px;
  font-family: Roboto;
  font-size: 16px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(224, 224, 224);
  list-style: none;
  gap: 15px;
  padding: 20px;

  margin: 0;
`;

export const StatsDirection = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  color: rgb(119, 136, 153);

  font-family: Roboto;
  font-size: 16px;
`;

export const Quantity = styled.span`
  color: rgb(64, 64, 64);
  text-shadow: rgb(255, 255, 255) 1px 1px 1px;
  font-size: 18px;
  font-weight: 500;
`;
