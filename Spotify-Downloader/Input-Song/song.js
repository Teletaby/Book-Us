const songdownload = async (download) => {
    const url = 'https://spotify-downloader9.p.rapidapi.com/downloadSong?songId=';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '50b5f3b226msh0966c3a7bd972cap10e911jsn3c815d7d3627',
            'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url + download, options);
        const result = await response.json();
        console.log(result);

        const songData = result.data;

        // Validate that the song data is in the expected format
        if (songData && songData.artist && songData.title && songData.album && songData.downloadLink) {
            const redirectUrl = `../about/about.html?cover=${encodeURIComponent(songData.cover)}&artist=${encodeURIComponent(songData.artist)}&title=${encodeURIComponent(songData.title)}&album=${encodeURIComponent(songData.album)}&link=${encodeURIComponent(songData.downloadLink)}`;
            window.location.href = redirectUrl;
        } else {
            console.log('Unexpected response format:', result);
            alert("Invalid song data received.");
        }
    } catch (error) {
        console.error(error);
        alert("An error occurred while fetching the song data.");
    } finally {
        // Hide loader after operation is complete
        document.getElementById('loader').style.display = 'none';
        document.getElementById('loading-text').style.display = 'none';
    }
};

document.getElementById('enterbtn').addEventListener("click", async (e) => {
    e.preventDefault();

    // Show loading animation
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('loading-text').style.display = 'block';

    // Get song ID from input field
    const songId = document.getElementById('songIdInput').value.trim();

    if (songId) {
        await songdownload(songId);
    } else {
        alert("INVALID SONG ID");
        document.getElementById('loader').style.display = 'none';
        document.getElementById('loading-text').style.display = 'none';
    }
});
