//It should perform this sum "+" operation
function sum(...value) {
  //console.log(value)
  if (value.length === 0) {
    return "sum invoked without arguments";
  } else if (value.length === 1) {
    return "sum functions needs atleast 2 arguments";
  }
  //   a = Number(a);
  //   b = Number(b);
  //   let result = Number((a + b).toFixed(1));
  // return result;

  const sumValue = [...value].reduce((a, c) => a + Number(c), 0);
  return Number(sumValue.toFixed(1));
}

module.exports = sum;
