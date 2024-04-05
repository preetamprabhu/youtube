// import React from 'react'
import React from "react";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import FetchFromAPI from "../utils/FetchFromAPI";
import { Margin } from "@mui/icons-material";

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
          backgroundColor: "#AE67FA",
        }}
      >
      </Box>
      <ChannelCard channelDetail={channelDetail} />


      <Box >
        <Box sx={{ p: { xs: "30px" } }} >
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
}

export default ChannelDetail;
