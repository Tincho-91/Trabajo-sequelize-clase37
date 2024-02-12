module.exports = (sequelize, DataTypes) => {
    let alias = "Genres";

    let cols = {
        id: { 
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },

        ranking:{
            type:DataTypes.INTEGER,
            allowNull: false
        },

        active:{
            type: DataTypes.INTEGER(1)
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
        tablename: "genres",
        timestamps: true
        
    }

    const Genres = sequelize.define(alias, cols, config);

    return Genres;
}



