const playlists = [];

const form = document.getElementById("new-playlist-form");
const displaySection = document.getElementById("playlist-display");

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
  displaySection.innerHTML = "<h2>My Playlists</h2>";

  const groupedByGenre = {};

  playlists.forEach((pl) => {
    if (!groupedByGenre[pl.genre]) {
      groupedByGenre[pl.genre] = [];
    }
    groupedByGenre[pl.genre].push(pl);
  });

  for (const genre in groupedByGenre) {
    const genreSection = document.createElement("div");
    genreSection.innerHTML = `<h3>Genre: ${genre}</h3>`;

    groupedByGenre[genre].forEach((pl) => {
      const div = document.createElement("div");
      div.innerHTML = `<p><strong>${pl.name}</strong> – ${pl.artist}</p>
        <p><em>Songs:</em> ${pl.songs.join(", ")}</p>
        <hr />
      `;
      genreSection.appendChild(div);
    });

    displaySection.appendChild(genreSection);
  }
}
