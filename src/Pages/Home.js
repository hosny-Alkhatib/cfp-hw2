import React, { useState } from 'react';
// Artist Card Component
import ArtistCard from '../components/ArtistCard';
// Data
import Data from '../artists';
const Home = () => {
  const [filterdArtist, setFilterdArtists] = useState(Data);
  const [query, setQuery] = useState('');
  const handleValueChange = (e) => {
    setQuery(e.target.value);
    const filterdArtists = Data.filter((artist) => {
      const Name = artist.artistName
        .toLowerCase()
        .includes(query.toLowerCase());
      const Track = artist.trackName
        .toLowerCase()
        .includes(query.toLowerCase());
      return Name ? Name : Track;
    });
    setFilterdArtists(filterdArtists);
    console.log(filterdArtist);
  };
  return (
    <div>
      <form className='search__form'>
        <input
          placeholder='Search Bar'
          type='text'
          className='search__btn'
          onChange={handleValueChange}
          id='search_bar'
          aria-label='Search'
        />
      </form>
      <div className='artist'>
        {filterdArtist.map((artist) => (
          <div key={artist.artistId}>
            <ArtistCard artist={artist} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
