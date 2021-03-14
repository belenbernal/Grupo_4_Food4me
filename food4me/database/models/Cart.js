module.exports = (Sequelize,dataTypes) =>{

    const alias = 'carts';

    let cols= {
        id:{
            type:dataTypes.INTEGER(11),
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
        timestamps : false,
        underscored: true
    }

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = (models) => {
        Cart.belongsTo(models.usuarios, { //alias
            as: 'usuario',
            foreignKey: 'user_id'
        });
        Cart.belongsTo(models.productos, {
            as: 'producto',
            foreignKey: 'product_id'
        })
    }

    return Cart

}