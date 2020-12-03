generateWorkout = () => {
    
}


(checkForSplit = () => {
    if(document.getElementById('workoutSplitSelector').value === 'fullBodySplit'){
        alert('Hello World!');
    }
    setTimeout(() => { console.log('1.5seconds') }, 1500);
    checkForSplit();
})();