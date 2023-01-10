import {App} from '../App'
import PropTypes from 'prop-types';
import {TransactionItem} from './TransactionItem'
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
  {items.map(({id, type, amount, currency}) => (
          <TransactionItem
          key={id}
          type ={type} 
          amount={amount} 
          currency={currency}
          />
        ))}
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





  // export const TransactionHistory = ({ items }) => {
  //   return (
  //     <div className={css.wrapper}>
  //       <table className={css.transaction_history}>
  //         <thead>
  //           <tr>
  //             <th>Type</th>
  //             <th>Amount</th>
  //             <th>Currency</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {items.map(event => {
  //             return (
  //               <tr key={event.id}>
  //                 <td>{event.type}</td>
  //                 <td>{event.amount}</td>
  //                 <td>{event.currency}</td>
  //               </tr>
  //             );
  //           })}
  //         </tbody>
  //       </table>
  //     </div>
  //   );
  // };
  
  // TransactionHistory.propTypes = {
  //   transactions: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //       type: PropTypes.string.isRequired,
  //       amount: PropTypes.string.isRequired,
  //       currency: PropTypes.string.isRequired,
  //     })
  //   ),
  // };
  