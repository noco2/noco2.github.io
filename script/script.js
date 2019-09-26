function elenergi(){
	var val1 = parseInt(document.getElementById("val1").value);
	var answer = document.getElementById("answer");

	answer.value = (val1*0.10).toFixed(0);
};

function fjarrvarme(){
	var val2 = parseInt(document.getElementById("val2").value);
	var answer2 = document.getElementById("answer2");

	answer2.value = (val2*0.09).toFixed(0);
};

function literBensin(){
	var val3 = parseInt(document.getElementById("val3").value);
	var answer3 = document.getElementById("answer3");

	answer3.value = (val3*2.3).toFixed(0);
};

function literDiesel(){
	var val4 = parseInt(document.getElementById("val4").value);
	var answer4 = document.getElementById("answer4");

	answer4.value = (val4*2.56).toFixed(0);
};

function villaolja(){
	var val5 = parseInt(document.getElementById("val5").value);
	var answer5 = document.getElementById("answer5");

	answer5.value = (val5*2.68).toFixed(0);
};

/*Utsläpp efter bilstorlek*/
function literBilstorlek(){
	var val6 = parseInt(document.getElementById("val6").value);
	var answer6 = document.getElementById("answer6");
	var sel1 = document.getElementById("carSize").value;

	if (sel1 == "liten") {
		answer6.value = ((val6*158.120)/1000).toFixed(0);
	};
	if (sel1 == "mellanstor") {
		answer6.value = ((val6*190.280)/1000).toFixed(0);
	};
	if (sel1 == "stor") {
		answer6.value = ((val6*230.480)/1000).toFixed(0);
	};
	if (sel1 == "stadsjeep") {
		answer6.value = ((val6*270.680)/1000).toFixed(0);
	};
};

/*Utsläpp efter liter bensin/mil*/
function literBensinförbrukning(){
	var val7 = parseInt(document.getElementById("val7").value);
	var answer7 = document.getElementById("answer7");
	var fuelConsumption = document.getElementById("fuelConsumption").value;

	if (fuelConsumption == "0.5") {
		answer7.value = ((val7*134.0)/1000).toFixed(0);
	};
	if (fuelConsumption == "0.6") {
		answer7.value = ((val7*160.800)/1000).toFixed(0);
	};
	if (fuelConsumption == "0.7") {
		answer7.value = ((val7*187.600)/1000).toFixed(0);
	};
	if (fuelConsumption == "0.8") {
		answer7.value = ((val7*214.400)/1000).toFixed(0);
	};
	if (fuelConsumption == "0.9") {
		answer7.value = ((val7*241.200)/1000).toFixed(0);
	};
	if (fuelConsumption == "1.0") {
		answer7.value = ((val7*268.0)/1000).toFixed(0);
	};
	if (fuelConsumption == "1.1") {
		answer7.value = ((val7*294.800)/1000).toFixed(0);
	};
	if (fuelConsumption == "1.2") {
		answer7.value = ((val7*321.600)/1000).toFixed(0);
	};
	if (fuelConsumption == "1.3") {
		answer7.value = ((val7*348.400)/1000).toFixed(0);
	};
	if (fuelConsumption == "1.4") {
		answer7.value = ((val7*375.200)/1000).toFixed(0);
	};
	if (fuelConsumption == "1.5") {
		answer7.value = ((val7*402.0)/1000).toFixed(0);
	};
};

/*Utsläpp efter liter diesel/mil*/
function literDieselförbrukning(){
	var val8 = parseInt(document.getElementById("val8").value);
	var answer8 = document.getElementById("answer8");
	var dieselConcumption = document.getElementById("dieselConcumption").value;

	if (dieselConcumption == "0.5") {
		answer8.value = ((val8*150.0)/1000).toFixed(0);
	};

	if(dieselConcumption == "0.6"){
		answer8.value = ((val8*180.0)/1000).toFixed(0);
	};
	if(dieselConcumption == "0.7"){
		answer8.value = ((val8*210.0)/1000).toFixed(0);
	};
	if(dieselConcumption == "0.8"){
		answer8.value = ((val8*240.0)/1000).toFixed(0);
	};
	if(dieselConcumption == "0.9"){
		answer8.value = ((val8*270.0)/1000).toFixed(0);
	};
	if(dieselConcumption == "1.0"){
		answer8.value = ((val8*300.0)/1000).toFixed(0);
	};	
	if(dieselConcumption == "1.1"){
		answer8.value = ((val8*330.0)/1000).toFixed(0);
	};
	if(dieselConcumption == "1.2"){
		answer8.value = ((val8*360.0)/1000).toFixed(0);
	};	
	if(dieselConcumption == "1.3"){
		answer8.value = ((val8*390.0)/1000).toFixed(0);
	};	
	if(dieselConcumption == "1.4"){
		answer8.value = ((val8*420.0)/1000).toFixed(0);
	};	
	if(dieselConcumption == "1.5"){
		answer8.value = ((val8*450.0)/1000).toFixed(0);
	};
};

/*Utsläpp km med buss*/
function buss(){
	var val9 = parseInt(document.getElementById("val9").value);
	var answer9 = document.getElementById("answer9");

	answer9.value = (val9*0.06).toFixed(0);
};

/*Flygutsläpp*/
function flyg(){
	var val10 = parseInt(document.getElementById("val10").value);
	var answer10 = document.getElementById("answer10");

	answer10.value = ((val10*0.2)/1000).toFixed(0);
};

/*totalt utsläppet samt neutraliseringskostnade*/
function totalCo2(){
	var answer = parseInt(document.getElementById("answer").value);
	var answer2 = parseInt(document.getElementById("answer2").value);
	var answer3 = parseInt(document.getElementById("answer3").value);
	var answer4 = parseInt(document.getElementById("answer4").value);
	var answer5 = parseInt(document.getElementById("answer5").value);
	var answer6 = parseInt(document.getElementById("answer6").value);
	var answer7 = parseInt(document.getElementById("answer7").value);
	var answer8 = parseInt(document.getElementById("answer8").value);
	var answer9 = parseInt(document.getElementById("answer9").value);
	var answer10 = parseInt(document.getElementById("answer10").value);


	var answer11 = document.getElementById("answer11");
	var answer12 = document.getElementById("answer12");

	answer11.value = answer+answer2+answer3+answer4+answer5+answer6+answer7+answer8+answer9+answer10;
	answer12.value = (answer11.value*0.13).toFixed(1);


};


/*jQuery*/

$(document).ready(function(){

	$(window).scroll(function(){
		if($(this).scrollTop() > 40 ){
		$('#arrowFixed').fadeIn();
	} 
	else{
		$('#arrowFixed').fadeOut();
	}

	});


	$("#arrowFixed").click(function(){
		$('html ,body').animate({scrollTop : 0}, 400);
	});
});


