import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(event.target.elements.region.value);
  };

  return (
    <>
      <h2>SearchForm</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button className={styles.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <select
          aria-label="select"
          className={styles.select}
          name="region"
          required
          defaultValue="default"
        >
          <option disabled value="default">
            Select a region
          </option>
          {regions.map(({ id, name, value }) => (
            <option key={id} value={value}>
              {name}
            </option>
          ))}
          <option value="america">America</option>
        </select>
      </form>
    </>
  );
};

export default SearchForm;
