import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { fetchComments, fetchNewsById } from '../api';
import Comments from '../components/Comments/comments';
import ErrorBox from '../components/Error/error';
import Loader from '../components/Loader/loader';
import NewsCard from '../components/NewsCard/news-card';
import Refresh from '../components/refresh/refresh';

const NewsPage = () => {
  const { pathname } = useLocation();
  const id = Number(pathname.slice(1));
  const { data, isLoading, isError } = useQuery(['singleNews', id], () => fetchNewsById(id), {
    keepPreviousData: true,
  });
  const {
    data: comments,
    isLoading: commentsLoading,
    refetch,
    remove,
  } = useQuery([`comments-${id}`], () => fetchComments(id), {
    // keepPreviousData: true,
    enabled: false,
  });

  if (isLoading) return <Loader />;

  if (isError) return <ErrorBox />;

  return (
    <>
      <NewsCard news={data} page />
      <Refresh refetch={refetch} remove={remove} title='I refresh comments' />
      {commentsLoading ? (
        <Loader />
      ) : (
        comments?.map(({ data }) => <Comments comment={data} key={data.id} />)
      )}
    </>
  );
};
export default NewsPage;
