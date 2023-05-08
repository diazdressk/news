import { useQuery } from '@tanstack/react-query';
import { fetchNews } from '../api/index';
import ErrorBox from '../components/Error/error';
import NewsCard from '../components/NewsCard/news-card';
import { NewsListSkeleton } from '../components/Skeletons';
import Refresh from '../components/refresh/refresh';

const Home = () => {
  const { data, isLoading, isError, refetch, remove } = useQuery(['news'], fetchNews, {
    refetchInterval: 60000 /* каждую минуту рефетчит */,
  });

  if (isLoading) return <NewsListSkeleton />;

  if (isError) return <ErrorBox />;

  return (
    <>
      <Refresh refetch={refetch} remove={remove} title="I refresh news" />
      {data.map(({ data }) => (
        <NewsCard news={data} key={data.id} />
      ))}
    </>
  );
};
export default Home;
