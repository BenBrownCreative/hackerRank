const countObjects = (arr) => {
  let matches = 0;
  arr.forEach((obj) => {
    if (obj.x == obj.y) matches++;
  });
  console.log(matches);
};

console.log(
  'countObjects',
  countObjects([
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 },
  ])
);
