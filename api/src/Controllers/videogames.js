const {Videogame} = require('../db.js');
const Vg = {};

Vg.createVideogame = async(name, description, platform, releaseDate, rating, image)=>{
    const newVideogame = await Videogame.create({
        name, 
        description, 
        platform, 
        releaseDate, 
        rating, 
        image 
    });

    return newVideogame
}

Vg.getAll = async()=>{
    const result = await Videogame.findAll();
    return result;
    
}



module.exports = Vg;