import TransactionList from '../TransactionList';
import TransactionListMobile from '../TransactionListMobile';
import { useMediaQuery } from 'react-responsive';

const Transaction = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <>
      {isDesktop && <TransactionList />}
      {!isDesktop && <TransactionListMobile />}
    </>
  );
};
export default Transaction;
