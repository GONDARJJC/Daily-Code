//一个圆
var circleWidthById = document.getElementById("circle").offsetWidth;
var circleHeightById = document.getElementById("circle").offsetHeight;

var boxWidthById = document.getElementById("box").offsetWidth;
var boxHeightById = document.getElementById("box").offsetHeight;

var circleStyleById = document.getElementById("circle").style;

function test_onecircle(){
	if (circleWidthById == 300 && circleHeightById == 300) {
		circleWidthById = 0;
		circleHeightById = 0;
		test_onecircle();
	}else{
		circleWidthById++;
		circleHeightById++;
		circleStyleById.width = circleWidthById +'px';
		circleStyleById.height = circleHeightById +'px';
	    circleStyleById.left = (boxWidthById - circleWidthById)/2 + 'px'; 
	    circleStyleById.top = (boxHeightById - circleHeightById)/2 + 'px'; 
		setTimeout(function() { 
			test_onecircle() 
		},10) 
	}
}
window.onload = test_onecircle;

//三个圆

// var circle_oneWidthById = document.getElementById("circle_one").offsetWidth;
// var circle_oneHeightById = document.getElementById("circle_one").offsetHeight;
// var circle_twoWidthById = document.getElementById("circle_two").offsetWidth;
// var circle_twoHeightById = document.getElementById("circle_two").offsetHeight;
// var circle_threeWidthById = document.getElementById("circle_three").offsetWidth;
// var circle_threeHeightById = document.getElementById("circle_three").offsetHeight;

// var boxWidthById = document.getElementById("box_three").offsetWidth;
// var boxHeightById = document.getElementById("box_three").offsetHeight;

// var circle_oneStyleById = document.getElementById("circle_one").style;
// var circle_twoStyleById = document.getElementById("circle_two").style;
// var circle_threeStyleById = document.getElementById("circle_three").style;

// function test_threecircle(){
// 	//id = circle_one
// 	if (circle_oneWidthById == 300 && circle_oneHeightById == 300) {
// 		circle_oneWidthById = 20;
// 		circle_oneHeightById = 20;
// 	}else{
// 		circle_oneWidthById++;
// 		circle_oneHeightById++;
// 		circle_oneStyleById.width = circle_oneWidthById +'px';
// 		circle_oneStyleById.height = circle_oneHeightById +'px';
// 	    circle_oneStyleById.left = (boxWidthById - circle_oneWidthById)/2 + 'px'; 
// 	    circle_oneStyleById.top = (boxHeightById - circle_oneHeightById)/2 + 'px'; 
// 	}
// 	//id = circle_two
// 	if (circle_twoWidthById == 300 && circle_twoHeightById == 300) {
// 		circle_twoWidthById = 40;
// 		circle_twoHeightById = 40;
// 	}else{
// 		circle_twoWidthById++;
// 		circle_twoHeightById++;
// 		circle_twoStyleById.width = circle_twoWidthById +'px';
// 		circle_twoStyleById.height = circle_twoHeightById +'px';
// 	    circle_twoStyleById.left = (boxWidthById - circle_twoWidthById)/2 + 'px'; 
// 	    circle_twoStyleById.top = (boxHeightById - circle_twoHeightById)/2 + 'px'; 
// 	}
// 	//id = circle_three
// 	if (circle_threeWidthById == 300 && circle_threeHeightById == 300) {
// 		circle_threeWidthById = 60;
// 		circle_threeHeightById = 60;
// 	}else{
// 		circle_threeWidthById++;
// 		circle_threeHeightById++;
// 		circle_threeStyleById.width = circle_threeWidthById +'px';
// 		circle_threeStyleById.height = circle_threeHeightById +'px';
// 	    circle_threeStyleById.left = (boxWidthById - circle_threeWidthById)/2 + 'px'; 
// 	    circle_threeStyleById.top = (boxHeightById - circle_threeHeightById)/2 + 'px'; 
// 		setTimeout(function() { 
// 			test_threecircle() 
// 		},10) 
// 	}
// }
// window.onload = test_threecircle;

/*一堆圆

var box_twoWidthById = document.getElementById("box_more").offsetWidth;
var box_twoHeightById = document.getElementById("box_more").offsetHeight;

var allCircle = document.getElementsByClassName("circle");

var eachCircleWidth = {};
var eachCircleHeight = {};
var eachCircleStyle = {};
var i;
for (i = 0; i <= 2; i++) {
	eachCircleWidth[i] = allCircle[i].offsetWidth;
	eachCircleHeight[i] = allCircle[i].offsetHeight;
	eachCircleStyle[i] = allCircle[i].style;
	eachCircleWidth[i]++;
	eachCircleHeight[i]++;
	eachCircleStyle[i].width = eachCircleWidth[i] + 'px';
	eachCircleStyle[i].height = eachCircleHeight[i] + 'px';
	eachCircleStyle[i].left = (box_twoWidthById - eachCircleWidth[i])/2 + 'px';
	eachCircleStyle[i].top = (box_twoHeightById - eachCircleHeight[i])/2 + 'px';
}

function test_morecircle(a){
	
	setTimeout(1000);
}
*/