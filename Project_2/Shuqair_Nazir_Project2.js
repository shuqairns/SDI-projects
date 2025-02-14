//Nazir Shuqair
//June 12th, 2013
//SDI 0613
// Project 2
//GitHub repository link:
//https://github.com/g67277/SDI-projects.git

var lCDRName = "James";
var company3 = "\"Charlie\"";
var isTankDestroyer = false;
var tankCount = 4;
var minimumRequirement = 3;
var battleReady = true;
var attackLocation = ["Enemy Flank", "High ground", "Across River", "Head on	"];
var speed = 25;

//Procedure function
var specialty = function (isDestroyer){

	console.log("LCDR " + lCDRName + ":  Are the hostile Tanks designated \"Tank Destroyer\"? " );
	
	if(isDestroyer){
		console.log("This will be a high risk mission. Based on the answer of the next couple of question, a decision will be made on whether it’s a go.");
	}
	else {
		console.log("No, mission parameters are as expected.  We can proceed.");  
	};
	
}

//Boolean Function
var readiness = function (isReady, minimum){

	var ready;
	var isAirStrikAvl = true;
	
	if((minimum > 3 && isReady) || isAirStrikAvl) {
		
		ready = "We exceed the minimum requirement for an assault, with " + minimum + " Tanks, and based on a true or false, our battle readiness is at: " + isReady + 
		".  Or an Air Strike capability is set to: " + isAirStrikAvl;
	}	
	else{
		ready = "We are either short on tanks, or based on a true or false, our battle readiness is at" + isReady;
		
	}
	
		
return ready;		

}



//Number function
var calRateOfSuccess = function (tanks){

	var hostileEstimate = [2];
	var c = 0;
	
	while (c < 5){
		
		var percent = Math.round((tanks / hostileEstimate[c]) * 100);
		if(percent > 100){
			var extra = tanks - hostileEstimate[c];
			console.log("We outnumber the enemy tanks by " + extra + " if they only have " + hostileEstimate[c]);
		} else if (tanks == hostileEstimate[c]){
			console.log("The hostiles match our numbers if they have " + hostileEstimate[c] + " tanks on the battlefield");
		}else {
		
			console.log("If " + hostileEstimate[c] + " hostile tanks are present, the success rate is at " + percent + " %");
		}
		
		//Array method
		hostileEstimate.push( hostileEstimate[c] + 1 );
		c++;
	}
	
	return percent;

}


var backup = function (cDR, unit) {

	var additionalT = 6;
	
	var output = "Commander " + cDR + " will assign " + unit + " Company, an addition of " + additionalT + " troops to back up the main force";
	
	return output;

};

var eTA = function (location, speedRate){

	var distance = [120, 100, 80, 40];
	var closeRange = 85;
	var timeArray = [0];
	
	console.log("Command:  Below are the locations to consider, along with their distance.");
	console.log("Location:		Distance:");

	for(var c = 0; c < location.length; c++){
		var time = distance[c] / speedRate;
		timeArray[c] = " " + time + "hrs";
			
		console.log(location[c] + "		" +  distance[c] + " Miles		");  
		
		
	}
	

console.log(" ");
return timeArray;
};

console.log("Commander " + lCDRName + " enters the room and mission discussion is underway.  Mission transcript is as follows: ");
console.log(" ");

specialty(isTankDestroyer);
console.log(" ");

console.log("LCDR " + lCDRName + ":  Where do we stand on troops and armor readiness?");
var battleR = readiness(battleReady, tankCount);
console.log(battleR);
console.log(" ");
	

	
console.log("LCDR " + lCDRName + ":  What's the input from the recon team and how do we stack up");
console.log("Hostiles are estimated to have anywhere from 2 to 6 tanks. The list below describes our rate of success: " );
console.log(" ");
var rate = calRateOfSuccess(tankCount);
console.log(rate + " % is the worst case senario");


var backupPlan = backup(lCDRName, company3);
console.log("In which case, " + backupPlan);
console.log(" ");


var estimatedArival = eTA(attackLocation, speed);
console.log(estimatedArival + " | The times to the left reflect the ETA(estimated time of arrival) to the list of destinations above, accordingly.");
console.log(" ");


