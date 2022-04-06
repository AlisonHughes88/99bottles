function go() {

    var beerbottles = 99;
	var lyrics = "";
	
    while (beerbottles > 2) {
        var verse = [
			
            beerbottles + " bottles of beer on the wall,", 
            beerbottles + " bottles of beer",
            "Take one down, pass it around",
			(beerbottles - 1) + " bottles of beer on the wall. " 
			].join("<br><br>");
		

        document.getElementById("main").innerHTML += verse;

        beerbottles--;
    }


}