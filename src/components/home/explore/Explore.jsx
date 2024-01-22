import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Explore.css';

const Trend = ({ title, subtitle, posts }) => (
  <div className="trend">
    <div className="trend-content">
      <Button className="trend-title">
        <Typography variant="h5">{title}</Typography>
      </Button>
      <Button className="trend-subtitle">
        <Typography variant="body2">{subtitle}</Typography>
      </Button>
      <Button className="trend-posts">
        <Typography variant="h5">{posts}</Typography>
      </Button>
    </div>
    <Button className="more-icon">
      <MoreHorizIcon />
    </Button>
  </div>
);

const Explore = () => {
  const [exploreInput, setExploreInput] = useState("");

  useEffect(() => {
    console.log("Nilai input pencarian berubah:", exploreInput);
  }, [exploreInput]);

  return (
    <div className="explore">
      <div className="explore-input">
        <div className="input-container">
          <input
            type="text"
            placeholder="Search"
            className="input"
            value={exploreInput}
            onChange={(e) => setExploreInput(e.target.value)}
          />
        </div>
      </div>
      <Typography variant="h4" className="trends-title">Trends For You</Typography>

      <div className="search-result">
        {/* Contoh penggunaan state untuk menampilkan hasil pencarian */}
        <Typography variant="body2" className="search-result-text">{exploreInput && `Hasil pencarian untuk: ${exploreInput}`}</Typography>
      </div>

      <Trend title="Trending in Indonesia" subtitle="One Piece" posts="220k Posts" />
      <Trend title="Trending in Indonesia" subtitle="Kedokteran" posts="11.4K posts" />
      <Trend title="Trending in Indonesia" subtitle="Knock Knock" posts="76.1K posts" />
      <Trend title="Trending in Indonesia" subtitle="Bu Sri" posts="2,124 posts" />
      <Trend title="Trending in Indonesia" subtitle="#ColdplayJakarta" posts="2,411 posts" />
    </div>
  );
};

export default Explore;