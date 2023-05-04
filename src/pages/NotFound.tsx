import { Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Root = styled(Box)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

const Content = styled(Box)`
  text-align: center;
`;

const Title = styled(Typography)`
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.palette.primary.main};
`;

const Description = styled(Typography)`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.palette.text.primary};
`;

const GoBackButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <Root>
      <Content>
        <Title variant="h1">404</Title>
        <Description variant="h5">The page you are looking for doesn&apos;t exist.</Description>
        <GoBackButton variant="contained" onClick={() => navigate('/')}>
          Go back home
        </GoBackButton>
      </Content>
    </Root>
  );
};

export default Page404;
