const { request } = require('express');
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) =>{
    res.json({message: "It's Alive"})
});

app.get('/explorers', async (req, res) =>{
    const allExplorers = await prisma.explorer.findMany({});
    res.json(allExplorers)
})

app.get('/explorers/:id', async (req, res) =>{
    const id =req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer)
})

app.post('/explorers', async (req, res) =>{
    const explorer ={
        name: req.body.name,
        username: req.body.username,
        mission: req.body.mission
    };
    const message = 'Explorer creado';
    await prisma.explorer.create({data: explorer});
    return res.json({messagegi })
})

app.put('/explorers/:id', async (req, res) =>{
    const id = parseInt(req.params.id);

    await prisma.explorers.update({
        where: {
            id: id
        },
        data:{
            mission: req.body.mission
        }
    })
    return res.json({message: "Actualizado correctamente"})
})

app.listen(port, () =>{
    console.log(`Listening to the request port ${port}`)
})