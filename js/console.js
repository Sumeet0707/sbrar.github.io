var birthday = new Date('August 19,2000 00:00:00')
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs); // miliseconds from epoch
var age = Math.abs(ageDate.getUTCFullYear() - 1970).toString();
var finished_typing = false;
var filled = false;

// set up text to print, each item in array is new line
var aText = new Array(
"> Hello!", 
"> My name is Sumeet Kaur Brar, I am " + age + " years old.", 
"> I am a Computer Information Systems graduate and I love challenges.",
"> I currently work as a Software Tester at Gatekeeper Systems.",
"> If you want to know more about me, you are in the right place :)"
);

var aText = new Array(
	"> MISSION STATEMENT", 
	"> As a dedicated software systems student with a passion for technology and innovation, my career goals are focused on leveraging my skills to develop impactful solutions that address real-world problems. I aim to continuously expand my knowledge and expertise in software development, staying updated with the latest trends and advancements in the field.", 
	"> My mission is to contribute to the tech industry by creating efficient, user-friendly, and innovative software solutions. I am committed to lifelong learning, collaboration, and applying my skills to make a positive difference in both my professional and personal life. I strive to achieve excellence in every project I undertake and to inspire others through my dedication and work ethic.)"
	);
	
var iSpeed = 10; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function fill_typewriter() {
	var destination = document.getElementById("typedtext");
	var text = "";
	for (var i = 0; i < aText.length; i++) {
		text += aText[i] +  '<br />';
	}
	destination.innerHTML = text;
	filled = true;
}

function typewriter() {
	sContents =  ' ';
	iRow = Math.max(0, iIndex-iScrollAt);
	var destination = document.getElementById("typedtext");
	while ( iRow < iIndex ) {
    	sContents += aText[iRow++] + '<br />';
   	}
	if (finished_typing == false) {
		destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
	}
   	if ( iTextPos++ == iArrLength ) {
    	iTextPos = 0;
    	iIndex++;
    	if ( iIndex != aText.length ) {
			iArrLength = aText[iIndex].length;
			if (finished_typing == false) {
				setTimeout("typewriter()", 500);
			} 	
    	}
		else {
			finished_typing = true;
			filled = true;
			showcontent();
			destination.innerHTML = destination.innerHTML.replace("_", "");
		}
   	} 
	else {
		if (finished_typing == false) {
			setTimeout("typewriter()", iSpeed);
		} 	
   	}

  }
