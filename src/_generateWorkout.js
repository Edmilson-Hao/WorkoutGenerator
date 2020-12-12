generateFullBodyWorkout = () => {

   //Generating group order
   do{
      firstGroup = randomNumber(0, 3);
      secondGroup = randomNumber(0, 3);
      thirdGroup = randomNumber(0, 3);
   } while (firstGroup === secondGroup || firstGroup === thirdGroup || secondGroup === thirdGroup);

   if (exerciseArray === mainGroup){
      max = 4;
   } else if (exerciseArray === secondaryGroup){
      max = 3;
   }
   
   do{
      firstExercise = exerciseArray[firstGroup][randomNumber(0, max)];
      secondExercise = exerciseArray[firstGroup][randomNumber(0, max)];

      thirdExercise = exerciseArray[secondGroup][randomNumber(0, max)];
      fourthExercise = exerciseArray[secondGroup][randomNumber(0, max)];

      fifthExercise = exerciseArray[thirdGroup][randomNumber(0, max)];
      sixthExercise = exerciseArray[thirdGroup][randomNumber(0, max)];
   } while (firstExercise === secondExercise || thirdExercise === fourthExercise|| fifthExercise === sixthExercise);
    
    document.getElementById('generatedWorkout').style.display = 'block';
    document.getElementById('divWorkoutContainer').style.display = 'none';
    document.getElementById('footer').style.display = 'block';

    printWorkout();
}

generateUpperLowerWorkout = () => {
   
   do {
      firstGroup = randomNumber(0, 2);
      secondGroup = randomNumber(0, 2);
   } while (firstGroup === secondGroup);

   if(upperLowerSplit === 'upperBodyMainGroupDay'){   
      do {
         firstExercise = mainGroup[firstGroup][randomNumber(0, 4)];
         secondExercise = mainGroup[firstGroup][randomNumber(0, 4)];
         thirdExercise = secondaryGroup[2][randomNumber(0, 3)];
         
         fourthExercise = mainGroup[secondGroup][randomNumber(0, 4)];
         fifthExercise = mainGroup[secondGroup][randomNumber(0, 4)];
         sixthExercise = secondaryGroup[1][randomNumber(0, 3)];
      } while (firstExercise === secondExercise || fourthExercise === fifthExercise);

   } else if (upperLowerSplit === 'lowerBodySecondaryGroupDay'){
      do {
         firstExercise = mainGroup[firstGroup][randomNumber(0, 3)];
         secondExercise = mainGroup[firstGroup][randomNumber(0, 3)];

         thirdExercise = 'Stiff Leg DeadLift';
         fourthExercise = mainGroup[2][3];
      } while (firstExercise === secondExercise);

   }
      

   document.getElementById('generatedWorkout').style.display = 'block';
   document.getElementById('divWorkoutContainer').style.display = 'none';
   document.getElementById('footer').style.display = 'block';

   printWorkout();
}

printWorkout = () => {
   document.getElementById('generatedWorkout').innerHTML = `
        <table class='tableResult'>
         <tr>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
         </tr>

         <tr>
            <td></td>
            <td></td>
            <td></td>
         </tr>

         <tr>
            <td class='tdContent'> ${ firstExercise }</td>
            <td class='tdContent'>4</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'> ${ secondExercise }</td>
            <td class='tdContent'>2</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'> ${ thirdExercise }</td>
            <td class='tdContent'>4</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'> ${ fourthExercise }</td>
            <td class='tdContent'>2</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'> ${ fifthExercise }</td>
            <td class='tdContent'>4</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'> ${ sixthExercise }</td>
            <td class='tdContent'>2</td>
            <td class='tdContent'>12</td>
         </tr>
        </table>
    `;
}

randomNumber = (min, max) => {
   return parseInt(min + (max - min) * Math.random());
}