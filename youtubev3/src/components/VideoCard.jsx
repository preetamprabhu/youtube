// import React from 'react'

// function VideoCard() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default VideoCard


import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId, playlistId }, snippet } }) => {
  const vidOrPlay = () => {
    return vidOrPlay?videoId:playlistId;
  }
  return (


    <Card sx={{ width: { xs: '100%', sm: '250px', md: "375px",lg:'400px' }, m: '2px', boxShadow: "none", borderRadius: 0 }}>
      <Link to={vidOrPlay ? `/video/${vidOrPlay}` : `/video/cV2gBU6hKfY`} underline='none'>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '250px', md: "375px",lg:'400px' }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ textDecoration: 'none', backgroundColor: "#1E1E1E", height: '106px' }}>
        <Link to={vidOrPlay ? `/video/${vidOrPlay}` : demoVideoUrl} underline='none' >
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} underline='none'>
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
};

export default VideoCard