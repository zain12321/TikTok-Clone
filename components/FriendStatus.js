// import React, { useRef, useState } from "react";
// import VideoFooter from "./VideoFooter";


// function Video(props) {
//   const {video} = props
//     const [ playing, setPlaying ] = useState(false)
//   const videoRef = useRef(null);
  
//   const onVideoPress = () => {
//       if (playing) {
//         videoRef.current.pause();
//         setPlaying(false);
//       }
//       else {
//         videoRef.current.play();
//         setPlaying(true);

//       }
    
//   }

//   return (
//     <div className="video ">
//       <video 
//       height={300}
//       width={240} 
      
//       className="rounded-3xl absolute"
//       loop
//       onClick={onVideoPress}
//       ref={videoRef}
//       src={video}>
//       </video>
//       <VideoFooter/>

//     </div>
//   );
// }

// export default Video;