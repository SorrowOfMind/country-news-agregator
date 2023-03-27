import type { PaginationProps } from 'antd';
import { useState, useCallback, useEffect } from 'react';
import useNewsCount from './useNewsCount';

const usePagination = (countryNews) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentCollection, setCurrentCollection] = useState(null);
  const count = useNewsCount();

  useEffect(() => {
    if (countryNews !== undefined) {
      setCurrentCollection(countryNews.slice(0, 20));
    }
    return () => setCurrentPage(1);
  }, [countryNews]);

  const splitCollection = useCallback((page: any) => {
    const lastIndex = page * 20;
    const firstIndex = lastIndex - 20;
    const splitArr = countryNews.slice(firstIndex, lastIndex);
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
