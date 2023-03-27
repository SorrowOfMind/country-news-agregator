import { Card, Col } from 'antd';
import moment from 'moment';
import placeholderImg from '../../assets/photo_placeholder.png'

interface NewsCardInterface {
  id: string,
  title: string,
  source: string,
  date: string,
  img: string | null,
  desc: string | null,
  handleClick: (id: string) => void;
}

function NewsCard({
  id, title, source, date, img, desc, handleClick,
}: NewsCardInterface) {
  return (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} className="news-card">
      <Card
        hoverable
        cover={<img className="news-image" src={img !== null ? img : placeholderImg} alt=''/>}
        onClick={() => handleClick(id)}
      >
        <Card.Meta title={title} description={`${source} ${moment(date).format('LL')}`} />
        <p>
          {desc}
        </p>
      </Card>
    </Col>
  );
}

export default NewsCard;
