import dbConnect from "../../../util/mongo"
import Orders from "../../../models/Orders"

export default async function handler(req, res) {
    const { method, query: { id } } = req;
    await dbConnect();
    if (method === 'GET') {
        try {
            const order = await Orders.findById(id);
            res.status(201).json(order)
        } catch (err) {
            res.status(400).json(err)
        }
    }
    if (method === 'PUT') {
        try {
            const order = await Orders.create(req.body)
            res.status(201).json(order)
        } catch (err) {
            res.status(400).json(err)
        }
    }
    if (method === 'DELETE') {
        try {
            const order = await Orders.create(req.body)
            res.status(201).json(order)
        } catch (err) {
            res.status(400).json(err)
        }
    }
}