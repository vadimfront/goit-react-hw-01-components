import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;
export const ListItem = styled.li`
  width: 260px;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 1px 4px 12px #ccc;
`;
export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;
export const Avatar = styled.img`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;
export const Name = styled.p`
  font-weight: bold;
`;
