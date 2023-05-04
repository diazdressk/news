import { Typography } from '@mui/material';
import React from 'react';
import typographySizes from '../../theme/typography';
import * as S from './comments.styled';

type CommentCardProps = {
  by: string;
  time: string;
  text: string;
};

const CommentCard: React.FC<CommentCardProps> = ({ by, time, text }) => {
  return (
    <>
      <S.CommentInfoBox>
        <Typography sx={{ ...typographySizes.subtitle }}>{by}</Typography>
        <Typography sx={{ ...typographySizes.body, color: '#686c6d' }}>{time}</Typography>
      </S.CommentInfoBox>
      <S.CommentText dangerouslySetInnerHTML={{ __html: text }} />
    </>
  );
};
export default CommentCard;
