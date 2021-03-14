module.exports=(sequelize,dataTypes)=>{
    
    let alias = "Categoria";
    let cols={
        id:{
            type:dataTypes.INTERGER,
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
        tableNane="categories",
        timestamps=false,
        
    }

   
   
    const Category = sequelize.define(alias, cols, config);
    
    Category.associate=function(models){
        Category.hasMany(models.productos, {
            as : 'productos',
            foreingKey : 'category_id'
        })    

    }
    
    return Category
}

module.exports 