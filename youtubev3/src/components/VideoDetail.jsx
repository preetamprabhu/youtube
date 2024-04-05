import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SideVideos from "./SideVideos.jsx";
import FetchFromAPI from "../utils/FetchFromAPI";

function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState('');
  const [videos, setVideos] = useState('');
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    const fetchVideoDetails = async () => {
      try {
        await FetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(
          (data) => {
            setVideoDetail(data.items[0]);
            console.log(videoDetail);
          }
        );

        await FetchFromAPI(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        ).then((data) => setVideos(data.items));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(true);
    };

    fetchVideoDetails();
  }, [id]);

  return (
    loading && (
      <Stack
        padding={2}
        direction={{ xs: "column", sm: "row" }}
        display="flex"
        margin="auto"
        width="fit-content"
      >
        <Box sx={{ width: { sm: "70%" } }}>
          <div style={{ aspectRatio: "16/9" }}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <Typography color="white" variant="h5" fontWeight="bold" p={2}>
            {videoDetail.snippet.title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            py={1}
            px={2}
            sx={{ color: "white" }}
          >
            <Link to={`/channel/${videoDetail.snippet.channelId}`}>
              <Typography variant={"subtitle1"} color="white">
                {videoDetail.snippet.channelTitle}
                <CheckCircleIcon
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(videoDetail.statistics.viewCount).toLocaleString()}{" "}
                views
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(videoDetail.statistics.likeCount).toLocaleString()}{" "}
                likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{ width: { sm: "30%" } }}
          px={1}
          justifyContent="center"
          alignItems="center"
        >
          <SideVideos videos={videos} direction="column" />
        </Box>
      </Stack>
    )
  );
}

export default VideoDetail;
