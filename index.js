function iterativeLog(array){
 array.forEach(element => {
   console.log(`${array.indexOf(element)}: ${element}`)
 })
}

function iterate(callback){
  const array = ['dog', 'cat', 'bird', 'horse']
  array.forEach(callback)
  return array
}

function doToArray(array, callback){
  array.forEach(callback)
  return array
}
