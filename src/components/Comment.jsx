import PropTypes from 'prop-types'
import { deleteReview } from '../api/deleteReview'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'

export const Comment = ({ item, userData, setDeleteRes, setUpdateID }) => {
  return (
    <Card
      sx={{ width: '60%', margin: 'auto', marginTop: '2vh' }}
      variant='elevation'
    >
      <Typography variant='h4' textAlign={'center'}>
        {item.title}
      </Typography>
      <CardContent>
        <Typography variant='p'>{item.content}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteReview(item.id, userData, setDeleteRes)}>
          DELETE
        </Button>

        {userData && (
          <Button onClick={() => setUpdateID(item.id)}>UPDATE </Button>
        )}
      </CardActions>
    </Card>
  )
}

Comment.propTypes = {
  item: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired,
  setDeleteRes: PropTypes.func.isRequired,
  setUpdateID: PropTypes.func.isRequired,
}
