// import {App} from '../App'
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export const TransactionHistory =({items}) => {
return (
  <div className={css.wrapper}>
    <table className={css.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead> 
  <tbody>
  {items.map(({id, type, amount, currency}) => {
         return (
                        <tr key={id}>
                          <td>{type}</td>
                          <td>{amount}</td>
                          <td>{currency}</td>
                        </tr>
                      );
         })}
  </tbody>
  </table>
  </div>
)
}
 


TransactionHistory.propTypes ={
    items: PropTypes.arrayOf(
      PropTypes.exact({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }),
    ),
  }





  