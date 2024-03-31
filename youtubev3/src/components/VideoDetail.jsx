import React from "react"
import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import Videos from "./Videos.jsx";
// import Loader from "./Loader.jsx";
import FetchFromAPI from "../utils/FetchFromAPI";

function VideoDetail() {


  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null)
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    const fetchVideoDetails = async () => {
      try {
        await FetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
          .then((data) => {
            setVideoDetail(data.items[0])
            console.log(videoDetail)
            // var { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = data.items[0];

          })



        await FetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
          .then((data) => setVideos(data.items))
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(true);
    };

    fetchVideoDetails();
  }, [id]);

  // if (!videoDetail) return 'loadnig...'



  return (

    (loading && <Box minHeight="95vh" >
      <Stack direction={{ xs: "column", md: "row" }}  >
        <Box >
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <Box
              sx={{
                width: { xs: '100%', sm: '650px', md: '600px' },
                height: { xs: '300px', sm: '400px', md: '500px' }
              }}>
              <iframe
                width="100%"
                height='100%'
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
            <Typography color='white' variant="h5" fontWeight="bold" p={2}>
              {videoDetail.snippet.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" py={1} px={2} sx={{ color: 'white' }}>
              <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="white">
                  {videoDetail.snippet.channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail.statistics.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={{xs:0.5,md:2}} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack >
    </Box >)
  )

}

export default VideoDetail;



