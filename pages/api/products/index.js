import dbConnect from "../../../util/mongo";
import Products from "../../../models/Products";

export default async function handler (req, res){
    const {method, cookies} = req;
    
    const token = cookies.token;

    
    dbConnect()
    if (method === 'GET') {
        try {
            const product = await Products.find();
            res.status(201).json(product)
        } catch (err) {
            res.status(400).json(err)
        }
    }
    if(method === 'POST'){
        try{
            if(!token || token !== process.env.TOKEN){
                return res.status(400).json('No permission')
            }
            const product = await Products.create(req.body)
            res.status(201).json(product)
        }catch(err){
            res.status(400).json(err)
        }
    }
}