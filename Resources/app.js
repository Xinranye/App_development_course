/* Assignment Journal
 * 1. The interface code did work well, but not the function code.
 * 2. The code can run at Mobile web browser but not emulator. Even I re-install everything.
 * 3. The function code is mostly based on the one you provides us.
 * 4. I can understand overall the function code, but some specific detail I am still thinking, as I never use JS before.
 *  
 * 
 * 
 */



Titanium.UI.setBackgroundColor('#8FBC8F');

var win1 = Titanium.UI.createWindow({
	backgroundColor:"#8FBC8F",
});

var view = Titanium.UI.createView();

// Create a Label.
var Label1 = Ti.UI.createLabel({
	text : '00:00:00',
	color : 'black',
	font : {fontSize:50},
	width : 'auto',
	textAlign : 'center',
	top: 150
});

//Start button.
var buttonstart = Ti.UI.createButton({
	title: 'Start',
	color: '#191970',
	width: 90,
	height: 70,
	top: 300,
	left: 350
	
});

//Stop button.
var buttonstop = Ti.UI.createButton({
	title: 'stop',
	color: '#191970',
	width: 90,
	height: 70,
	top: 300,
	titleAlign:'center'
	
});

//Reset button.
var buttonreset = Ti.UI.createButton({
	title: 'reset',
	color: '#191970',
	width:90,
	height: 70,
	top:300,
	right:350
});

//set value of the label.
var startStopwatch = function() {
    label1.value = '00:00:00';

//set the origin value of stopwatch.
var StopWatch = function(){
	var StartTime = 0;
	var StopTime = 0;
	var TimeElapse = 0;
	var TotalElapse = 0; 
	var start = false;
//set the time range of stopwatch.	
	var timehour = 1000 * 60 * 60;
	var timemin = 1000 * 60;
	var timesec = 1000;
);


//create start function.    
var StopWatch.Start = function() {
	if(!=start){
		StartTime = new Date().getTime();
		StopTime = 0;
		start = true;
	};
};

//create stop function.
var StopWatch.Stop = function(){
	if(start){
		StopTime = new Date().getTime();
		start = false;
		TimeElapse = StopTime -StartTime;
		TotalElapse += TimeElapse;
	};
	return GetElapse();
};

//create reset function.
var StopWatch.Reset = function() {
	TotalElapse = 0;
	StartTime = 0;
	StopTime = StartTime;
};

//The function of get the stopwatch of elapase time.
var StopWatch.GetElapse = function(){
	var TimeElapse = 0;
	if(start){
		TimeElapse = StartTime - StopTime;
		TotalElapse += TimeElapse;
		
		var hours = parseInt(TimeElapse/timehour);
		TotalElapse %= timehour;
		var mins = parseInt(TimeElapse/timemin);
		TotalElapse %= timemin;
		var sec = ParseInt(TimeElaspse/timesec);
		return {
			hours: hours,
			minutes: mins,
			seconds: sex
			
		};		
	};	
};

//Set the elapsed 
Stopwatch.SetElapsed = function(hours, mins, secs) {
	TotalElapsed = 0;
	TotalElapsed += hours * timehour;
	TotalElapsed += mins * timemin;
	TotalElapsed += secs * timesec;
	TotalElapsed = Math.max(TotalElapsed, 0); // * No negative numbers
};

//change the label showed in the window.
Stopwatch.ToString = function() {
	var zpad = function(no, digits) {
 		no = no.toString().slice(0, 2);
 		while(no.length < digits)
 		no = '0' + no;
 		return no;
	};
	
	var e = GetElapsed();
	return zpad(e.hours,2) + ':' + zpad(e.minutes,2) + ':' + zpad(e.seconds,2);
};

module.exports = Stopwatch;

};

var stopStopwatch = function() {
        clearInterval(intervalid);
    };
var intervalid = null;
var start = false;

//The action of click the button.
buttonstart.addEventListener("click", function(e){
    if (!started) {
        startStopwatch();
        start = true;
      } 
});

//Tha action of click the stop button.
buttonstop.addEventListener("click", function(e){
    if (started) {
        stopStopwatch();
        start = false;
    }
    label1.text = '00:00:00';
});
 
buttonreset.addEventListener("click", function(e){
    if (start) {    
        stopStopwatch();
        start = false;
    }
});



view.add(Label1);
win1.add(view);
win1.add(buttonstart);
win1.add(buttonstop);
win1.add(buttonreset);

win1.open();

