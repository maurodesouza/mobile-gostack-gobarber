import { useSelector } from 'react-redux';
import createRouter from '~/routes';

export default function App() {
  const signed = useSelector(({ auth }) => auth.signed);

  return createRouter(signed);
}
