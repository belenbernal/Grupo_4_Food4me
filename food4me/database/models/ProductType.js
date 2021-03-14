module.exports = (sequelize, dataTypes) => {
    
    const alias = "tipoProductos"

    const cols = {

        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull : false,
            primaryKey : true
        },

        type_id : {
            type : dataTypes.INTEGER,
            allowNull : false
        },

        product_id : {
            type : dataTypes.INTEGER,
            allowNull : false
        }

       
    }

    const config = {
        tableName : 'product_type',
        underscore: true,
        timesTamps : false
    }

    const ProductType = sequelize.define(alias, cols, config);

    ProductType.associate = (models) => {

        ProductType.belongsTo(models.tipos, {
            as : 'tipo',
            foreingKey : 'type_id'
        })

       ProductType.belongsTo(models.productos, {
            as : 'producto',
            foreingKey : 'product_id'
        })
    }    
    return ProductType
}