import moment from 'moment';
import useClock from '../../hooks/useClock';

function Footer() {
    const time = useClock();

  return (
    <footer className="footer">
      footer
      {time}
    </footer>
  );
}

export default Footer;
