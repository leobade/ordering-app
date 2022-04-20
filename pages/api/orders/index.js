import dbConnect from "../../../util/mongo"
import Orders from "../../../models/Orders"

export default async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    if (method === 'GET') {
        try {
            const order = await Orders.find();
            res.status(201).json(order)
        } catch (err) {
            res.status(400).json(err)
        }
    }
    if (method === 'POST') {
        try {
            const order = await Orders.create(req.body)
            res.status(201).json(order)
        } catch (err) {
            res.status(400).json(err)
        }
    }
    
}