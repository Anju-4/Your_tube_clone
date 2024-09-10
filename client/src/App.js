import './App.css';
import React,{useEffect, useState} from "react"
import Navbar from './Component/Navbar/Navbar';
import Allroutes from '../src/Allroutes'
import { BrowserRouter as Router } from 'react-router-dom';
import Drawslidebar from './Component/Leftsidebar/Drawslidebar';
import Createditchanel from './Pages/Channel/Createditchanel';
import Videoupload from './Pages/Videoupload/Videoupload';
import { useDispatch } from 'react-redux';
import { fetchallchannel } from './action/channeluser';
import { getallvideo } from './action/video';
import { getallcomment } from './action/comment';
import { getallhistory } from './action/history';
import { getalllikedvideo } from './action/likedvideo';
import { getallwatchlater } from './action/watchlater';

function App() {
  const [togglesidebar,settogglesidebar]=useState({
    display:"none"
  });
  
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchallchannel())
    dispatch(getallvideo())
    dispatch(getallcomment())
    dispatch(getallhistory())
    dispatch(getalllikedvideo())
    dispatch(getallwatchlater())

  },[dispatch])


  const toggledrawer=()=>{
    if(togglesidebar.display==="none"){
      settogglesidebar({
        display:"flex",
      });
    }else{
      settogglesidebar({
        display:"none",
      });
    }
  }
  const [editchanelbtn,seteditchanelbtn]=useState(false);
  const [videouploadpage,setvideouploadpage]=useState(false);
  return (
    <Router>
      {
        videouploadpage && <Videoupload setvideouploadpage={setvideouploadpage}/>
      }
      {editchanelbtn && (
        <Createditchanel seteditchanelbtn={seteditchanelbtn}/>
      )}
         <Navbar seteditchanelbtn={seteditchanelbtn} toggledrawer={toggledrawer}/>
         <Drawslidebar toggledrawer={toggledrawer} togglesidebar={togglesidebar}/>
   <Allroutes seteditchanelbtn={seteditchanelbtn} setvideouploadpage={setvideouploadpage}/>
    </Router>
  );
}

export default App;
