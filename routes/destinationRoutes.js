const router = require('express').Router();
const {allDestination,preferDestination,prefer,addNewDestination,createNewDestination}=require('../controllers/destinationControler')
const {isAuthenticate,saveUrl} = require('../middleWare');

router.get('/all_destination',allDestination)
router.get('/add_new_destination',isAuthenticate,addNewDestination)
router.post('/add_new_destination',isAuthenticate,createNewDestination)


router.get('/prefer',prefer)
router.post('/prefer',isAuthenticate,preferDestination)

module.exports=router