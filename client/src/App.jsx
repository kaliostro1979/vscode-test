import React, {useEffect, useContext} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import Layout from './layout/Layout'
import {Context} from './context/Context'
import RoutesContainer from './routes/Routes'
import CustomNavBar from './components/CustomNavBar';
import MiniCard from './components/mini-cart/MiniCard';



function App() {
    const {setShow} = useContext(Context)
    const navigation = useNavigate()
    const location = useLocation().pathname.split('/')[1]

    useEffect(() => {
        setShow(false)
    }, [navigation, setShow])

    return (
        <>
            <div className={location === 'admin' ? "Main Admin": "Main"}>
                <Layout>
                    {
                        location !== 'admin' ? <>
                            <CustomNavBar/>
                            <MiniCard/>
                        </> : null
                    }
                    <RoutesContainer/>
                </Layout>
            </div>
        </>
    )
}

export default App
