import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <Stack spacing={2} direction="row">
     {gotoPrevPage && <Button 
        variant="contained" 
        onClick={gotoPrevPage}
        style={{backgroundColor: "#61C87B"}}
        >
            Previous
        </Button>}
      {gotoNextPage && <Button variant="contained" style={{backgroundColor: "#61C87B"}} onClick={gotoNextPage}>Next</Button>}
    </Stack>
  )
}
