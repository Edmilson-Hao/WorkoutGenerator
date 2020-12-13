window.addEventListener('load', e => {
    if('serviceWorker' in navigator){
        try{
            navigator.serviceWorker.register('sw.js');
            console.log('ServiceWorker registrado.');
        } catch (error){
            console.log('ServideWorker falhou.');
        }
    }
});








workoutDayPopulate = () => {
    let splitSelected = document.getElementById('workoutSplitSelector').value;

    switch ( splitSelected) {
        case '':
            document.getElementById('fullBodySplit').style.display = 'none';
            document.getElementById('upperLowerSplit').style.display = 'none';
            document.getElementById('pushPullLegsSplit').style.display = 'none';
        break;

        case 'fullBodySplit':
            document.getElementById('fullBodySplit').style.display = 'block';
            document.getElementById('upperLowerSplit').style.display = 'none';
            document.getElementById('pushPullLegsSplit').style.display = 'none';
        break;

        case 'upperLowerSplit':
            document.getElementById('fullBodySplit').style.display = 'none';
            document.getElementById('upperLowerSplit').style.display = 'block';
            document.getElementById('pushPullLegsSplit').style.display = 'none';
        break;
        
        case 'pushPullLegsSplit':
            document.getElementById('fullBodySplit').style.display = 'none';
            document.getElementById('upperLowerSplit').style.display = 'none';
            document.getElementById('pushPullLegsSplit').style.display = 'block';
        break;
    }
}

generateWorkout = () => {
    workoutSplitSelector = document.getElementById('workoutSplitSelector').value;

    fullBodySplit = document.getElementById('fullBodySplit').value;
    upperLowerSplit = document.getElementById('upperLowerSplit').value;
    pushPullLegsSplit = document.getElementById('pushPullLegsSplit').value;
    

    if( workoutSplitSelector === ''){
        swal("Select a Split option!");
    } else {
        switch (workoutSplitSelector) {
            case 'fullBodySplit':
                if(fullBodySplit === ''){
                    swal("Select a Split option!");
                } else if(fullBodySplit === 'fullBodyMainGroupDay'){
                    exerciseArray = mainGroup;
                    generateFullBodyWorkout();
                } else if (fullBodySplit === 'fullBodySecondaryGroupDay'){
                    exerciseArray = secondaryGroup;
                    generateFullBodyWorkout();
                }
            break;

            case 'upperLowerSplit':
                if(upperLowerSplit === ''){
                    swal("Select a Split option!");
                } else if(upperLowerSplit === 'upperBodyMainGroupDay'){
                    generateUpperLowerWorkout();
                } else if (upperLowerSplit === 'lowerBodySecondaryGroupDay'){
                    generateUpperLowerWorkout();
                }
            break;

            case 'pushPullLegsSplit':
                if(pushPullLegsSplit === ''){
                    swal('Select a Split option!');
                } else if(pushPullLegsSplit === 'pushDay'){
                    generatePushPullLegsWorkout();
                } else if (pushPullLegsSplit === 'pullDay'){
                    generatePushPullLegsWorkout();
                } else if (pushPullLegsSplit === 'legsDay'){
                    generatePushPullLegsWorkout();
                }
            break;
        }
    }
}