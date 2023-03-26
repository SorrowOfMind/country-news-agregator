import { Card, Col } from 'antd';

interface NewsCardInterface {
  title: string,
  source: string,
  date: string,
  img: string | null,
  desc: string | null,
}

function NewsCard({
  title, source, date, img, desc,
}: NewsCardInterface) {
  return (
    <Col xs={24} sm={12} lg={6} className="news-card">
      <Card
        title={title}
        extra={<img className="news-image" src={img} />}
        hoverable
      >
        <p>
          Source:
          {source}
        </p>
        <p>
          Published At:
          {date}
        </p>
        <p>
          Summary:
          {desc}
        </p>
      </Card>
    </Col>
  );
}

export default NewsCard;
