// import React from 'react'
import React from "react";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import FetchFromAPI from "../utils/FetchFromAPI";

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState();

  const { id } = useParams();

  useEffect(() => {
    const FetchResults = async () => {
      FetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
        setChannelDetail(data?.items[0])
      );

      FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
        (data) => setVideos(data?.items)
      );
    };

    FetchResults();
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box
        style={{
          height: "300px",
          backgroundColor:
            '#A16BFE',
          zIndex: 10,
        }}
      >
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>

      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
