module.exports = (sequelize,dataTypes) =>{

    let alias = 'Roles';

    let cols= {
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        roles:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
    };

    let config ={
        tableName : 'roles',
        timestamps : false
    }

    const Rol = sequelize.define(alias, cols, config)

    Rol.associate = function(models) {
        Rol.hasMany(models.Usuarios,{
            as : 'usuarios',
            foreignKey : 'rol_id'
        })
    }

    return Rol

}