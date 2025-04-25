import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Info, Search, User, Bell } from 'lucide-react';

// Expanded Movie Data with more details
const movieData = {
  trending: [
    { 
      id: 1, 
      title: 'Inception', 
      coverImage: '/api/placeholder/300/450',
      backdropImage: '/api/placeholder/1920/1080',
      description: 'A mind-bending sci-fi thriller about dream infiltration',
      rating: 'PG-13',
      year: 2010,
      genre: 'Sci-Fi, Action'
    },
    { 
      id: 2, 
      title: 'Stranger Things', 
      coverImage: '/api/placeholder/300/450',
      backdropImage: '/api/placeholder/1920/1080',
      description: 'Supernatural mysteries in a small town',
      rating: 'TV-14',
      year: 2016,
      genre: 'Sci-Fi, Horror'
    }
  ],
  action: [
    { 
      id: 3, 
      title: 'John Wick', 
      coverImage: '/api/placeholder/300/450',
      backdropImage: '/api/placeholder/1920/1080',
      description: 'A retired hitman seeks vengeance',
      rating: 'R',
      year: 2014,
      genre: 'Action, Thriller'
    },
    { 
      id: 4, 
      title: 'Mission Impossible', 
      coverImage: '/api/placeholder/300/450',
      backdropImage: '/api/placeholder/1920/1080',
      description: 'High-stakes international espionage',
      rating: 'PG-13',
      year: 2022,
      genre: 'Action, Adventure'
    }
  ],
  comedy: [
    { 
      id: 5, 
      title: 'Brooklyn Nine-Nine', 
      coverImage: '/api/placeholder/300/450',
      backdropImage: '/api/placeholder/1920/1080',
      description: 'Hilarious adventures of a NYC police precinct',
      rating: 'TV-14',
      year: 2013,
      genre: 'Comedy, Crime'
    },
    { 
      id: 6, 
      title: 'The Office', 
      coverImage: '/api/placeholder/300/450',
      backdropImage: '/api/placeholder/1920/1080',
      description: 'Mockumentary about a paper company',
      rating: 'TV-14',
      year: 2005,
      genre: 'Comedy, Mockumentary'
    }
  ]
};

// Extended Hero Component
const HeroSection = ({ movie }) => {
  return (
    <div className="relative h-[90vh] text-white">
      {/* Backdrop Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${movie.backdropImage})`,
          filter: 'brightness(50%)'
        }}
      />
      
      {/* Content Overlay */}
      <div className="absolute bottom-1/4 left-10 max-w-2xl z-10">
        <h1 className="text-6xl font-bold mb-4">{movie.title}</h1>
        <div className="flex items-center space-x-4 mb-4">
          <span className="border border-white/50 px-2 py-1 rounded">
            {movie.rating}
          </span>
          <span>{movie.year}</span>
          <span>{movie.genre}</span>
        </div>
        <p className="text-xl mb-6 max-w-xl">{movie.description}</p>
        <div className="flex space-x-4">
          <button className="bg-white text-black px-8 py-3 rounded-md flex items-center hover:bg-gray-200">
            <Play className="mr-2" /> Play
          </button>
          <button className="bg-gray-500 text-white px-8 py-3 rounded-md flex items-center hover:bg-gray-600">
            <Info className="mr-2" /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

// Enhanced Movie Row Component
const MovieRow = ({ title, movies }) => {
  return (
    <div className="px-10 py-6">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-scroll no-scrollbar">
        {movies.map((movie) => (
          <div 
            key={movie.id} 
            className="min-w-[250px] group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-md">
              <img 
                src={movie.coverImage} 
                alt={movie.title} 
                className="w-full h-[350px] object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white font-bold">{movie.title}</h3>
                <p className="text-sm text-gray-300">{movie.genre}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Netflix Clone Component
const NetflixClone = () => {
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    // Randomly select a featured movie from trending
    const trendingMovies = movieData.trending;
    setFeaturedMovie(
      trendingMovies[Math.floor(Math.random() * trendingMovies.length)]
    );
  }, []);

  return (
    <div className="bg-neutral-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-10 py-4 z-50 bg-gradient-to-b from-black to-transparent">
        <div className="flex items-center space-x-8">
          <img 
            src="/api/placeholder/150/45" 
            alt="Netflix Logo" 
            className="h-10"
          />
          <div className="text-white space-x-6">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">TV Shows</a>
            <a href="#" className="hover:text-gray-300">Movies</a>
            <a href="#" className="hover:text-gray-300">New & Popular</a>
          </div>
        </div>
        <div className="text-white flex items-center space-x-6">
          <Search className="cursor-pointer hover:text-gray-300" />
          <Bell className="cursor-pointer hover:text-gray-300" />
          <User className="cursor-pointer hover:text-gray-300" />
        </div>
      </nav>

      {/* Hero Section */}
      {featuredMovie && <HeroSection movie={featuredMovie} />}

      {/* Movie Rows */}
      <div className="mt-10">
        <MovieRow title="Trending Now" movies={movieData.trending} />
        <MovieRow title="Action Movies" movies={movieData.action} />
        <MovieRow title="Comedy" movies={movieData.comedy} />
      </div>
    </div>
  );
};

export default NetflixClone;
