import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CommentIcon from '@mui/icons-material/Comment';
import { Box, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { INewsCard } from '../../types';
import { formatDate } from '../../utils';
import * as S from './news-card.styles';
import typographySizes from '../../theme/typography';

interface NewsCardProps {
  news: INewsCard;
  page?: boolean;
}
const NewsCard: React.FC<NewsCardProps> = ({ news, page = false }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down(360));
  const navigate = useNavigate();
  const date = formatDate(news.time * 1000);
  const getNewsById = (id: number) => navigate(`/${id}`);

  return (
    <S.Content onClick={() => !page && getNewsById(news.id)} cursor={page ? 'cursor' : ''}>
      <S.CardBox>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}>
          <S.Title>
            {page ? (
              <S.StyledLink to={news.url} target="_blank">
                {news.title}
              </S.StyledLink>
            ) : (
              news.title
            )}
          </S.Title>
          <Box sx={{ display: 'flex', gap: '15px' }}>
            <S.Subtitles>{news.score} points</S.Subtitles>
            <S.Subtitles>by {news.by}</S.Subtitles>
            <S.Subtitles sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              <CalendarMonthIcon sx={{ fontSize: '14px' }} /> {date}
            </S.Subtitles>
            <S.Subtitles sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {news.descendants} <CommentIcon sx={{ fontSize: '14px', mt: '1px' }} />
            </S.Subtitles>
          </Box>
        </Box>
        {page && (
          <S.BackButton to={'/'}>
            {sm ? (
              <Tooltip arrow title="Back">
                <ArrowBackIosNewIcon sx={{ ...typographySizes.title, fontWeight: 600, fontSize: '30px' }} />
              </Tooltip>
            ) : (
              <>
                <ArrowBackIosNewIcon sx={{ ...typographySizes.title }} /> Back
              </>
            )}
          </S.BackButton>
        )}
      </S.CardBox>
    </S.Content>
  );
};

export default NewsCard;
