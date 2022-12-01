export function roll(nsides = 6, ndice = 2, nrolls = 1) {
  var object ={
    sides: nsides,
    dice: ndice,
    rolls: nrolls,
    results: []
  }

  for (let i = 0; i < nrolls; i++) {
    var num = 0
    for (let j = 0; j < ndice; j++){
      num += (Math.floor(Math.random() * nsides) + 1)
    }
    object.results.push(num);
  }

  return JSON.stringify(object);
}

