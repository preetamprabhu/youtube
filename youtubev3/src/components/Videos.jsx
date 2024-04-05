import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard.jsx";
import ChannelCard from "./ChannelCard.jsx";
import Loader from "./Loader";

const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
      {videos.map((item, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          {(item.id.videoId || item.id.playlistId) && (
            <VideoCard video={item} />
          )}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;
