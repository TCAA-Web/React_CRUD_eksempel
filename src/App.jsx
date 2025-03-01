import { BrowserRouter, Routes, Route } from 'react-router'
import { FrontPage } from './pages/FrontPage'
import { LoginPage } from './pages/LoginPage'
import { ReviewPage } from './pages/ReviewPage'
import { UserContextProvider } from './context/UserContext'
import { Layout } from './layout/Layout'
import { HousingPage } from './pages/HousingPage'

function App() {
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' index element={<FrontPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/reviews' element={<ReviewPage />} />
              <Route path='/housing' element={<HousingPage />} />
              <Route path='/search/:keyword' element={<HousingPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  )
}

export default App
