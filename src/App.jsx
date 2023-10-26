import Login from './components/Login'
import './App.css'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
function App() {
 

  return (
    <UserContextProvider>
        <h1>Sanjh Rai</h1>
        <Login></Login>
        <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
