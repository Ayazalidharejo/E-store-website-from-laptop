import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Hero from "../images/error.svg"
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <Box className="d-flex justify-content-between container align-items-center mt-5">
    <Box>
<Typography variant='h3'>Something’s wrong here...</Typography>
<Typography className='my-3' variant='body2'>We can’t find the page you’re looking for.
Check out our help center or head back to home.</Typography>
<Box>
  <Button className='btn btn-success text- '>Help Center</Button>
  <Button  className='mx-3 btn btn-success  '> <Link className='text-decoration-none text-black' to="/">Back to home</Link>  </Button>
</Box>
    </Box>
    <Box>

      <img src={Hero} alt="" />
    </Box>
    </ Box>
  )
}

export default Errorpage