import { useAppSelector } from './reduxHooks';

const useNewsCount = () => {
  const count = useAppSelector((state) => {
    const key = state.news.currentCountry;
    if (key !== '') {
      return state.news.news[key].length;
    }
    return null;
  });

  return count;
};

export default useNewsCount;
