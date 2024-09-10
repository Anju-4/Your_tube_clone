import express from "express"
import { login } from "../Controllers/Auth.js"
import { updatechaneldata,getallchannels } from "../Controllers/channel.js";
const routes=express.Router();

routes.post('/login',login)
routes.patch('/update/:id',updatechaneldata)
routes.get('/getallchannel',getallchannels)
export default routes;