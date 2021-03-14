module.exports =(sequelize,dataTypes)=>{
    
    let alias = "cliente";
    let cols={
        id:{
            type:dataTypes.INTERGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        name:{
            type:dataTypes.STRING(45),
            allowNull:false,
        },
        phome:{
            type:dataTypes.INTERGER,
            allowNull:false,
        },
        address_id:{
            type:dataTypes.INTERGER,
            allowNull:false,
        },
        
    };
    let config={
        tableNane="clients",
        timestamps=false,
        
    }

    const client = sequelize.define(alias, cols, config);
    
    client.associate=function(modelos){
        client.hasMany(modelos.direccion,{
            ass:"addresses",
            foreignKey:"address_id",
        }),
        client.belongsTo(models.productos, {
                as : 'productos',
                foreingKey : 'client_id'
            }),
       client.belongsTo(models.user, {
                as : 'usres',
                foreingKey : 'client_id'
            }) 
        }
    
    return Client
}

