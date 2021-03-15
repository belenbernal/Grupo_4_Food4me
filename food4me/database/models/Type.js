module.exports = (sequelize, dataTypes) => {
    
    const alias = "tipos"

    const cols = {

        id : {
            type : dataTypes.INTEGER(11),
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
        underscore: true,
        timesTamps : false
    }

    const Type = sequelize.define(alias, cols, config);

    Type.associate = (models) => {
        Type.belongsToMany(models.productos, {
            as : 'tipoProducto',
            through : 'product_type',
            foreingKey: 'type_id',
            otherKey : 'product_id',
            timesTamps : false
        });
    }
    return Type
}