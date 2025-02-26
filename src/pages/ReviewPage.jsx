import { Box, Paper, Typography } from '@mui/material'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { updateReview } from '../api/updateReview'
import { Form } from '../components/Form'
import { createReview } from '../api/createReview'
import { Comment } from '../components/Comment'
import Grid from '@mui/material/Grid2'

export const ReviewPage = () => {
  // De nødvendige states til denne side
  const [reviewData, setReviewData] = useState()
  const [updateRes, setUpdateRes] = useState()
  const [deleteRes, setDeleteRes] = useState()
  const [updateID, setUpdateID] = useState()

  // Vores bruger data fra UserContext
  const { userData } = useContext(UserContext)

  // Fetch alle reviews og re-fetch når deleteRes eller updateRes ændrer sig
  useEffect(() => {
    fetch('https://api.mediehuset.net/homelands/reviews')
      .then((res) => res.json())
      .then((data) => setReviewData(data))
      .catch((err) => console.error(err))
  }, [updateRes, deleteRes])

  console.log('ReviewData', reviewData)

  // Strukturen på vores update form (array) som sendes ind i form komponentet
  const updateReviewFormArray = [
    { name: 'updateTitle', label: 'New title', id: 'updateTitle' },
    { name: 'updateContent', label: 'New content', id: 'updateContent' },
  ]

  // Strukturen på vores create form (array) som sendes ind i form komponentet
  const createReviewFormArray = [
    { name: 'title', label: 'Title', id: 'title-field' },
    { name: 'content', label: 'Content', id: 'content-field' },
  ]

  return (
    <Paper elevation={4} sx={{ marginTop: '5vh' }}>
      <Typography variant='h2' textAlign={'center'}>
        Kommentarer
      </Typography>
      <Box>
        {userData && (
          <Form
            formAction={() => createReview(event, userData, setUpdateRes)}
            formArray={createReviewFormArray}
            formTitle={'Opret ny kommentar'}
          >
            <select name='num_stars' defaultValue={1}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </Form>
        )}
        {updateID && userData && (
          <Form
            formTitle={'Update'}
            formArray={updateReviewFormArray}
            formAction={() =>
              updateReview(event, userData, updateID, setUpdateID, setUpdateRes)
            }
          />
        )}
        <Grid container direction={'column'} gap={'16px'}>
          {reviewData?.items?.map((item) => (
            <Grid key={item.id}>
              <Comment
                item={item}
                userData={userData}
                setUpdateID={setUpdateID}
                setDeleteRes={setDeleteRes}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  )
}
