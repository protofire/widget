/* eslint-disable react/no-array-index-key */
import { KeyboardArrowRight as KeyboardArrowRightIcon } from '@mui/icons-material';
import { Box, BoxProps, IconButton, Skeleton } from '@mui/material';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCurrentRoute, useSwapRoutes } from '../../hooks';
import { routes } from '../../utils/routes';
import { CardContainer, CardTitle } from '../Card';
import { ProgressToNextUpdate } from '../ProgressToNextUpdate';
import { SwapRouteCard } from '../SwapRouteCard';
import { Stack } from './SwapRoutes.style';

export const SwapRoutes: React.FC<BoxProps> = ({ mb }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentRoute] = useCurrentRoute();
  const {
    routes: swapRoutes,
    isLoading,
    isFetching,
    dataUpdatedAt,
    refetchTime,
  } = useSwapRoutes();

  const handleCardClick = useCallback(() => {
    navigate(routes.swapRoutes);
  }, [navigate]);

  if (!swapRoutes?.length && !isLoading && !isFetching) {
    return null;
  }

  return (
    <CardContainer mb={mb}>
      <CardTitle>{t('swap.routes')}</CardTitle>
      <ProgressToNextUpdate
        updatedAt={dataUpdatedAt}
        timeToUpdate={refetchTime}
        isLoading={isLoading || isFetching}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
        }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Stack direction="row" py={2} pl={2} pr={1}>
          {isLoading || isFetching || !currentRoute ? (
            <Skeleton
              variant="rectangular"
              width="100%"
              height={193}
              sx={{ borderRadius: 1, minWidth: '100%' }}
            />
          ) : (
            <SwapRouteCard
              key={currentRoute.id}
              minWidth="100%"
              route={currentRoute}
              active
              dense
            />
          )}
        </Stack>
        <Box py={1} pr={1}>
          <IconButton
            onClick={handleCardClick}
            size="medium"
            aria-label="swap-routes"
            color="inherit"
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
      </Box>
    </CardContainer>
  );
};