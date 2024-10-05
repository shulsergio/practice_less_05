import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { useDispatch } from 'react-redux';
import { fetchExchengeInfo } from '../../redux/currency/operations';

export const ExchangeForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const { value } = evt.target.elements.currency;
    console.log(value);
    const [amount, from, , to] = value.split(' ');
    console.log(amount, from, to);
    dispatch(fetchExchengeInfo({ amount, from, to }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        type="text"
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        placeholder="15 USD in UAH"
        title="Request format 15 USD in UAH"
        className={styles.input}
        name="currency"
        required
      />
    </form>
  );
};
