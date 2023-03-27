import type { PaginationProps } from 'antd';
import { useState, useCallback, useEffect } from 'react';
import useNewsCount from './useNewsCount';
import { NewsInterface } from '../features';

const usePagination = (countryNews: NewsInterface[]) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentCollection, setCurrentCollection] = useState<NewsInterface[]>();
  const count = useNewsCount();

  useEffect(() => {
    if (countryNews !== undefined) {
      setCurrentCollection(countryNews.slice(0, 20));
    }
    return () => setCurrentPage(1);
  }, [countryNews]);

  const splitCollection = useCallback((page: number) => {
    const lastIndex = page * 20;
    const firstIndex = lastIndex - 20;
    const splitArr = countryNews?.slice(firstIndex, lastIndex);
    setCurrentCollection(splitArr);
  }, [countryNews]);

  const handlePageChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
    splitCollection(page);
  };

  return {
    currentPage, currentCollection, count, handlePageChange, setCurrentCollection,
  };
};

export default usePagination;
