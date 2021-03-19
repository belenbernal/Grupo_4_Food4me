module.exports = (sequelize, dataTypes) => {
    
    const alias = "TipoProductos"

    const cols = {

        id : {
            type : dataTypes.INTEGER(11),
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
        timestamps : false
    }

    const ProductType = sequelize.define(alias, cols, config);

    ProductType.associate = (models) => {

        ProductType.belongsTo(models.Tipos, {
            as : 'tipo',
            foreignKey : 'type_id'
        })

       ProductType.belongsTo(models.Productos, {
            as : 'producto',
            foreignKey : 'product_id'
        })
    }    
    return ProductType
}