function AreaOfTriangle(){

const baseValue = parseInt(document.getElementById("base").value);
const heightValue = parseInt(document.getElementById("height").value);

// calculate the area
const areaValue = (baseValue * heightValue) / 2;
  document.getElementById("display").innerHTML = areaValue;
// console.log(
//     `The area of the triangle is ${areaValue}`
//   );
}

