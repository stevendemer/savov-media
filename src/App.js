import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import {
  Navbar,
  Feed,
  SearchFeed,
  VideoDetail,
  ChannelDetail,
} from "./components";

const App = () => {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
