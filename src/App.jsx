import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <>
    <Helmet>
  <title>Husniye Erparun's Personal Website</title>
  <meta 
    name="description" 
    content="Welcome to Husniye Erparun's personal website. Explore my projects, skills, and experiences in web development, programming, and technology." 
  />
  <meta 
    name="keywords" 
    content="Husniye Erparun, web development, programming, personal website, portfolio, technology" 
  />
  <link 
    rel="canonical" 
    href="https://husniyeerparundev.netlify.app/" 
  />
</Helmet>


      <div className='mainContent'>
        <Navbar />
        <section style={{ scrollBehavior: "smooth" }}>
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default App;
