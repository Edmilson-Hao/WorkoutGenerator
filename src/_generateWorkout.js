generateFullBodyMainGroupDay = () => {
    var firstExercise = randomNumber();
    var secondExercise;
    var thirdExercise;

    do {
        secondExercise = randomNumber();
    } while (secondExercise === firstExercise);

    do {
        thirdExercise = randomNumber();
    } while (thirdExercise === secondExercise || thirdExercise === firstExercise);

    
    document.getElementById('generatedWorkout').style.display = 'block';
    document.getElementById('divWorkoutContainer').style.display = 'none';

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
            <td class='tdContent'>` + mainGroup[firstExercise][randomNumber()] + `</td>
            <td class='tdContent'>4</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'>` + mainGroup[firstExercise][randomNumber()] + `</td>
            <td class='tdContent'>2</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'>` + mainGroup[secondExercise][randomNumber()] + `</td>
            <td class='tdContent'>4</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'>` + mainGroup[secondExercise][randomNumber()] + `</td>
            <td class='tdContent'>2</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'>` + mainGroup[thirdExercise][randomNumber()] + `</td>
            <td class='tdContent'>4</td>
            <td class='tdContent'>12</td>
         </tr>

         <tr>
            <td class='tdContent'>` + mainGroup[thirdExercise][randomNumber()] + `</td>
            <td class='tdContent'>2</td>
            <td class='tdContent'>12</td>
         </tr>
        </table>
    `;
}

randomNumber = () => {
    return parseInt(0 + (3 - 0) * Math.random());
}