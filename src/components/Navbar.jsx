import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router'

export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: 'flex', md: 'flex' },
              gap: '16px',
            }}
          >
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <NavLink to='/'>Home</NavLink>
            </Typography>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <NavLink to='/login'>Login</NavLink>
            </Typography>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <NavLink to='/reviews'>Reviews</NavLink>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
