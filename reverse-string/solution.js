function solution(str){
let length=str.length
  for(i=0;i<length;i++)
  {
  str=`${str}${str[length-(i+1)]}`
  }
  return(str.slice(length,str.length))
}