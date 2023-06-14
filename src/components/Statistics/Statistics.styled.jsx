import styled from '@emotion/styled';

export const Section = styled.section``;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  padding-left: 0;
`;
export const ListItem = styled.li`
  width: 80px;
  background-color: ${props => props.bg};
  text-align: center;
`;
export const Label = styled.span`
  display: block;
`;
export const Percentage = styled.span`
  display: block;
`;
