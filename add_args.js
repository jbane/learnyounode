//console.log(process.argv);

var i, sum = 0;
for (i = 2; i < process.argv.length; i++) {
  var cur = Number(process.argv[i]);
  //console.log(cur);
  sum += cur;
}
console.log(sum);
