import React from 'react'
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';

import c from './spinner.module.scss';

function Spinner() {
  return (
    <CircularProgress
      className={c.spinner}
      size="30px"
    />
  )
}

export default Spinner