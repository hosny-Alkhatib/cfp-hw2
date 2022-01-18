import React, { useState } from 'react';
// Artist Card Component
import ArtistCard from '../components/ArtistCard';
// Data
import Data from '../artists';
const Home = () => {
  console.log(Data);
  const [filterdArtist, setFilterdArtists] = useState(Data);
  const [query, setQuery] = useState('');
  const handleValueChange = (e) => {
    setQuery(e.target.value);
    const filterdArtists = Data.filter((artist) => {
      const Name = artist.artistName
        .toString()
        .toLowerCase()
        .includes(query.toLowerCase());
      const Track = artist.trackName
        .toString()
        .toLowerCase()
        .includes(query.toLowerCase());
      return Name ? Name : Track ? Track : null;
    });
    setFilterdArtists(filterdArtists);
  };
  return (
    <div>
      <form className='search__form'>
        <input
          placeholder='Search Bar'
          type='search'
          className='search__btn'
          onChange={handleValueChange}
          value={query}
          id='search_bar'
          aria-label='Search'
        />
      </form>
      <div className='artist'>
        {filterdArtist &&
          filterdArtist.map((artist) => (
            <div key={artist.artistId}>
              <ArtistCard artist={artist} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
