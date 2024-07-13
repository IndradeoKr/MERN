const express=require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}=require('../controller/workoutController')
const router=express.Router()

//GET all request
router.get('/',getWorkouts)

//GET a single request
router.get('/:id',getWorkout)

//POST a request
router.post('/',createWorkout)

//Delete
router.delete('/:id',deleteWorkout)

//Update a request
router.patch('/:id',updateWorkout)

module.exports=router