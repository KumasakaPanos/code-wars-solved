function Cuber(total,current){
if(isNaN(current))
{return(undefined)}
if(current%2===1||current%2===-1)
{
total+=current*current*current}
return total;}

function cubeOdd(arr) {
let sum;
sum=arr.reduce(Cuber,0);
if(isNaN(sum)){
sum=undefined;}
return(sum)
}