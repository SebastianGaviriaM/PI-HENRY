const express = require('express');
const routerVideogame = express.Router();
const videoGame = require('../Controllers/videogames');

routerVideogame.get('/', async(req, res) =>{
    const AllVideogames = await videoGame.getAll();
    res.json(AllVideogames[0]);
})


routerVideogame.post('/', async(req, res) =>{
    const { name, description, platform,releaseDate,rating,image } = req.body;
    const result = await videoGame.createVideogame(name, description, platform,releaseDate,rating,image);
    res.json({
        status:200,
        respuesta: `Se ha creado el usuario ${name}`
    });
});


module.exports = routerVideogame;