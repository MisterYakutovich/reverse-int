module.exports = function reverse (n) {
   n=Math.abs(n)
   n=String(n)
  return Number(n.split('').filter(i=>i!==0).reverse().join(""))
}
