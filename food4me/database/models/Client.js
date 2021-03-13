const ClientModel=(sequelize,dataTypes)=>{
    
    let alias = "Cliente";
    let cols={
        id:{
            type:dataTypes.INTERGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        name:{
            
            allowNull:false,
        },
        phome:{
            
            allowNull:false,
        },
        address_id:{
            
            allowNull:false,
        },
        
    };
    let config={
        tableNane="Clients",
        timestamps=true,
        
    }

    const Client = sequelize.define(alias, cols, config);
    
    Client.associate=function(modelos){
        client.hasMany(modelos.direccion,{
            ass:"addresses",
            foreignKey:"address_id",
        });
    }
    
    return Client
}

module.exports =ClientModel;