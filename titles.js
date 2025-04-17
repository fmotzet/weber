const titles = [
    "Dreaming of a FOSS World...",
    "Freezys Page🙇",
    "1.e4 e5 2.Bc4 Nc6 3.Qh5 Nf6?? 4.Qxf7#",
    "°<><",
    "><>°",
    "@( * O * )@",
  ];
  function getRandomTitle() {
    const randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
  }
  
  // Set the document title when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    const randomTitle = getRandomTitle();
    document.title = randomTitle;
    
  });