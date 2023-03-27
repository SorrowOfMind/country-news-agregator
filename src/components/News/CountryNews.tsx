/* eslint-disable max-len */
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Modal, Row, Divider, Pagination } from 'antd';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchNews, setCurrentCountry } from '../../features';
import NewsCard from './NewsCard';
import NewsList from './NewsList';
import useModal from '../../hooks/useModal';
import usePagination from '../../hooks/usePagination';

function CountryNews() {
  const { isModalOpen, openModal, closeModal } = useModal(false);
  const [currentArticle, setCurrentArticle] = useState<any>();
  const { countryId } = useParams();
  const dispatch = useAppDispatch();
  const countryNews = useAppSelector((state) => state.news.news[countryId as string]);
  const isTiled = useAppSelector((state) => state.layout.value);
  const {
    currentPage, currentCollection, count, handlePageChange,
  } = usePagination(countryNews);

  const findCurrentArticle = useCallback((id: string) => {
    const article = currentCollection?.find((news) => news.id === id);
    if (article !== undefined) {
      setCurrentArticle(article);
    }
  }, [currentCollection]);

  useEffect(() => {
    if (countryNews === undefined) {
      const promise = dispatch(fetchNews(countryId as string));
      return () => {
        promise.abort();
      };
    }
    dispatch(setCurrentCountry(countryId));
  }, [countryId, dispatch, countryNews]);

  const handleClick = (id: string) => {
    findCurrentArticle(id);
    openModal();
  };

  return (
    <>
      {
        isTiled
          ? (
            <Row gutter={[30, 30]} className="card-container">
              {currentCollection?.map((news) => (
                <NewsCard
                  key={news.id}
                  id={news.id}
                  title={news.title}
                  source={news.source.name}
                  date={news.publishedAt}
                  img={news.urlToImage}
                  desc={news.description}
                  handleClick={handleClick}
                />
              ))}
            </Row>
          )
          : <NewsList newsData={currentCollection} handleClick={handleClick} />
      }
      <Pagination
        current={currentPage}
        onChange={handlePageChange}
        total={count}
        defaultPageSize={20}
      />
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <p>Author: {currentArticle?.author}</p>
        <Divider />
        <p>{currentArticle?.content !== null}</p>
        <Link to={currentArticle?.url}>Source</Link>
      </Modal>
    </>

  );
}

export default CountryNews;
