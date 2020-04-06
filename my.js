function  isOffScreen(object1){
   var pos = object1.body.position;
   if (pos.y>400) {
    return true;   
   }else{
    return false;   
   }
    


}