import {changePassword,updateUser,deleteUser, softDelete} from './user.controller.js'
import { auth } from '../../middleware/authanticaion.js'
import {Router} from 'express'
const router=Router()

router.patch('/',auth,changePassword)
router.put('/',auth,updateUser)
router.delete('/',auth,deleteUser)
router.delete('/softDelete',auth,softDelete)




export default router