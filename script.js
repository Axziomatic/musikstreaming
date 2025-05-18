const playlists = [];

const form = document.getElementById("new-playlist-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("playlist-name").value.trim();
  const genre = document.getElementById("playlist-genre").value.trim();
  const artist = document.getElementById("playlist-artist").value.trim();
  const songs = document
    .getElementById("playlist-songs")
    .value.split(",")
    .map((song) => song.trim());

  const playlist = {
    name,
    genre,
    artist,
    songs,
  };

  playlists.push(playlist);
  displayPlaylists();
  form.reset();
});

function displayPlaylists() {
  const displaySection = document.getElementById("playlist-display");
  displaySection.innerHTML = "<h2>My Playlists</h2>";

  const grouped = {};

  playlists.forEach((pl) => {
    if (!grouped[pl.genre]) {
      grouped[pl.genre] = {};
    }
    if (!grouped[pl.genre][pl.artist]) {
      grouped[pl.genre][pl.artist] = [];
    }

    grouped[pl.genre][pl.artist].push(pl);
  });

  for (const genre in grouped) {
    const genreDiv = document.createElement("div");
    genreDiv.innerHTML = `<h3>Genre: ${genre}</h3>`;

    for (const artist in grouped[genre]) {
      const artistDiv = document.createElement("div");
      artistDiv.innerHTML = `<h4> Artist: ${artist}`;

      grouped[genre][artist].forEach((pl) => {
        const playlistDiv = document.createElement("div");
        playlistDiv.innerHTML = `
          <p><strong>Playlist:</strong> ${pl.name}</p>
          <p><strong>Songs:</strong> ${pl.songs.join(", ")}</p>
          <hr />
        `;
        artistDiv.appendChild(playlistDiv);
      });

      genreDiv.appendChild(artistDiv);
    }

    displaySection.appendChild(genreDiv);
  }
}
