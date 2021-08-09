import React from "react";
import { minutesToDuration, secondsToDuration } from '../utils/duration'


  export default function TimerInfo({session, focusDuration, breakDuration}){
    if(session){
    const duration = session?.label==="Focusing" ? minutesToDuration(focusDuration) : minutesToDuration(breakDuration)

    const remainder = session?.label==null ? 0 : session?.timeRemaining
    return(
  <div className="row mb-2">
  <div className="col">
    {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
    <h2 data-testid="session-title">
      {session?.label} for {duration} minutes
    </h2>
    {/* TODO: Update message below correctly format the time remaining in the current session */}
    <p className="lead" data-testid="session-sub-title">
      {secondsToDuration(remainder)} remaining
    </p>
  </div>
</div>)}else{return null}}