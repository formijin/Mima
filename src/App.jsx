import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AppRouter from './router/AppRouter';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar/>
      <AppRouter/>
      <Footer/>
    </>
  )
}
export default App