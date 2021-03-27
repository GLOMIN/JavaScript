async function loadGames() {
  const response = await fetch('/games');
  // fetch() timeouts at 300 seconds in Chrome
  const games = await response.json();
  return games;
}