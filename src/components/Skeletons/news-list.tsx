import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export const NewsListSkeleton = () => {
  const skeletonItems = Array.from({ length: 13 }).map((_, index) => (
    <Skeleton key={index} variant="rounded" height={60} />
  ));

  return (
    <Stack spacing={2} sx={{ maxWidth: '1024px', margin: 'auto' }}>
      {skeletonItems}
    </Stack>
  );
};

