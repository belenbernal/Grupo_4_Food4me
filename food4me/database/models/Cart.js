module.exports = (sequelize,dataTypes) =>{

    const alias = 'Carts';

    let cols= {
        id:{
            type:dataTypes.INTEGER(11).UNSIGNED,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        cantidad:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        product_id:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        user_id:{
            type:dataTypes.INTEGER(11),
            defaultValue: null
        }
    }

    const config ={
        tableName : 'carts',
        timestamps : false
    }

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = (models) => {
        Cart.belongsTo(models.Usuarios, { //alias
            as: 'usuario',
            foreignKey: 'user_id'
        });
        Cart.belongsTo(models.Productos, {
            as: 'producto',
            foreignKey: 'product_id'
        })
    }

    return Cart

}