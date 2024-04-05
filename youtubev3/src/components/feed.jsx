import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import FetchFromAPI from "../utils/FetchFromAPI";

function Feed() {
  //useState
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  // useEffect
  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        if (data && data.items) {
          setVideos(data.items);
          console.log(data.items);
        } else {
          console.error("Invalid response format:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedCategory]);

  return (
    <>
      <Stack
        sx={{
          position: "relative",
          top: "0",
          left: "0",
          flexDirection: { xs: "column", sm: "row" },
          zIndex: 10,
        }}
      >
        <Box
          className="feed"
          sx={{
            height: { xs: "0vh", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { xs: 0, md: 0 },
            position: "sticky",
            top: "12vh",
            left: "0",
          }}
        >
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: "#fff" }}
          >
            @ copyright 2024 JSM Media
          </Typography>
        </Box>
        <Stack
          className='feedvideos'
          p="13px"
          sx={{
            flexDirection: 'column',
            overflowY: "auto",
            height: 'auto',
            flex: 1,
          }}
        >
          <Typography
            fontWeight="bold"
            variant="h4"
            sx={{ m: 1.5, color: "#FC1503" }}
          >
            {selectedCategory}{" "}
            <span variant="h4" style={{ color: "#FC1503" }}>
              videos
            </span>
          </Typography>
          <Videos videos={videos}  />
        </Stack>
      </Stack>
    </>
  );
}

export default Feed;
