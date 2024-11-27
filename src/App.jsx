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
function App() {

  return (
    <>
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

    </>
  )
}

export default App
