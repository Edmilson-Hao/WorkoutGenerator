generateFullBodyMainGroupDay = () => {
    let firstGroup;
    let secondGroup;
    let thirdGroup;

    let firstGroupFirstExercise;
    let firstGroupSecondExercise;

    let secondGroupFirstExercise;
    let secondGroupSecondExercise;

    let thirdGroupFirstExercise;
    let thirdGroupSecondExercise;

    //Generating group order
   do{
      firstGroup = randomNumber();
      secondGroup = randomNumber();
      thirdGroup = randomNumber();
   } while (firstGroup === secondGroup || firstGroup === thirdGroup || secondGroup === thirdGroup);

   //Generating exercises numbers
   do{
      firstGroupFirstExercise = randomNumberTwo();
      firstGroupSecondExercise = randomNumberTwo();

      secondGroupFirstExercise = randomNumberTwo();
      secondGroupSecondExercise = randomNumberTwo();

      thirdGroupFirstExercise = randomNumberTwo();
      thirdGroupSecondExercise = randomNumberTwo();
   } while (firstGroupFirstExercise === firstGroupSecondExercise || secondGroupFirstExercise === secondGroupSecondExercise || thirdGroupFirstExercise === thirdGroupSecondExercise);
    
    document.getElementById('generatedWorkout').style.display = 'block';
    document.getElementById('divWorkoutContainer').style.display = 'none';
    document.getElementById('footer').style.display = 'block';

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
            <td class='tdContent'>` + mainGroup[firstGroup][firstGroupFirstExercise] + `</td>
            <td class='tdContent'>4</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'>` + mainGroup[firstGroup][firstGroupSecondExercise] + `</td>
            <td class='tdContent'>2</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'>` + mainGroup[secondGroup][secondGroupFirstExercise] + `</td>
            <td class='tdContent'>4</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'>` + mainGroup[secondGroup][secondGroupSecondExercise] + `</td>
            <td class='tdContent'>2</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'>` + mainGroup[thirdGroup][thirdGroupFirstExercise] + `</td>
            <td class='tdContent'>4</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'>` + mainGroup[thirdGroup][thirdGroupSecondExercise] + `</td>
            <td class='tdContent'>2</td>
            <td class='tdContent'>12</td>
         </tr>
        </table>
    `;
}

generateFullBodySecondaryGroupDay = () => {
    let firstGroup;
    let secondGroup;
    let thirdGroup;

    let firstGroupFirstExercise;
    let firstGroupSecondExercise;

    let secondGroupFirstExercise;
    let secondGroupSecondExercise;

    let thirdGroupFirstExercise;
    let thirdGroupSecondExercise;

    //Generating group order
   do{
      firstGroup = randomNumber();
      secondGroup = randomNumber();
      thirdGroup = randomNumber();
   } while (firstGroup === secondGroup || firstGroup === thirdGroup || secondGroup === thirdGroup);

   //Generating exercises numbers
   do{
      firstGroupFirstExercise = randomNumber();
      firstGroupSecondExercise = randomNumber();

      secondGroupFirstExercise = randomNumber();
      secondGroupSecondExercise = randomNumber();

      thirdGroupFirstExercise = randomNumber();
      thirdGroupSecondExercise = randomNumber();
   } while (firstGroupFirstExercise === firstGroupSecondExercise || secondGroupFirstExercise === secondGroupSecondExercise || thirdGroupFirstExercise === thirdGroupSecondExercise);
    
    document.getElementById('generatedWorkout').style.display = 'block';
    document.getElementById('divWorkoutContainer').style.display = 'none';
    document.getElementById('footer').style.display = 'block';

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
       <td class='tdContent'>` + secondaryGroup[firstGroup][firstGroupFirstExercise] + `</td>
       <td class='tdContent'>4</td>
       <td class='tdContent'>12</td>
    </tr>

    <tr>
       <td class='tdContent'>` + secondaryGroup[firstGroup][firstGroupSecondExercise] + `</td>
       <td class='tdContent'>2</td>
       <td class='tdContent'>12</td>
    </tr>

    <tr>
       <td class='tdContent'>` + secondaryGroup[secondGroup][secondGroupFirstExercise] + `</td>
       <td class='tdContent'>4</td>
       <td class='tdContent'>12</td>
    </tr>

    <tr>
       <td class='tdContent'>` + secondaryGroup[secondGroup][secondGroupSecondExercise] + `</td>
       <td class='tdContent'>2</td>
       <td class='tdContent'>12</td>
    </tr>

    <tr>
       <td class='tdContent'>` + secondaryGroup[thirdGroup][thirdGroupFirstExercise] + `</td>
       <td class='tdContent'>4</td>
       <td class='tdContent'>12</td>
    </tr>

    <tr>
       <td class='tdContent'>` + secondaryGroup[thirdGroup][thirdGroupSecondExercise] + `</td>
       <td class='tdContent'>2</td>
       <td class='tdContent'>12</td>
    </tr>
   </table>
    `;
}

randomNumber = () => {
    return parseInt(0 + (3 - 0) * Math.random());
}

randomNumberTwo = () => {
   return parseInt(0 + (4 - 0) * Math.random());
}