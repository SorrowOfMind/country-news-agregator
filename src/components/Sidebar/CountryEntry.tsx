import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';

import noImg from '../../assets/noflag.png';

interface CountryEntryInterface {
  name: string,
  code: string,
}

function CountryEntry({ name, code }: CountryEntryInterface) {
  const handleNoFlag = (e: SyntheticEvent<HTMLImageElement>) => {
    (e.target as HTMLImageElement).src = `${noImg}`;
  };

  return (
    <Link to={`/country/${code.toLowerCase()}`}>
      <div className="country-entry">
        <img
          src={`https://flagsapi.com/${code}/flat/16.png`}
          alt=""
          className="country-icon"
          onError={handleNoFlag}
        />
        {name}
      </div>
    </Link>
  );
}

export default CountryEntry;
