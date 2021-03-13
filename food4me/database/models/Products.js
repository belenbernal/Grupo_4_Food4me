module.exports = (sequelize, dataTypes) => {
    
    const alias = "productos"

    const cols = {

        id : {
            type : dataTypes.INTEGER.UNSIGNED,
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
        timesTamps : false
    }

    const productos = sequelize.define(alias, cols, config);
       

    productos.associate = (models) => {

        productos.belongsTo(models.clientes, {
            as : 'clientes',
            foreingKey : 'client_id'
        })

        productos.belongsTo(models.categorias, {
            as : 'categorias',
            foreingKey : 'category_id'
        })    
    
    
        productos.belongsToMany(models.tipos, {
            as : 'tipos',
            through : 'product_type',
            foreingKey: 'product_id',
            otherKey : 'type_id',
            timesTamps : false
        });
    }

    return productos
}