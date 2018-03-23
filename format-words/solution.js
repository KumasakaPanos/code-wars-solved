function formatWords(words){
    let newArray=new Array;
    let newString='';
    console.log(words)
    
    if(words===null)
    {console.log('Please include data');
    return('')}
    
    for (var i = 0, len = words.length; i < len; i++) {
      if(words[i]!==false&&words[i]!==''){
      newArray.push(words[i]);
      }
    }
    
    if(newArray!==false){newString=newArray[0];
    for(var i=1,len=newArray.length-1;i<len;i++){
    if(i!==len){newString=`${newString}, ${newArray[i]}`}}
    
    if(i===len){newString=`${newString} and ${newArray[i]}`}}
    
    if(newString===undefined){newString='';}
    
    return(newString);
    }