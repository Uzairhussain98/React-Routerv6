import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from 'react-router-dom';

function App() {
  return (
    <Router>

       <navbar>
        <Link to="/">Home</Link>
        <Link to="/Store">Store</Link> 
      </navbar> 


      <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="Store" element={<Store/>} >
      <Route path="/" element={<LaunchIndex/>}/>
      <Route path=":slug" element={<LaunchShoe/>}/>


</Route>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
  </Router>
    
  
  )};


    
  function NotFound(){
    return(
    <div>
      <h1>Not Found</h1>
      </div>


    )}



    function Home(){
      return(
      <div>
        <h1>Hello From Home</h1>
        </div>


      )}



    function Store(){
      return(
      <div>
        <h1>Hello From Store</h1>
        <Outlet/>
        </div>


      )}

      function LaunchIndex(){
        return(
          <ul>
            {Object.entries(shoes).map(([slug , {name ,img }]) => 
            
            <li key={slug}>
              <Link to={`/Store/${slug}`}>
              <h2>{name}</h2>
              <img src={img} alt={name}/>
              </Link>
            </li>
          
             )}





            </ul>


        )}


        function LaunchShoe(){
          const { slug } = useParams();
          const shoe = shoes[slug]

          if(!shoe){
            return(
            <h1>Not Found</h1>
             ) }

             const {name , img} = shoe;

          return(
          <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>

          </div>



          )}








  const shoes = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    }
  };


export default App;
