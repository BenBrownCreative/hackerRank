const PI = Math.PI;
const dimensions = function (r) {
  const area = PI * (r * r);
  const perimeter = 2 * PI * r;

  return area, perimeter;
};

console.log('dimensions', dimensions(2.6));
