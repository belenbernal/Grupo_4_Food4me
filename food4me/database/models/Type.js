module.exports = (sequelize, dataTypes) => {
    
    const alias = "Tipos"

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
        timestamp : false
    }

    const Type = sequelize.define(alias, cols, config);

    Type.associate = (models) => {
        Type.belongsToMany(models.Productos, {
            as : 'tipoProducto',
            through : 'product_type',
            foreignKey: 'type_id',
            otherKey : 'product_id',
            timestamp : false
        });
    }
    return Type
}