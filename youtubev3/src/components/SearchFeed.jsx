import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import FetchFromAPI from "../utils/FetchFromAPI";

import { useParams } from "react-router-dom";

function SearchFeed() {
  //useState
  const [videos, setVideos] = useState();
  const { searchTerm } = useParams();

  // useEffect
  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <>
      <Box
        p="13px"
        sx={{
          overflowY: "auto",
          height: { xs: "100%" },
          flex: 1,
        }}
      >
        <Typography
          fontWeight="bold"
          variant="h4"
          sx={{ m: 1.5, color: "#FC1503" }}
        >
          Search results for:{" "}
          <span variant="h4" style={{ color: "#FC1503" }}>
            {searchTerm}{" "}
          </span>
          videos
        </Typography>
        <Box
          display="flex"
          flexWrap="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ ml: { sm: "125px" } }} />
          {<Videos videos={videos} />}
        </Box>
      </Box>
    </>
  );
}

export default SearchFeed;
