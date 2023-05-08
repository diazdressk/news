import { styled } from "@mui/material";
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

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