let sides = 6;
var text ="";
var counter = 0;
	var sucess = 0
  var s = 6; 
function dice(sideNumber)
{

	var rollResult = Math.floor(Math.random()*sides) 
	if(rollResult===0)
{
	rollResult+1
	return rollResult
}
	return rollResult;
}


	begening()
function begening()
	{	window.alert("to play type (roll) at each feat and you will roll the provided dice your goal is to roll high ")
		window.alert("the higher you roll the better chance of sucess and maybe bonususs")
		window.alert("welcome to the arena where you will be tested in feats to test who is the most worthy to lead our world")
		featOfStrength(6)
	}

function featOfStrength(r1)
	{

		if (counter === 0)
		{
		window.alert("welcome to your first feat all you must do is lift the rock and put it on the pedestal")
		var p1 =prompt("you see a large rock and a beautiful golden pedestal. (roll)")
		
		}

		else
		{
			p1 = prompt("you were close but not quite. try again. (roll")
			
		} 

		 
		let userRoll = dice(6)
		let action = r1-userRoll
		switch(p1)
		{
			case "roll":
				
				window.alert("your roll was " + userRoll )
				counter++; 
				
			if(userRoll===6)
				{
					userRoll = 6
					action; 
				}	
			else if(action>0)
				{
					action
					featOfStrength(action)
				}
		
		}	
	if (action <= 0)		
		{
				window.alert("you struggle to lift the rock and you succed. As door at the end of the arena opens and you walk through")
			delete counter; 
			featOfSkill(1)
			
		}
	else
		{		
			featOfStrength(action)
		}
}

 function featOfSkill(r1)
	{


		if (counter === 0)
		{
		window.alert("welcome to your second feat all you must do is hit the targets ")
		var p2 =prompt("you see three targets lyed out in front of you.A bow appears in your hand. (roll)")
		}

		else
		{
			p2 = prompt("you aim at the next tatget. (roll")
		} 

		 
		let userRoll = dice(s)
		let action = r1-userRoll
		switch(p2)
		{
			case "roll":
				
				window.alert("your roll was " + userRoll )
				counter++; 
				
			if(userRoll===6)
				{
					userRoll = 6
					action; 
				}	
			else if(action>0)
				{
					action
					featOfSkill(action)
				}
		
		}	
	if (action <= 0)		
		{
				window.alert("you pull the bow back sight and nail the target")
				sucess++;
		}
	else
		{		
			featOfSkill(action)
		}

		if (sucess ===1)
		{
			s = 10
			//
			featOfSkill(6)
			
		}
		if(sucess === 2)
		{
			s =15
			featOfSkill(10)
		}
		if(sucess >= 3)
			{
				window.alert("well done. another door opens")	
				delete counter;
				return; 
			}
}



function testOfKnowlege()
	{
		if (counter === 0)
		{
		window.alert("you see an old man with a blank canvas")
		var p1 =prompt("you will roll the numbers will appear. Are they happy? that is for you to decide. (roll)")
		
		}

		else
		{
			p1 = prompt("you were close but not quite. try again. (roll")
			
		} 

		 
		let userRoll =dice(100).toString
		let userRoll2 = dice(100).toString 
		let action = userRoll+userRoll2
		
		switch(p1)
		{
			case "roll":
				
				window.alert(userRoll)
				window.alert(userrRoll2)
				var p2 = prompt("now is" action "happy")
				counter++; 
				
	switch(p2)
		{
			case"yes"
			if()
		}


		
		}	
	if (action <= 0)		
		{
				window.alert("you struggle to lift the rock and you succed. As door at the end of the arena opens and you walk through")
			delete counter; 
			featOfSkill(1)
			
		}
	else
		{		
			featOfStrength(action)
		}
	}


 
 











//  results("which way do you want to go? 1=right 2=left","you live","you die")
// function results(r1, result1,result2){
// 		window.alert(r1)
 		
// 	switch(r1)
// 		{
// 			case "1":
// 				window.alert(result1)
// 				return result1;
// 				break;
							
// 			case"2":
// 				window.alert(result2)
// 				return result2;
				
// 				break;


// 		}	
// 	}

// 

	

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
		
	

