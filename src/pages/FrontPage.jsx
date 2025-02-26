import { Container, Paper, Typography } from '@mui/material'

export const FrontPage = () => {
  return (
    <Container>
      <Paper sx={{ height: '50vh', marginTop: '5vh' }} elevation={4}>
        <Typography textAlign={'center'} variant='h2'>
          Velkommen
        </Typography>
      </Paper>
    </Container>
  )
}
