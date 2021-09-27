
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Footer from './components/Footer1'
import Cart from './components/Cart'
import Top from './components/Top'
import Mob from './components/Mob'
import Laptop from './components/Laptop'
import Blanket from './components/Blanket'
import Elec from './components/Electronics'
import Tv from './components/Tv'
import Watch from './components/Watches'
import Saree from './components/Sarees'
import Men1 from './components/Men'
import Pen from './components/Pen'
import Pouch from './components/Pouch'
import Cur from './components/Curten'
import Fur from './components/Furniture'
import Bot from './components/Bottle'
import Spray from './components/Spray'
import Create from './components/Create'
// import {auth} from './firebase'
// import Pay from './components/Payment'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'

function App() {
//     let dispatch =useDispatch();
// useEffect(()=>{
//   auth.onAuthStateChanged(authUser=>{
//     console.log('The User is : ',authUser);
//      if(authUser){
//        dispatch({type : 'SET_USER' , user : authUser})
//      }else{
//        dispatch({type : 'SET_USER' , user : null})

//      }
//   })
// },[])
  return (
    <div >
     <Router>
        <Switch>
          <Route exact path='/'>
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
             
          </Route>

          <Route path='/watch'>
              <Header></Header>
              <Watch></Watch>
              <Footer></Footer>
             
          </Route>
          <Route path='/spray'>
              <Header></Header>
             <Spray></Spray>
              <Footer></Footer>
             
          </Route>
          <Route path='/curten'>
              <Header></Header>
              <Cur></Cur>
              <Footer></Footer>
             
          </Route>
          <Route path='/create'>
              <Header></Header>
            <Create></Create>
              <Footer></Footer>
             
          </Route>
          <Route path='/bottle'>
              <Header></Header>
             <Bot></Bot>
              <Footer></Footer>
             
          </Route>
          <Route path='/furniture'>
              <Header></Header>
              <Fur></Fur>
              <Footer></Footer>
             
          </Route>
          <Route path='/pendrive'>
              <Header></Header>
              <Pen></Pen>
              <Footer></Footer>
             
          </Route>
          <Route path='/saree'>
              <Header></Header>
              <Saree></Saree>
              <Footer></Footer>
             
          </Route>
          <Route path='/pouch'>
              <Header></Header>
              <Pouch></Pouch>
              <Footer></Footer>
             
          </Route>
          <Route path='/men'>
              <Header></Header>
            <Men1></Men1>
              <Footer></Footer>
             
          </Route>
          <Route path='/top'>
              <Header></Header>
              <Top></Top>
              <Footer></Footer>
             
          </Route>
          <Route path='/electronics'>
              <Header></Header>
            <Elec></Elec>
              <Footer></Footer>
             
          </Route>

          <Route path='/blanket'>
              <Header></Header>
              <Blanket></Blanket>
             < Footer></Footer>
             
          </Route>
          <Route path='/television'>
              <Header></Header>
             <Tv></Tv>
             < Footer></Footer>
          
          </Route>
          <Route path='/laptop'>
              <Header></Header>
             <Laptop></Laptop>
             <Footer></Footer>
             
             
          </Route>
          
          <Route  path='/login'>
              <Header></Header>
              <Login></Login>
          </Route>

          <Route  path='/mobiles'>
              <Header></Header>
             <Mob></Mob>
             <Footer></Footer>
          </Route>
          <Route  path='/cart'>
              <Header></Header>
              <Cart></Cart>
             
          
          </Route>
          </Switch>
          </Router>
    </div>
  );
}

export default App;
