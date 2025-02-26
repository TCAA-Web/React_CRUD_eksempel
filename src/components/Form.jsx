import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import PropTypes from 'prop-types'

// Form komponent der kan oprette en form ud fra et array med label, name og ID
// FormAction er den funktion vi vil køre når vi submitter formen
// Children er til at vi kan indsætte andre form elementer, ind i formen, som ikke er et input felt
export const Form = ({ formTitle, formArray, formAction, children }) => {
  return (
    <Paper
      elevation={3}
      sx={{ width: '70%', margin: 'auto', marginTop: '5vh' }}
    >
      <Typography
        variant='h3'
        textAlign={'center'}
        sx={{ marginBottom: '5vh' }}
      >
        {formTitle}
      </Typography>
      <Container height={'50vh'}>
        <form
          onSubmit={(event) => formAction(event)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '16px',
            gap: '16px',
            height: '40vh',
          }}
        >
          {formArray?.map((item) => {
            return (
              <TextField
                key={item.id}
                id={item.id}
                label={item.label}
                variant='outlined'
                name={item.name}
              />
            )
          })}
          {children}
          <Button type='submit'>Send</Button>
        </form>
      </Container>
    </Paper>
  )
}
Form.propTypes = {
  formTitle: PropTypes.string.isRequired,
  formArray: PropTypes.array.isRequired,
  formAction: PropTypes.func.isRequired,
  children: PropTypes.children,
}
