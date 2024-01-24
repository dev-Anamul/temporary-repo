function generateRandomColor() {
  // Generate a random color in hexadecimal format
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export const RandomColor = () => {
  const colorArray = [];
  for (let id = 1; id <= 1000; id++) {
    const color = generateRandomColor();
    colorArray.push({id, color});
  }
  return colorArray;
};

export const colorArrayWithIDs = [
  {id: 1, color: '#071733'},
  {id: 2, color: '#331587'},
  {id: 3, color: '#ccc200'},
  {id: 4, color: '#F63FA6'},
  {id: 5, color: '#33A6FF'},
  {id: 6, color: '#A6FF33'},
  {id: 7, color: '#FF3366'},
  {id: 8, color: '#3366FF'},
  {id: 9, color: '#66FF33'},
  {id: 10, color: '#FFA633'},
  {id: 11, color: '#A633FF'},
  {id: 12, color: '#33FFA6'},
  {id: 13, color: '#FF33FF'},
  {id: 14, color: '#33FF33'},
  {id: 15, color: '#FF6666'},
  {id: 16, color: '#6666FF'},
  {id: 17, color: '#66FF66'},
  {id: 18, color: '#FF9966'},
  {id: 19, color: '#9966FF'},
  {id: 20, color: '#66FF99'},
  {id: 21, color: '#FF3399'},
  {id: 22, color: '#3399FF'},
  {id: 23, color: '#99FF33'},
  {id: 24, color: '#FFCC33'},
  {id: 25, color: '#CC33FF'},
  {id: 26, color: '#33FFCC'},
  {id: 27, color: '#FF00FF'},
  {id: 28, color: '#00FFFF'},
  {id: 29, color: '#FFFF00'},
  {id: 30, color: '#FF6633'},
  {id: 31, color: '#6633FF'},
  {id: 32, color: '#33FF66'},
  {id: 33, color: '#FF0033'},
  {id: 34, color: '#0033FF'},
  {id: 35, color: '#FF3300'},
  {id: 36, color: '#FF9933'},
  {id: 37, color: '#9933FF'},
  {id: 38, color: '#33FF99'},
  {id: 39, color: '#FF9900'},
  {id: 40, color: '#9900FF'},
  {id: 41, color: '#00FF99'},
  {id: 42, color: '#FF6666'},
  {id: 43, color: '#6666FF'},
  {id: 44, color: '#66FF66'},
  {id: 45, color: '#FF9966'},
  {id: 46, color: '#9966FF'},
  {id: 47, color: '#66FF99'},
  {id: 48, color: '#FF3399'},
  {id: 49, color: '#3399FF'},
  {id: 50, color: '#99FF33'},
];
