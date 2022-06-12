const {Artikel} = require("../models");
 
exports.AllArtikel = async (req, res) => {
    try {
        const artikel = await Artikel.findAll();
        res.json(artikel);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

exports.ArtikelById = async (req, res) => {
    try {
        const artikel = await Artikel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(artikel[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
exports.createArtikel = async (req, res) => {
    try {
        await Artikel.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
exports.updateArtikel = async (req, res) => {
    try {
        await Artikel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
exports.deleteArtikel = async (req, res) => {
    try {
        await Artikel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}