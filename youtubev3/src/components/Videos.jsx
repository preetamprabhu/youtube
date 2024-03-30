import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard.jsx';
import ChannelCard from './ChannelCard.jsx';
import Loader from './Loader';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      flexWrap="wrap"
      direction="row"
      // justifyContent="start"
      justifyItems='stretch'
      alignItems="center" 
      gap={2}
      // sx={{
      //   width:{ xs: '100%', sm: '358px', md: "410px" },
      //   display: 'grid',
      //   gap: 1,
      //   gridTemplateColumns: 'repeat(3, 1fr)',
      // }}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {(item.id.videoId || item.id.playlistId) && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
