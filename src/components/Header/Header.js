import React from 'react'
import Grid from '@material-ui/core/Grid'
import Appbar from './Appbar'

const Header = (props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Appbar></Appbar>
      </Grid>
    </Grid>
  )
}

export default Header