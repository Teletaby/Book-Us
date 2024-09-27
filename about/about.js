
const getQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
      cover: params.get('cover'),
      artist: params.get('artist'),
      title: params.get('title'),
      album: params.get('album'),
      link: params.get('link')
  };
};

const displaySongInfo = () => {
  const songData = getQueryParams();
  if (songData) {
      document.getElementById('coverImage').src = songData.cover;
      document.getElementById('artist').innerText = `Artist: ${songData.artist}`;
      document.getElementById('title').innerText = `Title: ${songData.title}`;
      document.getElementById('album').innerText = `Album: ${songData.album}`;
      document.getElementById('link').innerHTML = `<a href="${songData.link}" target="_blank">Download Song</a>`;
  } else {
      console.log("No song data found.");
  }
};

window.onload = displaySongInfo;

