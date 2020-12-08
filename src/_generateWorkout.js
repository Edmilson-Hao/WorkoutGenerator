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
    
    if (firstExercise === 1){
        document.getElementById('generatedWorkout').style.display = 'block';
        document.getElementById('generatedWorkout').innerHTML += `
            <p>Peito</p>
        `;
    } else if (firstExercise === 2){
        document.getElementById('generatedWorkout').style.display = 'block';
        document.getElementById('generatedWorkout').innerHTML += `
            <p>Back</p>
        `;
    } else if (firstExercise === 3){
        document.getElementById('generatedWorkout').style.display = 'block';
        document.getElementById('generatedWorkout').innerHTML += `
            <p>Legs</p>
        `;
    }



}

randomNumber = () => {
    return parseInt(1 + (4 - 1) * Math.random());
}