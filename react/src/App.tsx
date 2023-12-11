import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'

const RouterView = () => <h1>RouterView</h1>

function App() {
  return (
    <>
    <BrowserRouter>
      <header>
        <NavBar />
      </header>

      <div className="container">
        <progress className="progress is-small is-primary" max="100" v-if="session.loading">15%</progress>
        <RouterView />
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
