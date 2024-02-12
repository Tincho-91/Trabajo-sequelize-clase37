const db = require('../database/models/index');

const moviesController = {
list: (req, res) => {
     db.Movies.findAll()
     .then(function(movies){
        res.render("moviesList",{movies:movies})
     })
},

new: (req, res) => {
    db.Movies.findAll({ 
        order:[
        ["release_date", "ASC"]
    ]})
    .then(function(movies){
       res.render("newestMovies",{movies:movies})
    })
},

recomended: (req, res) => {
    db.Movies.findAll({ 
      order:[
        ["rating", "DESC"]
    ],
    limit:5
})
        
    .then(function(movies){
       res.render("recommendedMovies",{movies:movies})
    })
},

detail: (req, res) => {
    db.Movies.findByPk(req.params.id)
    .then(function(movies){
        res.render("moviesDetail",{movies:movies})
    })
},
}

module.exports = moviesController;