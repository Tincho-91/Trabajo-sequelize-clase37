module.exports = (sequelize, DataTypes) => {
    let alias = "Movies";

    let cols = {
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title:{
            type: DataTypes.STRING(500),
            allowNull: false
        },

        rating:{
            type: DataTypes.DECIMAL(3,1),
            allowNull: false
        },

        awards:{
            type: DataTypes.INTEGER,
            allowNull: false
        },

        release_date:{
            type: DataTypes.DATE,
            allowNull: false
        },

        length:{
            type: DataTypes.INTEGER
        },

        genre_id:{
            type: DataTypes.INTEGER,
        },

         createdAt: {
    type: DataTypes.DATE,
    field: 'createdAt'
     },

     updatedAt: {
    type: DataTypes.DATE,
    field: 'updatedAt'
    }

    }

    let config = {
        tablename: "movies",
        timestamps: "true"

    }


    const Movies = sequelize.define(alias, cols, config);

    return Movies;
}