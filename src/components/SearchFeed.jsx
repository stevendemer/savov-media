import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    setVideos(null);
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((err) => console.log(err));
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for:{" "}
        <span style={{ color: "#f31503" }}>{searchTerm} videos</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
