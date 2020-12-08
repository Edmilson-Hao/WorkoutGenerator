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

    /* Firs Group is Chest
    -----------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------
    ----------------------------------------------------------------------------------------------- */
    if (firstExercise === 1){
        document.getElementById('divWorkoutContainer').style.display = 'none';
        document.getElementById('generatedWorkout').style.display = 'block';
        document.getElementById('generatedWorkout').innerHTML += `
            <table class='tableResult'>
                <tr>
                    <td>` + chest[randomNumber()].name + `</td>
                
                    <td>3</td>
                
                    <td>12</td>
                </tr>
            </table>
        `;

        if(secondExercise === 2) {
            document.getElementById('generatedWorkout').innerHTML += `
            <table class='tableResult'>
                <tr>
                    <td>` + back[randomNumber()].name + `</td>
                
                    <td>3</td>
                
                    <td>12</td>
                </tr>

                <tr>
                    <td>` + legs[randomNumber()].name + `</td>
                
                    <td>3</td>
                
                    <td>12</td>
                </tr>
            </table>
        `;

        } else if (secondExercise === 3) {
            document.getElementById('generatedWorkout').innerHTML += `
            <table class='tableResult'>
                <tr>
                    <td>` + legs[randomNumber()].name + `</td>
                
                    <td>3</td>
                
                    <td>12</td>
                </tr>

                <tr>
                    <td>` + back[randomNumber()].name + `</td>
                
                    <td>3</td>
                
                    <td>12</td>
                </tr>
            </table>
        `;
        }
    /* Firs Group is Back
    -----------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------
    ----------------------------------------------------------------------------------------------- */
    } else if (firstExercise === 2){
        document.getElementById('divWorkoutContainer').style.display = 'none';
        document.getElementById('generatedWorkout').style.display = 'block';
        document.getElementById('generatedWorkout').innerHTML += `
            <table class='tableResult'>
                <tr>
                    <td>` + back[randomNumber()].name + `</td>
                
                    <td>3</td>
                
                    <td>12</td>
                </tr>
            </table>
        `;

        if(secondExercise === 2) {
            document.getElementById('generatedWorkout').innerHTML += `
            <table class='tableResult'>
                <tr>
                    <td>` + chest[randomNumber()].name + `</td>
                
                    <td>3</td>
                
                    <td>12</td>
                </tr>

                <tr>
                    <td>` + legs[randomNumber()].name + `</td>
                
                    <td>3</td>
                
                    <td>12</td>
                </tr>
            </table>
        `;

        } else if (secondExercise === 3) {
            document.getElementById('generatedWorkout').innerHTML += `
            <table class='tableResult'>
                <tr>
                    <td>` + legs[randomNumber()].name + `</td>
                
                    <td>3</td>
                
                    <td>12</td>
                </tr>

                <tr>
                    <td>` + chest[randomNumber()].name + `</td>
                
                    <td>3</td>
                
                    <td>12</td>
                </tr>
            </table>
        `;
        }
    /* Firs Group is Legs
    -----------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------
    ----------------------------------------------------------------------------------------------- */
    } else if (firstExercise === 3){
        document.getElementById('divWorkoutContainer').style.display = 'none';
        document.getElementById('generatedWorkout').style.display = 'block';
        document.getElementById('generatedWorkout').innerHTML += `
            <table class='tableResult'>
                <tr>
                    <td>` + legs[randomNumber()].name + `</td>
                
                    <td>3</td>
                
                    <td>12</td>
                </tr>
            </table>
        `;

        if(secondExercise === 2) {
            document.getElementById('generatedWorkout').innerHTML += `
            <table class='tableResult'>
                <tr>
                    <td>` + back[randomNumber()].name + `</td>
                
                    <td>3</td>
                
                    <td>12</td>
                </tr>

                <tr>
                    <td>` + chest[randomNumber()].name + `</td>
                
                    <td>3</td>
                
                    <td>12</td>
                </tr>
            </table>
        `;

        } else if (secondExercise === 3) {
            document.getElementById('generatedWorkout').innerHTML += `
            <table class='tableResult'>
                <tr>
                    <td>` + chest[randomNumber()].name + `</td>
                
                    <td>3</td>
                
                    <td>12</td>
                </tr>

                <tr>
                    <td>` + back[randomNumber()].name + `</td>
                
                    <td>3</td>
                
                    <td>12</td>
                </tr>
            </table>
        `;
        }
    }
}

randomNumber = () => {
    return parseInt(0 + (3 - 0) * Math.random());
}