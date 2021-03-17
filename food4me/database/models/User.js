module.exports = (sequelize,dataTypes) =>{

    const alias = 'Usuarios';

    let cols= {
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        name:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        last_name:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        email:{
            type:dataTypes.STRING(45),
            allowNull:false,
            unique: true
        },
        pass:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        image:{
            type:dataTypes.STRING(45),
            defaultValue: null
        },
        date:{
            type:dataTypes.DATE,
            allowNull:false
        },
        userAddress_id:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        rol_id:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        client_id:{
            type:dataTypes.INTEGER(11),
            defaultValue: null
        }
    }

    const config ={
        tableName : 'users',
        timestamps : false
        
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
        User.belongsToMany(models.Productos, {
            as: 'carrito',
            through: 'carts',
            foreignKey: 'user_id',
            otherKey: 'product_id',
            timestamps: false
        });
        User.belongsTo(models.Roles,{
            as : 'rol',
            foreignKey : 'rol_id'
        });
        User.belongsTo(models.Direcciones,{
            as : 'direccion',
            foreignKey : 'userAddress_id'
        });
        User.belongsTo(models.Clientes,{
            as : 'cliente',
            foreignKey : 'client_id'
        })
    }

    return User

}