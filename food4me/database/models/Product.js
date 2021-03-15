module.exports = (sequelize, dataTypes) => {
    
    const alias = "productos"

    const cols = {

        id : {
            type : dataTypes.INTEGER(11),
            autoIncrement: true,
            allowNull : false,
            primaryKey : true
        },

        name : {
            type : dataTypes.string(45),
            allowNull : false
        },

        description : {
            type : dataTypes.string(300),
            allowNull : false
        },

        price : {
            type : dataTypes.DECIMAL(6,2),
            allowNull : false
        },

        image : {
            type : dataTypes.string(45),
            allowNull : false
        },

        category_id : {
            type : dataTypes.INTEGER,
            allowNull : false
        },

        type_id : {
            type : dataTypes.INTEGER,
            allowNull :false
        },

        client_id : {
            type : dataTypes.INTEGER,
            allowNull : false
        }


    }

    const config = {
        tableName : 'products',
        underscore : true,
        timesTamps : false
    }

    const Product = sequelize.define(alias, cols, config);
       

    Product.associate = (models) => {

        Product.belongsTo(models.clientes, {
            as : 'cliente',
            foreingKey : 'client_id'
        })

        Product.belongsTo(models.categorias, {
            as : 'categoria',
            foreingKey : 'category_id'
        })
    
    
        Product.belongsToMany(models.tipos, {
            as : 'tipoProducto',
            through : 'product_type',
            foreingKey: 'product_id',
            otherKey : 'type_id',
            timesTamps : false
        });

        Product.belongsToMany(models.usuario, {
            as : 'usuario',
            through : 'carts',
            foreingKey: 'product_id',
            otherKey : 'user_id',
            timesTamps : false
        });
    }

    return Product
}