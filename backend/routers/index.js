const express = require("express");
const router = express.Router();

const {AllArtikel, ArtikelById, createArtikel, updateArtikel, deleteArtikel} = require("../controllers/Artikel.js");
 

router.get('/', AllArtikel);
router.get('/:id', ArtikelById); 
router.post('/', createArtikel);
router.patch('/:id', updateArtikel);
router.delete('/:id', deleteArtikel);
 
exports.artikelRouter = router;