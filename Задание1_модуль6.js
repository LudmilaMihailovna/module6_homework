let massiv = [1, 2, 3, 'a', -5, -6, -7, 8, 9, 10, 0];
function showRez() {
  let chet=0;
  let nechet=0;
  let nol=0;
  for (let i=0; i<massiv.length; i++) {
    if (massiv[i] % 2 != 0 && typeof massiv[i] == 'number') {
      nechet = nechet +1;
    }
    if (massiv[i] % 2 == 0 && massiv[i] != 0 && typeof massiv[i] == 'number') {
      chet=chet+1;
    }
    if (massiv[i] == 0 && typeof massiv[i] == 'number') {
      nol=nol+1;
    }
  }
console.log(`количество нечетных элементов = ${nechet}`);
console.log(`количество четных элементов = ${chet}`);
console.log(`количество нулевых элементов = ${nol}`);
}
showRez ();