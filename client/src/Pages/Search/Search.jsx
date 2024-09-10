import React from 'react'
import { useParams } from 'react-router-dom'
import Showgridvideo from '../../Component/Showvideogrid/Showgridvideo';
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar';
import vid from "../../Component/Video/vid.mp4"
import { useSelector } from 'react-redux';


const Search = () => {
    const {searchquery}=useParams();
    const vids=useSelector(s=>s?.videoreducer)?.data?.filter(q=>q?.videotitle.toUpperCase().includes(searchquery?.toUpperCase()))
    // const vids =[
    //     {
    //         _id:1,
    //         video_src:vid,
    //         chanel:"sfgfhjhjkiuoty",
    //         title:"video 1",
    //         uploader:"abc",
    //         description:"description of video 1"
    //     },
    //     {
    //         _id:1,
    //         video_src:vid,
    //         chanel:"sfgfhjhjkiuoty",
    //         title:"video 1",
    //         uploader:"abc",
    //         description:"description of video 1"
    //     },
    //     {
    //         _id:2,
    //         video_src:vid,
    //         chanel:"sfgfhjhjkiuoty",
    //         title:"video 2",
    //         uploader:"abc",
    //         description:"description of video 2"
    //     },
    //     {
    //         _id:3,
    //         video_src:vid,
    //         chanel:"sfgfhjhjkiuoty",
    //         title:"video 3",
    //         uploader:"abc",
    //         description:"description of video 3"
    //     },
    //     {
    //         _id:4,
    //         video_src:vid,
    //         chanel:"sfgfhjhjkiuoty",
    //         title:"video 4",
    //         uploader:"abc",
    //         description:"description of video 4"
    //     },
    // ]
  return (
    <div className='container_Pages_App'>
    <Leftsidebar/>
    <div className="container2_Pages_App">
        <Showgridvideo vid={vids}/>
    </div>
</div>
  )
}

export default Search