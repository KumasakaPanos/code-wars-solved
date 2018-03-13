function abbrevName(name){
  let splitStrings=new Array;
  splitStrings=name.split(' ');
  splitStrings[0]=splitStrings[0].toUpperCase().substring(0,1);
  splitStrings[1]=splitStrings[1].toUpperCase().substring(0,1);
  return `${splitStrings[0]}.${splitStrings[1]}`;
 }