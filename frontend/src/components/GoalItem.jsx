import { useDispatch } from 'react-redux'
import { deleteGoal , updateGoal  } from '../features/goals/goalSlice'
import { FaEdit } from "react-icons/fa";
import { useState } from 'react';

function GoalItem({ goal }) {
  const dispatch = useDispatch()
  const[showpopup,setshowpopup]=useState(false)
  const[text,settext]=useState(goal.text)
  const updategoal=(e)=>{
    e.preventDefault();
      setshowpopup(false)
      console.log(text)
      dispatch(updateGoal( { text,id:goal._id }))
  }

  return (
    <div className='goal'>
     {showpopup ? (<div>
      <form onSubmit={updategoal}>
        <input type='text' placeholder='Update your goal' 
        value={text} onChange={e=>settext(e.target.value)}></input>
        <button type='submit'>UpdateGoal</button>
      </form>
     </div>):(<div>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div> 
      <h2>{goal.text}</h2>
      <FaEdit onClick={() => setshowpopup(true)}/>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button>
     </div>) }

  

    </div>
  )
}

export default GoalItem