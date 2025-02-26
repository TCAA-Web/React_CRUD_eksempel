import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router'
import { SearchField } from './SearchField'

export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: 'transparent' }} position='static'>
        <Toolbar>
          <Grid container rowSpacing={1} columnSpacing={{ md: 2 }}>
            <Grid container size={8}>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                <NavLink to='/'>Home</NavLink>
              </Typography>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                <NavLink to='/login'>Login</NavLink>
              </Typography>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                <NavLink to='/reviews'>Reviews</NavLink>
              </Typography>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                <NavLink to='/housing'>Housing</NavLink>
              </Typography>
            </Grid>
            <Grid container size={4}>
              <Grid size='auto'>
                <SearchField />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
