import React, { useEffect, useState } from 'react';
import { Tooltip } from '@mui/material';
import { RefreshIcon } from './refresh.styled';

type RefreshProps = {
  refetch: () => void
  remove: () => void
  title: string
};

const Refresh: React.FC<RefreshProps> = ({ refetch, remove, title }) => {
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    refresh && refetch();
    setRefresh(false);
  }, [refresh]);
  return (
    <Tooltip title={title} followCursor arrow>
      <RefreshIcon
        onClick={() => {
          remove();
          setRefresh(true);
        }}
      />
    </Tooltip>
  );
};
export default Refresh;
