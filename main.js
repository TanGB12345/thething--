const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const content = [
  { title: '1.Dil.sodium hydroxide soln.', description: 'This is an example description 1.' },
  { title: '2.Dil.hydrochloric Acid soln.', description: 'This is an example description 2.' },
  { title: '3.Absolute Alcohol/spirit', description: 'This is an example description 3.' },
  { title: '4.Dil.sulpheric Acid Soln.', description: 'This is an example description 3.' },
  { title: '5.Nesslers Reagent', description: 'This is an example description 3.' },
  { title: '6.Phenolphthalein', description: 'This is an example description 3.' },
  { title: '7.Dil.Acetic Acid/Ethnoic Acid', description: 'This is an example description 3.' },
  { title: '8.Iodine Solution', description: 'This is an example description 3.' },
  { title: '9.Ferric Chloride Soln.', description: 'This is an example description 3.' },
  { title: '10.Phenol Red', description: 'This is an example description 3.' },
  { title: '11.Startch Poweder', description: 'This is an example description 3.' },
  { title: '12.Cpper Sulphate', description: 'This is an example description 3.' },
  { title: '13.Barium Chloride', description: 'This is an example description 3.' },
  { title: '14.Barium Hydroxide', description: 'This is an example description 3.' },
  { title: '15.Calcium Hydrochlorite/Bleaching Powder', description: 'This is an example description 3.' },
  { title: '16.Pottasium Dichromate', description: 'This is an example description 3.' },
  { title: '17.Pottasium Sulphate', description: 'This is an example description 3.' },
  { title: '18.Sodium Aceatate', description: 'This is an example description 3.' },
  { title: '19.Sodium Sulphate', description: 'This is an example description 3.' },
  { title: '20.Zinc Sulphate', description: 'This is an example description 3.' },
  { title: '21.Calcium Hydroxide', description: 'This is an example description 3.' },
  { title: '22.Sodium Biocarbonate', description: 'This is an example description 3.' },
  { title: '23.Sodium Carbonate', description: 'This is an example description 3.' },
  { title: '24.Ammonium Chloride', description: 'This is an example description 3.' },
  { title: '25.Sodium Chloride', description: 'This is an example description 3.' },
  { title: '26.Calcium Carbonate', description: 'This is an example description 3.' },
  { title: '27.Sulpher', description: 'This is an example description 3.' },
  { title: '28.Magnesium Ribbon', description: 'This is an example description 3.' },
  { title: '29.Zinc Granules', description: 'This is an example description 3.' },
  { title: '30.Aluminium Foil', description: 'This is an example description 3.' },
  { title: '31.Iron Nails', description: 'This is an example description 3.' },
  { title: '32.Copper Turnings', description: 'This is an example description 3.' },
];

function displayResults(searchTerm) {
  const filteredResults = content.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredResults.length > 0) {
    searchResults.style.display = 'block';
    searchResults.innerHTML = '';
    filteredResults.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item.title;
      listItem.addEventListener('click', () => {
        showResult(item);
      });
      searchResults.appendChild(listItem);
    });
  } else {
    searchResults.style.display = 'none';
  }
}

function showResult(item) {
  searchInput.value = item.title;
  searchResults.style.display = 'none';
  console.log(item.description);
}

searchInput.addEventListener('input', () => {
  displayResults(searchInput.value);
});

document.addEventListener('click', (event) => {
  if (!searchResults.contains(event.target)) {
    searchResults.style.display = 'none';
  }
});
