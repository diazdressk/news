import { Tooltip } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { fetchNews } from '../api/index';
import ErrorBox from '../components/Error/error';
import NewsCard from '../components/NewsCard/news-card';
import { NewsListSkeleton } from '../components/Skeletons';
import { RefreshIcon } from '../components/NewsCard/news-card.styles';

const Home = () => {
  const [refresh, setRefresh] = useState(true);
  const { data, isLoading, isError, refetch, remove } = useQuery(['news'], fetchNews, {
    refetchInterval: 60000 /* каждую минуту рефетчит */,
  });

  useEffect(() => {
    refresh && refetch();
    setRefresh(false);
  }, [refresh]);

  if (isLoading) return <NewsListSkeleton />;

  if (isError) return <ErrorBox />;

  return (
    <>
      <Tooltip title="I Refresh News" followCursor arrow>
        <RefreshIcon
          onClick={() => {
            remove();
            setRefresh(true);
          }}
        />
      </Tooltip>
      {data.map(({ data }) => (
        <NewsCard news={data} key={data.id} />
      ))}
    </>
  );
};
export default Home;
