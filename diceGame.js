var sides = 6;
var text ="";
var skillCounter = 1;
var counter = 1;
var sucess = 0 
var s = 6; 
var fCounter = 1;
function dice(sideNumber)
{

	var rollResult = Math.floor(Math.random()*sides) 
	if(rollResult < 1)
{
	notZero = rollResult+1

	return notZero;
}
	return rollResult;
}


	
function begening()
	{	window.alert("To play type (roll) at each feat and you will roll the provided dice your goal is to roll high ")
		window.alert("The higher you roll the better chance of sucess")
		window.alert("Telcome to the arena where you will be tested in feats to test who is the most worthy to lead our world")
		featOfStrength(3)
	}

function featOfStrength(r1)
	{
		

		if (counter === 1)
		{
		window.alert("Welcome to your first feat all you must do is lift the rock and put it on the pedestal")
		var p1 =prompt("You see a large rock and a beautiful golden pedestal. a D4 appears in your hand (roll)")
		sides = 4; 
		}

		else 
		{
			p1 = prompt("You were close but not quite. try again. (roll")
			
		} 

		 
		let userRollStr = dice(6)
		let action = r1-userRollStr
		switch(p1)
		{
			case "roll":
				
				window.alert("Your roll was " + userRollStr )
				
				
			if(userRollStr===6)
				{
					userRollStr = 6
					action; 
				}	
			else if(action>=0)
				{
					action
					
					counter++;
					return featOfStrength(1)

				}
		
		}	
	if (action <= 0)		
		{
				window.alert("You struggle to lift the rock and you succed. As door at the end of the arena opens and you walk through")
			counter = 1; 
			featOfSkill(1)
			
		}
	else
		{		
			featOfStrength(action)
		}
}

 function featOfSkill(r1)
	{
		 

		if (counter <= 1)
		{
		window.alert("Welcome to your second feat all you must do is hit the targets ")
		var p2 =prompt("You see three targets lyed out in front of you.A bow appears in your hand along with a D6. (roll)")
		sides = 6; 
		}

		else
		{
			p2 = prompt("You aim at the next target. (roll")
		} 

		 
		let userRollS = dice(s)
		let action = r1-userRollS
		switch(p2)
		{
			case "Roll":
				
				window.alert("Your roll was " + userRollS )
				counter++; 
				
			if(userRollS===6)
				{
					userRollS = 6
					action; 
				}	
			else if(action>0)
				{
					action
					return action; 
				}
		
		}	
	if (action <= 0)		
		{
				
				sucess++;
		}
	else
		{		
			return action; 
		}

		if (sucess ===1)
		{
			s = 10
			window.alert("You pull the bow back sight and nail the target and a D8 appears in your hand")
			 
			 counter ++;
			sides = 8;
			
		}
		if(sucess === 2)
		{
			s =15
			window.alert("You pull the bow back sight and nail the target a D10 appears in your hand")
			sides = 10;
			
		}
		if(sucess >= 3)
			{
				window.alert("Well done. another door opens")	
				counter = 0;
				testOfKnowlege() 
			}
if(skillCounter ===1)
				{										
					skillCounter = 2
					featOfSkill(1)
				}
if(skillCounter ===2)
{
	skillCounter = 3
	featOfSkill(1)
	
	
}
// 
	}




function testOfKnowlege()
	{
		
		if (counter === 0)
		{
		window.alert("You see an old man with a blank canvas,two giant D100 fall in front of you")
		
		var p3 =prompt("You will roll the numbers will appear. Are they happy? that is for you to decide. (roll)")
		
		}
		if(counter >=1)
		{
			
			var p3 =prompt("You will roll the numbers will appear. Are they happy? that is for you to decide. (roll)")
		}

		

		 
		let userRollK =dice(100)
		let userRollK2 = dice(100)
		let toString = userRollK.toString()
		let toString2 = userRollK2.toString()
		let action = toString+toString2
		counter = 0;
		switch(p3)
		{
			case "roll":
				
				window.alert("Your roll was "+userRollK)
				window.alert("Your roll was "+userRollK2)
				var p4 = prompt("Is "+ action+ " happy")
				counter++; 
				
	switch(p4)
		{
			case"yes":
				
				if(happy(action)==="happy")
					{
						window.alert("Well done a door opens")
						action = 0;
					}
				else 
					{
						window.alert("Try again")
						 testOfKnowlege()	
						 action = 0;
						
					}
			break;
		case"no":
			 if(happy(action)==="unhappy")
				{
					happy(action)
					window.alert("Well done a door opens")
					counter = 3;
					featOfLuck() 
				}
			else 
					{
						window.alert("Try again")
						
						 testOfKnowlege()	
					}
		}
				
		
		}
}

 	
 
	function featOfLuck()
		{
			
			let userRollL=dice(3)
			if(counter===3)
				{
					window.alert("For this you will need some luck your goal is to roll a 2")
				}			
			var p5 = prompt(" A D3 appars in your hand (roll)")
			switch(p5)
				{
					case"roll":

					sides = 3; 
					if(userRollL === 2)
						{
							window.alert("Luck was on your side")
							gameOver()
						}

					else
						{
							window.alert("Try again")
							counter++ ; 
							featOfLuck()
						}	

				}
		}	

	function gameOver()
	{
		window.alert("Well done i hope you enjoyed your adveture")
		window.alert("Game over")
		counter=100000;
	}
	function happy(n1)
	{
		
		var output = [],
		 stringNumber = n1.toString();
		var len = stringNumber.length;
		
			
			

		for (var i = 0;  i < stringNumber.length; i++)
				
			{
				output.push(+stringNumber.charAt(i));
			}
			 if(output.length ===3)
				{
					var ns1 = output[0]
					var ns2 = output[1]
					var	ns3 = output[2]
					var nSquared3 = Math.pow(ns3,2)
					var nSquared1 = Math.pow(ns1,2);
					var nSquared2 = Math.pow(ns2,2);
					var addSquare = nSquared1+nSquared2+nSquared3; 
					fCounter++;
				}
			if(output.length<2)
			{
				var ns1 = output[0]
				var nSquared1 = Math.pow(ns1,2);
				var addSquare = nSquared1;
				fCounter++;
			}
			if(output.length===2)
		{
		
		var ns1 = output[0]
		var	ns2 = output[1]
		var nSquared1 = Math.pow(ns1,2);
		var nSquared2 = Math.pow(ns2,2);
		var addSquare = nSquared1 + nSquared2;
		fCounter++;
	}
		
		 if(fCounter >=3)
				{
					
					console.log("unhappy")
					return "unhappy"

				}
		 if (addSquare===1)

			{
				console.log("happy")

			}
		else
			{
			
			return happy(addSquare);

			

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
		
	

