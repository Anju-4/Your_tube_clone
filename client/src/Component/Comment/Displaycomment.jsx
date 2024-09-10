import React, { useState } from 'react'
import "./Comment.css"
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { editcomment,deletecomment } from '../../action/comment'

const Displaycomment = ({cid,commentbody,userid,commenton,usercommented}) => {
    const [edit,setedit]=useState(false)
    const [cmmntbdy,setcmmntbdy]=useState("")
    const [cmtid,setcmtid] = useState("")
    const dispatch=useDispatch()
    const currentuser=useSelector(state=>state.currentuserreducer);
  const handleedit=(ctid,ctbdy)=>{
  setedit(true)
  setcmtid(ctid)
  setcmmntbdy(ctbdy)
  }  

 const handleonsubmit=(e)=>{
  e.preventDefault();
  if(!cmmntbdy){
    alert("type your comment");
  }else{
    dispatch(editcomment({id:cmtid,commentbody:cmmntbdy}))
    setcmmntbdy("")
  }
  setedit(false)
 }
 
   const handledel=(id)=>{
    dispatch(deletecomment(id))
   }
  
  return (
    <>
    {
      edit?(
        <>
        <form className='comments_Sub_form_comments' onSubmit={handleonsubmit()}>
         <input type="text" onChange={(e)=>setcmmntbdy(e.target.value)} placeholder='Edit comments...' value={cmmntbdy} className='comment_ibox' />
         <input type="submit" value="change" className='comment_Add_btn_comments' />
        </form>
        </>
      ):(
        <p className='comment_body'>{commentbody}</p>
      )
    }
    <p className='usercommented'>{""}- {usercommented} commented {moment(commenton).fromNow()}</p>
    {
      currentuser?.result?._id=== userid && (
        <p className='EditDel_DisplayCommendt'>
          <i onClick={()=>handleedit(cid,commentbody)}>Edit</i>
          <i onClick={()=>handledel(cid)}>Delete</i>
        </p>
      )
    }
    </>
  )
}

export default Displaycomment