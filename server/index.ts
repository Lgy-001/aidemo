import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import fs from 'fs';
import {completion} from './askQwen';
const app = express();
app.use(express.json());
app.use(cors())

    
let message:string=''
app.post('/api', async (req,res) =>{
    message=req.body.data
   const result= await completion(message)
   console.log(result); 
   
   res.send(result)
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});