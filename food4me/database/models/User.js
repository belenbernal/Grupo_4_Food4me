module.exports = (Sequelize,dataTypes) =>{

    const alias = 'usuarios';

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
        timestamps : false,
        underscored: true
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
        User.belongsToMany(models.productos, {
            as: 'productos',
            through: 'carts',
            foreignKey: 'user_id',
            otherKey: 'product_id',
            timestamps: false
        });
        User.belongsTo(models.roles,{
            as : 'rol',
            foreignKey : 'rol_id',
            timestamps: false  // es necesario aclarar aca?
        })
    }

    return User

}