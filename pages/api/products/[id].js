import dbConnect from "../../../util/mongo";
import Products from "../../../models/Products";

export default async function handler(req, res) {
    const { method, query:{id} } = req;
    dbConnect()
    if (method === 'GET') {
        try {
            const product = await Products.findById(id);
            res.status(201).json(product)
        } catch (err) {
            res.status(400).json(err)
        }
    }
    if (method === 'PUT') {
        try {
            const product = await Products.create(req.body)
            res.status(201).json(product)
        } catch (err) {
            res.status(400).json(err)
        }
    }
    if (method === 'DELETE') {
        try {
            const product = await Products.create(req.body)
            res.status(201).json(product)
        } catch (err) {
            res.status(400).json(err)
        }
    }
}