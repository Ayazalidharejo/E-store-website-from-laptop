import { Box, Skeleton } from '@mui/material'
import React from 'react'

const SkeltingDetail = () => {
  return (
 <Box className="d-flex align-items-center justify-content-between container">

 <Box>
 <Skeleton className='mx-4' variant="rectangular" width={310} height={360} />
 </Box>
 <Box>
 <Skeleton variant="text" width={210} height={50} />
 <Skeleton className='my-2' variant="rectangular" width={210} height={50} />
 <Skeleton variant="text" width={510} height={160} />
 <Skeleton className='my-2' variant="text" width={110} height={50} />
 <Skeleton variant="text" width={180} height={50} />
 </Box>
 </Box>
  )
}

export default SkeltingDetail