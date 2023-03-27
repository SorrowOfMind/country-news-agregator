/* eslint-disable max-len */
import CountryEntry from './CountryEntry';

interface Country {
  name: string;
  code: string;
}

interface SidebarProps {
  countries: Country[]
}

function Sidebar({ countries }: SidebarProps) {
  return (
    <section className="sidebar">
      {countries.length > 0
        && countries.map((country) => <CountryEntry key={country.code} name={country.name} code={country.code} />)}
    </section>
  );
}

export default Sidebar;
