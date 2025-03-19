
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from 'react'



const HomeWrapper = lazy(() => import('./screens/Home.jsx'))

function App() {


  return (
    <>

  <Routes>
    <Route index element={
<Suspense>
  <HomeWrapper  />
</Suspense>

    }   />
  </Routes>

    </>
  )
}

export default App
