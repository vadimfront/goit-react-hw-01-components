import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border: 1px solid #ccc;
  margin: 15px 0;
`;

export const TableHeader = styled.thead``;

export const TableRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.colors.accentedRow};
  }
`;

export const TableHeaderCell = styled.th`
  padding: 8px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.tableHeader};
`;

export const TableBody = styled.tbody`
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const TableCell = styled.td`
  padding: 8px;
  text-align: center;
`;
