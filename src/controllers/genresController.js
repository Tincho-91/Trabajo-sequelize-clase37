const db = require('../database/models/index');

const genresController = {

list: (req, res) => {
    db.Genres.findAll()
     .then(function(genres){
        res.render("genresList",{genres:genres})
     })
},

detail: (req, res) => {
db.Genres.findByPk(req.params.id)
.then(function(genres){
    res.render("genresDetail",{genres:genres})
})
}
}

module.exports = genresController;