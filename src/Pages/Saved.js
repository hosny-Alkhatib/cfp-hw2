import React from 'react';
import ArtistCard from '../components/ArtistCard';

const Saved = ({ allSaved }) => {
  return (
    <div style={{ alignText: 'center' }}>
      <h1 style={{ color: 'white' }}>Saved Cards</h1>
      <div className='artist'>
        {allSaved.map((artist) => (
          <div key={artist.artistId}>
            <ArtistCard artist={artist} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;
