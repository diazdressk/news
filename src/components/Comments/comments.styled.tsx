import { Box, styled } from '@mui/material';
import typographySizes from '../../theme/typography';

export const Content = styled(Box)(({ }) => ({
  width: '90%',
  maxWidth: '1024px',
  margin: 'auto',
  marginBottom: '10px',
  padding: '10px',
  borderRadius: '10px',
}));

export const CommentInfoBox = styled(Box)(({ }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  mb: '5px',
}));

export const CommentReply = styled(Box)(({ }) => ({
  display: 'flex',
  pl: '20px',
  ...typographySizes.body,
  cursor: 'pointer',
  fontWeight: 600,
  color: '#0f68db',
}))

export const CommentText = styled(Box)(({ }) => ({
  paddingLeft: '20px',
  whiteSpace: 'normal',
  wordBreak: 'break-all',
}));
