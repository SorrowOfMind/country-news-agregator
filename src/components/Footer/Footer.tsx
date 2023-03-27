import useClock from '../../hooks/useClock';
import useNewsCount from '../../hooks/useNewsCount';

function Footer() {
  const time = useClock();
  const count = useNewsCount();

  return (
    <footer className="footer">
      <div className="count-wrapper">Number of articles: {count}</div>
      <div className="clock-wrapper">{time}</div>
    </footer>
  );
}

export default Footer;
