import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from './layout/Layout'
import { Context } from './context/Context'
import RoutesContainer from './routes/Routes'

function App() {
  const { setShow } = useContext(Context)
  const navgation = useNavigate()

  useEffect(() => {
    setShow(false)
  }, [navgation, setShow])

  return (
    <div className="Main">
      <Layout>
        <RoutesContainer />
      </Layout>
    </div>
  )
}

export default App
