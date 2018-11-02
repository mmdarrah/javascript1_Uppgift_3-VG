
/* Ett program som beräkna fakultet med hjälp av funktion inom matematiken
för exempel  5!  = 1 * 2 * 3 * 4 * 5 = 120
OBS!!! numret måste sluta med "!" föratt programet beräkna fakultet 
*/






// While loop för att kolla om användarens input är korrekt
while (true) {
    
    let inPut = prompt("Ange ett heltal mellan 1 och 1000 föratt programet beräkna fakultet .",`Glöm inte "!" i sluten av numret`);


    // Om användare klicka på avbryt programmet ska se Hejdå och avsluta
        if (inPut === null){
        alert("Hejdå")
        break;
    }


    //Programmet ska kolla om numret sluta med ! och mellan 1 till 1000 sedan programmet ska beräkna fakultet
    if  ((inPut.endsWith("!")) && ((inPut >=1 && inPut <= 1000) )){
        inPut = inPut.substring (0,inPut.length -1);
        /*efter kolla på "!" i sluten av numret sedan substring method ska ta bort "!"
        och sedan skicka nummret till fakuletet function*/
        
        document.write("Fakultet av " +inPut+"!"+" är "+fakultet(inPut)+("."));
        break;
              
    }

    
   // Om användare lägga till file input
   else if (inPut != inPut.endsWith("!")|| (inPut %1 === 0)||(isNaN(inPut))) {
        document.write(`Fail input. OBS!! Du måste lägga till ett heltal med "!" I slutet av numret för att beräkna fakulteten.`);
        
    }
   // loop slut




    // Fakultet function med rekursion "self-calling-function"
    function fakultet(inPut){
        if (inPut == 0)
        return 1;
        else
        return inPut * fakultet (--inPut);
    
    }
    
    
}
    