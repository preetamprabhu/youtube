import React from "react";
import Grid from '@mui/material/Grid'
import VideoCard from "./VideoCard.jsx";
import ChannelCard from "./ChannelCard.jsx";
import Loader from "./Loader";

const SideVideos = ({ videos }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Grid container rowSpacing={1} >
      {videos.map((item, idx) => (
        <Grid item xs={12} key={idx}>
          {(item.id.videoId || item.id.playlistId) && (
            <VideoCard video={item} />
          )}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default SideVideos;
