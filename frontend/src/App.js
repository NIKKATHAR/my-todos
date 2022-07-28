import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './Components/Navbar';
import {AddToDo,Login, PageNotFound, Register} from "./Pages/index"
import  AllToDos  from "./Pages/Admin/AllToDos"
import Profile from './Pages/Profile';
import Protected from './Pages/auth/Protected';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path={'/'} element={<AddToDo/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/register'} element={<Register/>}/> 
      <Route path={'/profile'} element={<Profile/>}/> 
      <Route path={'/*'} element={<PageNotFound/>}/> 

      {/* Admin Only */}
      <Route path={'/admin/alltodos'} element={<Protected element={<AllToDos/>}/>} />
      {/* Admin Only */}

    </Routes>
    </BrowserRouter>
  );
}

export default App;
