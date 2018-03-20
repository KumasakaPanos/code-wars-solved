function isNice(arr){
  let ans=false;
  let n=0
  
  for(let i=0;i<arr.length;i++)
  {
    ans=false;
    for(let j=0;j<arr.length;j++)
    {
      if(arr[i]-arr[j]===1||arr[i]-arr[j]===-1)
      {
        ans=true
      }
    }
    if(ans===false)
    {i=arr.length;}
    }
  return(ans);
}