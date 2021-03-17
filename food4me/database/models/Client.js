module.exports =(sequelize,dataTypes)=>{
    
    let alias = "Clientes";
    let cols={
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        name:{
            type:dataTypes.STRING(45),
            allowNull:false,
        },
        phone:{
            type:dataTypes.INTEGER(11),
            allowNull:false,
        },
        address_id:{
            type:dataTypes.INTEGER(11),
            allowNull:false,
        },
        
    };
    let config={
        tableName : "clients",
        timestamps : false
        
    }

    const Client = sequelize.define(alias, cols, config);
    
    Client.associate=function(models){
        Client.belongsTo(models.Direcciones,{
            as:"direccion",
            foreignKey:"address_id",
        }),
        Client.hasMany(models.Productos, {
                as : 'productos',
                foreignKey : 'client_id'
            }),
        Client.hasMany(models.Usuarios, {
                as : 'usuarios',
                foreignKey : 'client_id'
            }) 
        }
    
    return Client
}

