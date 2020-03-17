import React from 'react';
import Songs from './Songs';

export default function ({genreName, songs, currentSong, start}) {
    // console.log(genreName,'genre')
    // console.log(songs,'songs')
    // console.log(currentSong,'currentSong')
    // console.log(start,'start')
  return (
    <div>
      <h3>{ genreName } Station</h3>
      <Songs 
        songs={songs} 
        currentSong={currentSong} 
        start={start}
      />
    </div>
  );
}