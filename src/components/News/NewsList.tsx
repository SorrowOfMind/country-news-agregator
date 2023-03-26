import { List, Space, Typography } from 'antd';
import moment from 'moment';

interface NewsListInterface {
  title: string,
  source: string,
  date: string,
}

function NewsList({ newsData }: NewsListInterface) {
  return (
    // console.log("list", newsData)
    <List
      bordered
      dataSource={newsData}
      renderItem={(news, idx) => (
        <List.Item>
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
