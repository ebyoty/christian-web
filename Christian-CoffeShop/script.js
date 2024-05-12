// let a = ["1","2","3"]
let b = [
  ["abc","def","ahh"],
  ["ghi","jkl"],
  ["ghi","jkl"],
]
// const result = a.reduce((str,e1)=>{
const result = b.reduce((str,e1)=>{

  return str +" "+ e1;
})
console.log(result);
