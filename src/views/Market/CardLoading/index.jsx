import React from 'react';
import PropTypes from 'prop-types';

import { Box, Skeleton } from '@mui/material';

const CardLoading = ({ amountOfCoinsPerPage, dataIsInTheLoadingPhase }) => (
  <Box sx={{
    display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3,
  }}
  >
    {dataIsInTheLoadingPhase && (
      <>
        {
          Array.from(Array(amountOfCoinsPerPage), (i) => (
            <Box
              key={i}
              component="article"
              sx={{
                bgcolor: 'white', borderLeft: 3, borderColor: 'tertiaryColor', borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', boxShadow: 6, cursor: 'default', width: '350px', p: 3,
              }}
            >
              <Box sx={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2,
              }}
              >
                <Skeleton animation="wave" variant="circular" width={50} height={50} />
                <Skeleton animation="wave" variant="circular" width={30} height={30} />
              </Box>
              <Box>
                <Skeleton animation="wave" variant="text" />
                <Skeleton animation="wave" variant="text" />
              </Box>
              <Box sx={{ mt: 3 }}>
                <Skeleton animation="wave" variant="text" />
              </Box>
            </Box>
          ))
        }
      </>
    )}
  </Box>
);

CardLoading.propTypes = {
  amountOfCoinsPerPage: PropTypes.number.isRequired,
  dataIsInTheLoadingPhase: PropTypes.bool.isRequired,
};

export default CardLoading;
