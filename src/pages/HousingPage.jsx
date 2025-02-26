import { Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useEffect, useState } from 'react'
import { HousingCard } from '../components/HousingCard'
import { useParams } from 'react-router'
import { findValuesInObject } from '../helpers/findValuesInObject'

export const HousingPage = () => {
  const [houseData, setHouseData] = useState()

  // Keyword som kommer fra URL´en (query param)
  const { keyword } = useParams()

  useEffect(() => {
    console.log('key', keyword)
    fetch('https://api.mediehuset.net/homelands/homes')
      .then((res) => res.json())
      .then((data) =>
        // Hvis keyword ikke er null, en tom string eller undefined
        keyword !== null &&
        keyword !== '' &&
        keyword !== 'undefined' &&
        keyword !== undefined
          ? // Så set House data til at være det filterede array
            setHouseData({
              items: data.items.filter(
                // Filter funktion der kigger på alle key: value pairs og tjekker om "keyword" er inkluderet
                (item) => findValuesInObject(item, keyword)
                // Simple sortering der kun søger på "address"
                // item.address.toLowerCase().includes(keyword.toLowerCase())
              ),
            })
          : // Ellers så set den til at være dataen der kommer retur
            setHouseData(data)
      )
      .catch((err) => console.log('error: ', err))
  }, [keyword])

  return (
    <Container>
      <Typography textAlign={'center'} margin={'2vh'} variant='h3'>
        Housing Page
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {houseData?.items?.map((item) => {
          return (
            <Grid size={4} key={item.id}>
              <HousingCard item={item} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
