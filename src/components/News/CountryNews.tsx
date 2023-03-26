import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row } from 'antd';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchNews } from '../../features/newsSlice';
import NewsCard from './NewsCard';
import NewsList from './NewsList';

function CountryNews() {
  const [currentArticle, setCurrentArticle] = useState(null);
  const { countryId } = useParams();
  const dispatch = useAppDispatch();
  const countryNews = useAppSelector((state) => state.news.news[countryId as string]);
  const isTiled = useAppSelector((state) => state.layout.value);

  useEffect(() => {
    if (countryNews === undefined) {
      const promise = dispatch(fetchNews(countryId as string));
      return () => {
        promise.abort();
      };
    }
  }, [countryId, dispatch, countryNews]);

  return (
    isTiled
      ? (
        <Row gutter={[30, 30]} className="card-container">
          {countryNews?.map((news, idx) => (
            <NewsCard
              key={idx}
              title={news.title}
              source={news.source.name}
              date={news.publishedAt}
              img={news.urlToImage}
              desc={news.description}
            />
          ))}
        </Row>
      )
      : <NewsList newsData={countryNews}/>
  );
}

export default CountryNews;
