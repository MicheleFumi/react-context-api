import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import RecipesPage from './pages/RecipesPages'
import About from './pages/About'
import Contacts from './pages/Contacts'
import DefaultLayout from './pages/DefaultLayout'
import AddPage from './pages/AddPage'
import SingleRecipePage from './pages/SingleRecipePage'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'
import PostContext from './context/PostContext'
function App() {
  const PostListApiUrl = 'http://localhost:3000/post'
  const baseApiUrl = 'http://localhost:3000/'

  return (
    <>
      <PostContext.Provider value={{ PostListApiUrl, baseApiUrl }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/about' element={<About />} />
              <Route path='/add' element={<AddPage />} />

              <Route path='/recipes'>
                <Route index element={<RecipesPage />} />
                <Route path=':id/' element={<SingleRecipePage />} />
              </Route>

              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostContext.Provider>
    </>
  )
}

export default App
