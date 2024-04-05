import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard.jsx";
import ChannelCard from "./ChannelCard.jsx";
import Loader from "./Loader";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Grid container
      // direction={direction || "row"}
      // flexWrap="wrap"
      // flexDirection='column'
      // alignItems="center"
      rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
      {videos.map((item, idx) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
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
