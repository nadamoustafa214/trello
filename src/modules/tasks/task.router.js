import {Router} from 'express'
const router=Router()
import { auth } from '../../middleware/authanticaion.js'
import { addTask,updateTask ,deleteTask,getAllTasks,getTasks,tasksNotDone} from './task.controller.js'


router.post('/',auth,addTask)
router.put('/',auth,updateTask)
router.delete('/',auth,deleteTask)
router.get('/',auth,getAllTasks)
router.get('/gettasks',auth,getTasks)

router.get('/tasksNotDone',auth,tasksNotDone)



export default router