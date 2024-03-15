import React from 'react'
import Header from './components/header/Header'
import Menu, {pizzaData} from './components/menu/Menu'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="container">
      <Header>BCCA Pizza Parlor</Header>
      <Menu menu={pizzaData}/>
      <Footer />
    </div>
  )
}

export default App