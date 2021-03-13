const addressModel = (sequelize,dataTypes)=>{
    
    let alias = "direccion";
    let cols={
        id:{
            type:dataTypes.INTERGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        calle:{
            type:dataTypes.STRING,
            allowNull:false,
        },
        altura:{
            type:dataTypes.STRING,
            allowNull:false,
        },
        localidad:{
            type:dataTypes.STRING,
            allowNull:false,
        },
        provincia:{
            type:dataTypes.STRING,
            allowNull:false,
        },
    };
    let config={
        tableNane:"addresses",
        timestamps:true,
        
    }

    const Address = sequelize.define(alias, cols, config);

    Address.associate=function(modelos){
        address.belongsTo(modelos.Cliente,{
            ass:"client",
            foreignKey:"address_id",
        });
    }
    
    return Address
}

module.exports = addressModel