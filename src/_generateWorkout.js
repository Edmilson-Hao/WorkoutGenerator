generateFullBodyWorkout = () => {

   //Generating group order
   do{
      firstGroup = randomNumber(0, 3);
      secondGroup = randomNumber(0, 3);
      thirdGroup = randomNumber(0, 3);
   } while (firstGroup === secondGroup || firstGroup === thirdGroup || secondGroup === thirdGroup);

   

   //Generating exercises numbers
   do{
      if (exerciseArray === mainGroup){
         max = 4;
      } else if (exerciseArray === secondaryGroup){
         max = 3;
      }

      firstGroupFirstExercise = randomNumber(0, max);
      firstGroupSecondExercise = randomNumber(0, max);

      secondGroupFirstExercise = randomNumber(0, max);
      secondGroupSecondExercise = randomNumber(0, max);

      thirdGroupFirstExercise = randomNumber(0, max);
      thirdGroupSecondExercise = randomNumber(0, max);
   } while (firstGroupFirstExercise === firstGroupSecondExercise || secondGroupFirstExercise === secondGroupSecondExercise || thirdGroupFirstExercise === thirdGroupSecondExercise);
    
    document.getElementById('generatedWorkout').style.display = 'block';
    document.getElementById('divWorkoutContainer').style.display = 'none';
    document.getElementById('footer').style.display = 'block';

    printWorkout();
}

randomNumber = (min, max) => {
   return parseInt(min + (max - min) * Math.random());
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
            <td class='tdContent'>` + exerciseArray[firstGroup][firstGroupFirstExercise] + `</td>
            <td class='tdContent'>4</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'>` + exerciseArray[firstGroup][firstGroupSecondExercise] + `</td>
            <td class='tdContent'>2</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'>` + exerciseArray[secondGroup][secondGroupFirstExercise] + `</td>
            <td class='tdContent'>4</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'>` + exerciseArray[secondGroup][secondGroupSecondExercise] + `</td>
            <td class='tdContent'>2</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'>` + exerciseArray[thirdGroup][thirdGroupFirstExercise] + `</td>
            <td class='tdContent'>4</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'>` + exerciseArray[thirdGroup][thirdGroupSecondExercise] + `</td>
            <td class='tdContent'>2</td>
            <td class='tdContent'>12</td>
         </tr>
        </table>
    `;
}