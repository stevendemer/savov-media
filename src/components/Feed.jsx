import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((err) => console.log(err));
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
          className="copyright"
        >
          Copyright 2022 Savov Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#f31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
