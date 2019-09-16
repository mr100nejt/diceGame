let sides = 6;
var text ="";
function dice(sideNumber)
{

	var rollResult = Math.floor(Math.random()*sides)
	return rollResult;
}
 room("which way do you want to go? 1=right 2=left")

 
 function room(r1){
 		let room1 = prompt(r1)
 		results(room1, "you die","you live")
 	}

function results(decision, result1,result2){

	switch(decision)
		{
			case "1":
				window.alert(result1)
				return result1;
				break;
							
			case"2":
				window.alert(result2)
				return result2;
				
				break;


		}	
	}









// function firstQuestion()
// 	{
		
// 	switch(decesion1)
// 		{
// 			case "1":
// 				return "you enter a dark forest";
// 				break;
							
// 			case"2":
// 				return "you enter a beatiful medow";
				
// 				break;


// 		}
// 	}
	

// 		 function ifWoods ()//
// 	 {
// 	 		var  decesion2 = prompt("Are you sure? 1=yes i want to go into a scary forest in an adveture game. 2=no i make resonable decesions")
// 		prompt(decesion2)
// 	switch(decesion2)
// 		{
// 			case "1":
// 				return "you step foward and hear a snap. The groound disapears below you and you fall too your death";
// 				break;
							
// 			case"2":
// 				return "you turn to leave and walk into a beautiful medow";
				
// 				break;


// 		}
// 	} 
	
	

// 	 function ifMedow()
// 	 	{
// 	 		let decesion3 = prompt("you see a glowing light off to the left 1=aproach light 2=keep looking around")
// 		prompt(decesion3)
// 	switch(decesion3)
// 		{
// 			case "1":
// 				return "you feel a tingling and everything goes white";
// 				break;
							
// 			case"2":
// 				return "you see a snake";
				
// 				break;


// 		}
// 	}
	 
// 	function seeTheSnake()
// 	{
// 			let decesion = prompt("1=Go to the snake 2=go to the light") 
			
// 		switch(decesion)
		
// 		{
// 			case "1":
// 				return "you get to the snake and see its dead so you grab it and pull the severed head of a beautiful women comes with it you look into her eyes and turn to stone";
// 				break;
							
// 			case"2":
// 				return "you feel a tingling and your vison goes white";
				
// 				break;
// 		}

// 	}
	
// 	function f()

// 		{ 
// 			let decesion = prompt("your vison clears and you see a wall that says break me 1= attempt to break the wall 2 = give up")

// 			switch(decesion)
		
// 		{case "1":
// 				return "you roll your trusty 6 sided dice to gain the stregth to break it and you roll a"+ dice(6);
// 				break;
							
// 			case"2":
// 				return "game over";
				
// 				break;
// 		}


// }

// 	if(firstQuestion()==="you enter a dark forest") //first dese
// 		{
// 			window.alert(ifWoods())
// 		}
	
// 	else if (firstQuestion()==="you enter a beatiful medow")
// 		{
// 			window.alert(ifMedow())
		
// 	if(ifMedow()=== "you see a snake")
// 				{
// 				window.alert(seeTheSnake())
	
// 				}
// 		}
// 	if(E()==="you get to the snake and see its dead so you grab it and pull the severed head of a beautiful women comes with it you look into her eyes and turn to stone")
// 					{
// 						window.alert("game over")
// 					}
				
// 	else if(b()==="you feel a tingling and everything goes white")
// 				{
// 					window.alert(f())
// 				}
		
	

