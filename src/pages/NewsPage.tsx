import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { fetchComments, fetchNewsById } from '../api';
import Comments from '../components/Comments/comments';
import ErrorBox from '../components/Error/error';
import Loader from '../components/Loader/loader';
import NewsCard from '../components/NewsCard/news-card';

const NewsPage = () => {
  const { pathname } = useLocation();
  const id = Number(pathname.slice(1));
  const { data, isLoading, isError } = useQuery(['singleNews', id], () => fetchNewsById(id), {
    keepPreviousData: true,
  });
  const { data: comments } = useQuery(['comments', id], () => fetchComments(id), {
    keepPreviousData: true,
  });

  if (isLoading) return <Loader />

  if (isError) return <ErrorBox />

  return (
    <div>
      <NewsCard news={data} page />
      {comments?.map(({ data }) =>
        <Comments comment={data} key={data.id} />
      )}
    </div>
  );
};
export default NewsPage;
