import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from './layout/Layout'
import RoutesContainer from './routes/Routes';
import { Context } from './context/Context';


function App() {
  const { setShow } = useContext(Context)
  const navgation = useNavigate()

  useEffect(() => {
    setShow(false)
  }, [navgation, setShow])
 
  return (
    <div className="Main">
      <Layout><RoutesContainer /></Layout>
    </div>
  )
}

export default App
