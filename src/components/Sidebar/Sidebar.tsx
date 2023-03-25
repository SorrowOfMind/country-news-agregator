import { useState } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import CountryEntry from './CountryEntry';

function Sidebar() {
  const [count, setCount] = useState(20);
  const { countries } = useAppSelector((state) => state.countries);
  return (
    <section className="sidebar">
      {countries.length > 0
        && countries.map((country) => (
          <CountryEntry key={country.id} name={country.nicename} code={country.iso} />
        ))}
    </section>
  );
}

export default Sidebar;
