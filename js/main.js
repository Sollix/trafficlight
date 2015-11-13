//each button
$('#stopButton').on('click',function(event){
	$('#stopLight').css('background-color','red');
	$('#slowLight, #goLight').css('background-color','#111');
});

$('#slowButton').on('click',function(event){
	$('#slowLight').css('background-color','yellow');
	$('#stopLight, #goLight').css('background-color','#111');
});

$('#goButton').on('click',function(event){
	$('#goLight').css('background-color','green');
	$('#stopLight, #slowLight').css('background-color','#111');
});

//reset
$('#resetButton').on('click',function(event){
	$('#stopLight, #slowLight, #goLight').css('background-color','#111');
});