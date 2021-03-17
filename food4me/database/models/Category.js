module.exports=(sequelize,dataTypes)=>{
    
    let alias = "Categorias";
    let cols={
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        categories:{
            type:dataTypes.STRING(45),
            allowNull:false,
        },
       
    };
    let config={
        tableName : "categories",
        timestamps : false
    }

   
   
    const Category = sequelize.define(alias, cols, config);
    
    Category.associate=function(models){
        Category.hasMany(models.Productos, {
            as : 'productos',
            foreingKey : 'category_id'
        })    

    }
    
    return Category
}

