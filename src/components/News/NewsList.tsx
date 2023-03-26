import { List, Space, Typography } from 'antd';
import moment from 'moment';

interface NewsListInterface {
  id: string,
  title: string,
  source: string,
  date: string,
  handleClick: (id: string) => void;
}

function NewsList({ newsData, handleClick }: NewsListInterface) {
  return (

    <List
      bordered
      dataSource={newsData}
      renderItem={(news, idx) => (
        <List.Item onClick={() => handleClick(news.id)}>
          <List.Item.Meta
            title={`${idx + 1}. ${news.title}`}
          />
          <Typography.Text mark>{news.source.name}</Typography.Text>
          {' '}
          {moment(news.publishedAt).format('LL')}
        </List.Item>
      )}
    />
  );
}

export default NewsList;
