import layoutReducer, { switchLayout } from './layoutSlice';
import newsReducer, { setCurrentCountry, fetchNews, NewsInterface } from './newsSlice';

export { layoutReducer, newsReducer, setCurrentCountry, fetchNews, switchLayout };
export type { NewsInterface };
