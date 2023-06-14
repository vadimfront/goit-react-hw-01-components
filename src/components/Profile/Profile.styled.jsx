import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  box-shadow: 1px 4px 12px ${({ theme }) => theme.colors.borderColor};
  border-radius: 6px;
  margin-top: 20px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 25px;
`;

export const Avatar = styled.img`
  display: block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => (props.rounded ? '50%' : '0')};
  margin: 0 auto;
`;

export const FullName = styled.p`
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 0;
`;

export const Tag = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Location = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  margin: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ListItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 5px;
  text-align: center;
  border-left: 1px solid ${({ theme }) => theme.colors.borderColor};
  &:first-of-type {
    border-left: none;
  }
`;

export const Label = styled.span`
  color: #7a7373;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
