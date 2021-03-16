module.exports = (sequelize,dataTypes)=>{
    
    let alias = "direcciones";
    let cols={
        id:{
            type : dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        calle:{
            type : dataTypes.STRING(45),
            allowNull:false,
        },
        altura:{
            type : dataTypes.STRING(45),
            allowNull:false,
        },
        localidad:{
            type : dataTypes.STRING(45),
            allowNull:false,
        },
        provincia:{
            type : dataTypes.STRING(45),
            allowNull:false,
        },
    };
    let config={
        tableName : "addresses",
        timestamps : false,
        
    }

    const Address = sequelize.define(alias, cols, config);

    Address.associate=function(models){
        Address.hasMany(models.clientes,{
            as:"clientes",
            foreignKey:"address_id",
        });
        Address.associate=function(models){
            Address.hasMany(models.usuarios,{
                as:"usuarios",
                foreignKey:"userAddress_id",
            }); 
        }
    }
    
    return Address
}

