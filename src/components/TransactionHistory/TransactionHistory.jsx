import PropTypes from 'prop-types';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>{renderTableRows(items)}</TableBody>
    </Table>
  );
};

const renderTableRows = items => {
  return items.map(({ id, type, amount, currency }) => {
    return (
      <TableRow key={id}>
        <TableCell>{type}</TableCell>
        <TableCell>{amount}</TableCell>
        <TableCell>{currency}</TableCell>
      </TableRow>
    );
  });
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

export default TransactionHistory;
