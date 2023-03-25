import { Typography } from 'antd';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Typography.Title level={2} className="logo">
      <Link to="/">
        <span>gn</span>
        News
      </Link>
    </Typography.Title>
  );
}

export default Logo;
