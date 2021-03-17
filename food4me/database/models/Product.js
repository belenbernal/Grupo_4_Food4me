module.exports = (sequelize, dataTypes) => {
    
    const alias = "Productos"

    const cols = {

        id : {
            type : dataTypes.INTEGER(11),
            autoIncrement: true,
            allowNull : false,
            primaryKey : true
        },

        name : {
            type : dataTypes.STRING(45),
            allowNull : false
        },

        description : {
            type : dataTypes.STRING(300),
            allowNull : false
        },

        price : {
            type : dataTypes.DECIMAL(6,2),
            allowNull : false
        },

        image : {
            type : dataTypes.STRING(45),
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
        timestamps : false,
        underscored: true
    }

    const Product = sequelize.define(alias, cols, config);
       

    Product.associate = (models) => {

        Product.belongsTo(models.Clientes, {
            as : 'cliente',
            foreingKey : 'client_id'
        })

        Product.belongsTo(models.Categorias, {
            as : 'categoria',
            foreingKey : 'category_id'
        })
    
    
        Product.belongsToMany(models.Tipos, {
            as : 'tipoProducto',
            through : 'product_type',
            foreingKey: 'product_id',
            otherKey : 'type_id',
            timestamp : false
        });

        Product.belongsToMany(models.Usuarios, {
            as : 'carrito',
            through : 'carts',
            foreingKey: 'product_id',
            otherKey : 'user_id',
            timestamp : false
        });
    }

    return Product
}