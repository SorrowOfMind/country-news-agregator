import { List, Typography } from 'antd';
import moment from 'moment';
import { NewsInterface } from '../../features';

interface NewsListInterface {
  newsData: NewsInterface[],
  handleClick: (id: string) => void;
}

function NewsList({ newsData, handleClick }: NewsListInterface) {
  return (
    <List
      bordered
      dataSource={newsData}
      renderItem={(news, idx) => (
        <List.Item onClick={() => handleClick(news.id)}>
          <List.Item.Meta title={`${idx + 1}. ${news.title}`} />
          <Typography.Text mark>{news.source.name}</Typography.Text>
          {' '}
          {moment(news.publishedAt).format('LL')}
        </List.Item>
      )}
    />
  );
}

export default NewsList;
