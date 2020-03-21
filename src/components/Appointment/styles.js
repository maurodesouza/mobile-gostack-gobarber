import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 15px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  opacity: ${({ past }) => (past ? 0.6 : 1)};
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: bold;
`;

export const Time = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`;
