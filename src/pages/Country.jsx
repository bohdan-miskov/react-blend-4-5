import { useLocation, useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Loader from '../components/Loader/Loader';
import Section from '../components/Section/Section';
import { fetchCountry } from '../service/countryApi';
import { useEffect, useRef, useState } from 'react';
import CountryInfo from '../components/CountryInfo/CountryInfo';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';

const Country = () => {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { countryId } = useParams();
  const location = useLocation();

  const goBack = useRef(location?.state ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [countryId]);
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBack.current} />
        <Heading title="SearchCountry" bottom />
        {country && <CountryInfo {...country} />}
        {isLoading && <Loader />}
        {error && <Heading title="Something went wrong!" bottom />}
      </Container>
    </Section>
  );
};

export default Country;
