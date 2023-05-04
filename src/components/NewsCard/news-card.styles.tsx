import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import { Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import typographySizes from "../../theme/typography";

export const Content = styled(Box)<{ cursor?: string }>(({ cursor }) => ({
  width: '90%',
  maxWidth: '1024px',
  margin: 'auto',
  marginBottom: '5px',
  padding: '10px',
  borderRadius: '10px',
  cursor: !cursor ? 'pointer' : 'auto',
  transition: 'ease-in-out .3s',
  '&:hover': {
    boxShadow: !cursor ? '0 1px 12px #878d96d6' : ''
  }
}));

export const CardBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}))

export const Title = styled(Typography)(({ }) => ({
  ...typographySizes.title
}))

export const Subtitles = styled(Typography)(({ }) => ({
  ...typographySizes.body,
  color: '#686c6d'
}))

export const StyledLink = styled(Link)(({ }) => ({
  ...typographySizes.title,
  cursor: 'pointer',
  color: '#0f68db',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}))

export const BackButton = styled(Link)(({ }) => ({
  ...typographySizes.title,
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: '#000000',
}))

export const RefreshIcon = styled(RefreshRoundedIcon)(({ }) => ({
  position: 'absolute',
  fontSize: '20px',
  color: '#0f68db',
  left: 5,
  top: 5,
  cursor: 'pointer',
  transition: 'ease-in-out .3s',
  '&:hover': {
    fontSize: '50px',
  },
}))