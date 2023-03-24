import { Button, Space } from 'antd';
import Logo from './Logo';

function Header() {
  return (
    <header className="header-container">
      <Logo />
      <div className="nav-buttons-wrapper">
        <Button type="primary">Primary Button</Button>
      </div>
    </header>
  );
}

export default Header;
