import { useEffect,useState } from "react"

const Home=()=>{
    const [workouts, setWorkouts]=useState(null)

    useEffect(()=>{
        const fetchWorkouts=async()=>{
            const response=await fetch('/api/workouts/')
            const json= await response.json()

            if(response.ok)
            {
                setWorkouts(json)
                // return (<div>home</div>)
            }
        }

        fetchWorkouts()
    },[])
    // console.log(workouts);

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=> {
                    return(
                    <p key={workout._id}>{workout.title}</p>
                )})
}
            </div>
        </div>
    )
}

export default Home