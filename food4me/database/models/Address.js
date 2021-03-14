module.exports = (sequelize,dataTypes)=>{
    
    let alias = "direccion";
    let cols={
        id:{
            type:dataTypes.INTERGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        calle:{
            type:dataTypes.STRING(45),
            allowNull:false,
        },
        altura:{
            type:dataTypes.STRING(45),
            allowNull:false,
        },
        localidad:{
            type:dataTypes.STRING(45),
            allowNull:false,
        },
        provincia:{
            type:dataTypes.STRING(45),
            allowNull:false,
        },
    };
    let config={
        tableNane:"addresses",
        timestamps:false,
        
    }

    const Address = sequelize.define(alias, cols, config);

    Address.associate=function(modelos){
        address.belongsTo(modelos.Cliente,{
            ass:"client",
            foreignKey:"userAddress_id",
        });
    }
    
    return Address
}

