import {
  Container,
  ExchangeForm,
  ExchangeInfo,
  Heading,
  Section,
} from 'components';
import { useSelector } from 'react-redux';
import { selectExchangeInfo } from '../redux/selector';

const Home = () => {
  const isError = false;
  const exChangeInfo = useSelector(selectExchangeInfo);

  return (
    <Section>
      <Container>
        <ExchangeForm />
        <Heading info title="What currencies do you want to exchange?🙂" />
        {exChangeInfo && <ExchangeInfo {...exChangeInfo} />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
