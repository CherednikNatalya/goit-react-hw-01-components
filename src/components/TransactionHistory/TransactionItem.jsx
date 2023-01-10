import PropTypes from 'prop-types';

export const TransactionItem = ({id, type, amount, currency}) => {
    return (
        <table class="transaction-history">

  <tbody>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </tbody>
</table>
    )
}

TransactionItem.propTypes ={
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
    id: PropTypes.number,
  }


