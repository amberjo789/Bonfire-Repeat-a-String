function repeat(str, num) {
  
  var newStr="";
  
  if(num<0){
    newStr = "";
    return newStr;
  }
  else {
    while(num>0){
    //newStr = str.repeat(num);
    newStr = newStr.concat(str);
    num--;
    }
    return newStr;
  }
}

repeat("abc", 3);
