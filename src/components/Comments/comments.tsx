import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { fetchComments } from '../../api';
import { IComment } from '../../types';
import { hoursMinutesAgo } from '../../utils';
import CommentCard from './comment-card';
import * as S from './comments.styled';
import ErrorBox from '../Error/error';

type CommentsProps = {
  comment: IComment;
};

const Comments: React.FC<CommentsProps> = ({ comment }) => {
  const { id, text, by, kids, time } = comment;
  const timeAgo = hoursMinutesAgo(time * 1000);
  const [reply, setReply] = useState(true);
  const { data, isError, refetch, remove } = useQuery(['kid-comment', id], () =>
    fetchComments(id), {
    enabled: false,
  });

  if (isError) return <ErrorBox />

  return (
    <S.Content>
      <CommentCard by={by} text={text} time={timeAgo} />
      {kids && (
        <S.CommentReply
          onClick={() => {
            reply ? refetch() : remove();
            setReply(!reply);
          }}>
          {!reply ? <ArrowDropUpOutlinedIcon /> : <ArrowDropDownOutlinedIcon />}
          <Typography>{kids.length} replies</Typography>
        </S.CommentReply>
      )}
      {data && data?.map(({ data }) => <Comments comment={data} key={data.id} />)}
    </S.Content>
  );
};
export default Comments;
