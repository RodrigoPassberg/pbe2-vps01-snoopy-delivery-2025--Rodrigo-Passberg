const express = require('express');
const router = express.Router();

const Motorista = require('./controllers/Motorista');
const Pedido = require('./controllers/pedido');

router.get('/',(req, res)=>{
    res.json({titulo:'SNOOPY PetSHop'});
});

router.post('/Motoristas',Motorista.create);
router.get('/Motoristas',Motorista.read);
router.get('/Motoristas/:id',Motorista.readOne);
router.patch('/Motoristas/:id',Motorista.update);
router.delete('/Motoristas/:id',Motorista.remove);

router.post('/pedido',Pedido.create);
router.get('/pedidos',Pedido.read);
router.get('/pedidos/:id',Pedido.readOne);
router.patch('/pedidos/:id',Pedido.update);
router.delete('/pedidos/:id',Pedido.remove);

module.exports = router;