import React from 'react'

import { Box } from '@mui/material'

import ReactPlaceholder from 'react-placeholder'

import 'react-placeholder/lib/reactPlaceholder.css'

const CardLoading = ({ amountOfCoinsPerPage, dataIsInTheLoadingPhase }) =>
  <>
    {dataIsInTheLoadingPhase && (
      <>
        {
          Array.from(Array(amountOfCoinsPerPage), i => (
            <Box
              key={i}
              component="article"
              sx={{ bgcolor: 'white', borderLeft: 3, borderColor: 'tertiaryColor', borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', boxShadow: 6, cursor: 'default', width: '350px', p: 3 }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <ReactPlaceholder showLoadingAnimation={true} type="round" style={{ width: 50, height: 50 }} />
                <ReactPlaceholder showLoadingAnimation={true} type="round" style={{ width: 30, height: 30 }} />
              </Box>
              <Box>
                <ReactPlaceholder showLoadingAnimation={true} type="text" rows={2} />
              </Box>
              <Box sx={{ mt: 3 }}>
                <ReactPlaceholder showLoadingAnimation={true} type="text" rows={1} />
              </Box>
            </Box>
          ))
        }
      </>
    )}
  </>

export default CardLoading
