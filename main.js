const WORLD_TEAMS = [
  "Afghanistan", "Albania", "Algeria", /* … barcha jamoalar … */ "Zimbabwe"
];
const teamSelect = document.getElementById('teamSelect');
WORLD_TEAMS.forEach(t => {
  const opt = document.createElement('option');
  opt.value = t.toLowerCase().replace(/\s+/g, '_');
  opt.textContent = t;
  teamSelect.appendChild(opt);
});
