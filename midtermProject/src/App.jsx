import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import DetailPage from './pages/DetailPage/DetailPage'

function App() {

  return (
    <Routes>
      <Route path='/' element = {<Homepage/>} />
      <Route path='/category/:category' element = {<CategoryPage/>}/>
      <Route path='/detail/:id' element = {<DetailPage/>}/>
    </Routes>
  )
}

export default App
