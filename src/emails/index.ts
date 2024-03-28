import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', async (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
})

app.get('/carts', async (req: Request, res: Response) => {
   try {
        const response = await axios.get('http://carts:9100/');
        res.send(`This is the carts service response: ${response.data}`);
    } catch (error: any) {
        res.send(`Carts returns an error: ${JSON.stringify(error)}`);
    }
})

app.get('/users', async (req: Request, res: Response) => {
    try {
         const response = await axios.get('http://users:3000/');
         res.send(`This is the users service response: ${response.data}`);
     } catch (error: any) {
         res.send(`Users returns an error: ${JSON.stringify(error)}`);
     }
 })
 

app.listen(port, () => {
    console.log(`Server is Fire at port: ${port}`);
})