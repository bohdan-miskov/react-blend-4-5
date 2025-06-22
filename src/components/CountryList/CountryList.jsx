import { Link, useLocation } from 'react-router-dom';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <>
      <h2>CountryList</h2>
      <Grid>
        {countries.map(({ id, flag, country }) => {
          return (
            <Link key={id} to={`/country/${id}`} state={location}>
              <GridItem key={id}>
                <img src={flag} alt={country} />
              </GridItem>
            </Link>
          );
        })}
      </Grid>
    </>
  );
};
export default CountryList;
