module.exports = (sequelize, dataTypes) => {
    
    const alias = "tipos"

    const cols = {

        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull : false,
            primaryKey : true
        },

        types : {
            type : dataTypes.STRING(45),
            allowNull : false
        }

       
    }

    const config = {
        tableName : 'types',
        timesTamps : false
    }

    const tipos = sequelize.define(alias, cols, config);

    tipos.associate = (models) => {
        tipos.belongsToMany(models.productos, {
            as : 'productos',
            through : 'product_type',
            foreingKey: 'type_id',
            otherKey : 'product_id',
            timesTamps : false
        });
    }
    return tipos
}