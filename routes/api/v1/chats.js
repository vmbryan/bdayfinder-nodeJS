const express = require('express')
const router = express.Router()
const chatsController = require('../../../controllers/api/v1/c.chats')
/* /api/v1/chat */

/* Router om chats op te halen uit DB */
router.get("/", chatsController.getAll)

/* router om chat te posten naar DB */
router.post("/", chatsController.create)

module.exports  = router




