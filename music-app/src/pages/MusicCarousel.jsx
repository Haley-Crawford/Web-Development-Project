import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './components.css';

const musicData = [
  { id: 1, title: "Song 1", artist: "Artist 1", image: "/images/song1.jpg" },
  { id: 2, title: "Song 2", artist: "Artist 2", image: "/images/song2.jpg" },
  { id: 3, title: "Song 3", artist: "Artist 3", image: "/images/song3.jpg" },
  { id: 4, title: "Song 4", artist: "Artist 4", image: "/images/song4.jpg" },
  { id: 5, title: "Song 5", artist: "Artist 5", image: "/images/song5.jpg" },
  { id: 1, title: "Song 6", artist: "Artist 1", image: "/images/song1.jpg" },
  { id: 2, title: "Song 7", artist: "Artist 2", image: "/images/song2.jpg" },
  { id: 3, title: "Song 8", artist: "Artist 3", image: "/images/song3.jpg" },
  { id: 4, title: "Song 9", artist: "Artist 4", image: "/images/song4.jpg" },
  { id: 5, title: "Song 10", artist: "Artist 5", image: "/images/song5.jpg" },
];

const MusicCarousel = () => {
  const settings = {
    lazyLoad: "ondemand",
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "-2%",
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="music-carousel">
      <h2 className="carousel-title">Explore New Music</h2>
      <Slider {...settings}>
        {musicData.map((song, index) => (
          <div key={song.id} className={`carousel-item ${index === 2 ? "active" : ""}`}>
            <img src={song.image} alt={song.title} className="carousel-image" />
            <div className="song-info">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MusicCarousel;
