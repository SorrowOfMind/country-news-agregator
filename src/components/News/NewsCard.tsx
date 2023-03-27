/* eslint-disable max-len */
import { Card, Col } from 'antd';
import moment from 'moment';
import placeholderImg from '../../assets/photo_placeholder.png';
import { NewsInterface } from '../../features';

interface NewsCardInterface {
  news: NewsInterface,
  handleClick: (id: string) => void;
}

function NewsCard({ news: { id, title, source, publishedAt, urlToImage, description }, handleClick }: NewsCardInterface) {
  return (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} className="news-card">
      <Card
        hoverable
        cover={<img className="news-image" src={urlToImage ?? placeholderImg} alt="" />}
        onClick={() => handleClick(id)}
      >
        <Card.Meta title={title} description={`${source} ${moment(publishedAt).format('LL')}`} />
        <p>
          {description}
        </p>
      </Card>
    </Col>
  );
}

export default NewsCard;
