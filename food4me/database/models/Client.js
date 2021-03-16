module.exports =(sequelize,dataTypes)=>{
    
    let alias = "clientes";
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
        Client.belongsTo(models.direcciones,{
            as:"direccion",
            foreignKey:"address_id",
        }),
        Client.hasMany(models.productos, {
                as : 'productos',
                foreingKey : 'client_id'
            }),
        Client.hasMany(models.usuarios, {
                as : 'usuarios',
                foreingKey : 'client_id'
            }) 
        }
    
    return Client
}

