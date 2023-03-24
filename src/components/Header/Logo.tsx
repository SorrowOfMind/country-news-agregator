import { Typography } from 'antd';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="logo-container">
      <Typography.Title level={2} className="logo">
        <Link to="/">gnNews</Link>
      </Typography.Title>
    </div>
  );
}

export default Logo;
