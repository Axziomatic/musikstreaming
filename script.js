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
  const listContainer = document.createElement("div");
  listContainer.innerHTML = "";

  playlists.forEach((pl) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${pl.name}</h3>
      <p><strong>Genre:</strong> ${pl.genre}</p>
      <p><strong>Artist:</strong> ${pl.artist}</p>
      <p><strong>Låtar:</strong> ${pl.songs.join(", ")}</p>
      <hr />
    `;
    listContainer.appendChild(div);
  });
  displaySection.innerHTML = "<h2> Mina Spellistor</h2>";
  displaySection.appendChild(listContainer);
}
