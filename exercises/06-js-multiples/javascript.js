 
/*For: estructura de control que se repite x veces: contador, condición, incrementación
The Int: function returns the integer part of a specified number.


*/

sumaMultiplos(){
    int suma = 0;
    for (int i=1; i < 1000; i++){
    if ((i%3==0) || (i%5==0)){
    suma = suma + i;
}
}
}


//Más

int[] multiplos = new int[467];
   multiplos[0] = 0;
   int index = 0;
   int suma = 0;
 
   // Guardamos los múltiplos
   for(int i=0; i<1000; i++){
      if(i%3==0 || i%5==0){
         multiplos[index] = i;
         index++;
      }
   }
 
   // Mostramos los múltiplos
   for(int ii=0; ii<multiplos.Length; ii++){
      Console.WriteLine(multiplos[ii]);
      suma = suma + multiplos[ii];
   }
 
   // Sumamos los múltiplos
   Console.WriteLine("LA SUMA ES IGUAL A:  " + suma);
 
 
 
   ///=======================
   // SIMPLIFICADO
   //=======================
   for(int i=0; i<1000; i++){
      if(i%3==0 || i%5==0){
         suma = suma + i;
      }
   }