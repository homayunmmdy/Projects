import { ReactElement, useState } from "react";

export function useMultistepForm(steps : ReactElement[]) {
    const [currtentStepIndex , setCurrentStepIndex ] = useState(0)

    function next(){
        setCurrentStepIndex(i => {
            if(i >= steps.length -1 ) return i
            //if the current step index is less than the last index in the steps array. If so it increments the index by one
            return i + 1
        })
    }

    function back(){
        setCurrentStepIndex(i => {
            if(i <= 0 ) return i
            //if the current step index is greater than zero. If so , it decrement the index by one
            return i - 1
        })
    }

    function goTo(index : number){
        setCurrentStepIndex(index)
    }

    return{
        currtentStepIndex,
        setp: steps[currtentStepIndex],
        steps,
        isFirstStep : currtentStepIndex === 0,
        isLastStep : currtentStepIndex === steps.length - 1,
        goTo,
        next,
        back,
    }

}