import { Outlet } from 'react-router-dom'
import './App.css'


import Navbar from './component/Navbar'

const App = () => {

  return (
    <>
<div className='mainContent'>

<Navbar/>
  <section style={{scrollBehavior: "smooth"}}>
        <Outlet />
  </section>


</div>
    </>
  )
}

export default App
