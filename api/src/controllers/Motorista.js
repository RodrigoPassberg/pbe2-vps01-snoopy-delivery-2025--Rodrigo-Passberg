const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const Motorista = await prisma.Motorista.create({
            data: req.body
        });
        res.status(201).json(Motorista).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const read = async (req, res) => {
    const Motoristas = await prisma.Motorista.findMany({
        include:{
            telefones: true
        }
    });
    res.json(Motoristas);
}

const readOne = async (req, res) => {
    const Motoristas = await prisma.Motorista.findMany({
        where:{
            id: Number(req.params.id)
        },
        include:{
            telefones:true,
            pedidos: true
        }
    });
    res.json(Motoristas);
}

const update = async (req, res) => {
    try {
        const Motorista = await prisma.Motorista.update({
            data: req.body,
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(202).json(Motorista).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const remove = async (req, res) => {
    try {
        const Motorista = await prisma.Motorista.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(204).json(Motorista).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}