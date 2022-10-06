import Layout from './layout/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Product from './pages/Product';
import items from './data/items.json'

function App() {
 
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route
            path="/store/:id"
            element={<Product products={items.products} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
