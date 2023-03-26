import CountryEntry from './CountryEntry';

interface Country {
  name: string;
  code: string;
}

interface SidebarProps {
  countriesList: Country[]
}

function Sidebar({ countriesList }: SidebarProps) {
  return (
    <section className="sidebar">
      {countriesList.length > 0
        && countriesList.map((country) => (
          <CountryEntry key={country.code} name={country.name} code={country.code} />
        ))}
    </section>
  );
}

export default Sidebar;
