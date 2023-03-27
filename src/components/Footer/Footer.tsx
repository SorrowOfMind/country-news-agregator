import { useClock, useNewsCount } from '../../hooks';

function Footer() {
  const time = useClock();
  const count = useNewsCount();

  return (
    <footer className="footer">
      <div className="count-wrapper">News Total: {count}</div>
      <div className="clock-wrapper">{time}</div>
    </footer>
  );
}

export default Footer;
