let signo= prompt('Cual es su signo zodiacal: ')
signo= signo.toLowerCase()
switch(signo){
   case 'aries':
      console.log("1.Trabajo y negocios: su accionar arrastrará a gente temerosa a los cambios. El resultado será positivo. Amor: le reclamarán que no tome a broma sentimientos de su pareja; abra su corazón.")
      break;
   case 'tauro':
      console.log("")
      break;
   case 'geminis':
      console.log("2. Trabajo y negocios: demoras burocráticas serán un obstáculo para su proyecto. Calma, un amigo ayudará. Amor: iniciará un romance a pesar de la oposición de familiares. Será fantástico.")
      break;
   case 'cancer':
      console.log("3.Trabajo y negocios: una vieja iniciativa pasa a tener súbita vigencia y las ganancias no tardan en llegar. Amor: su pareja defenderá sus argumentos con gran pasión; sentirá que le seducen.") 
      break;
   case 'leo':
      console.log("4.Trabajo y negocios: necesita informes urgentes pero conviene pedirlos con discreción o alguien se ofenderá. Amor: estará susceptible. Acérquese a su pareja; necesitará de su comprensión.")      
      break;
   case 'virgo':
      console.log("5.Trabajo y negocios: es hora de dar rienda suelta a su creatividad. Anímese, el momento es favorable. Amor: logrará hacer las paces con su pareja y familiares mayores. La armonía renacerá.")
      break;
   default:
      console.log("El signo que digito es incorrecto")
}