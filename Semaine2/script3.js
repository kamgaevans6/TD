function verifierNote(note){

     if (note < 0 || note > 20) { 

        console.log(" Note invalide ");

    } else if ( note >=10 && note <=11){

        console.log( " Passable ");
    } else if ( note >=12 && note <=13){

        console.log( " Assez bien ");

    } else if ( note >=14 && note <=15){

        console.log( " Bien ");
    } else if ( note >=16 && note <=20){

        console.log( " Tres bien ");
    }
  
}
