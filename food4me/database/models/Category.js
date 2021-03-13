const CategoryModel =(sequelize,dataTypes)=>{
    
    let alias = "Categoria";
    let cols={
        id:{
            type:dataTypes.INTERGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        categories:{
            allowNull:false,
        },
       
    };
    let config={
        tableNane="categories",
        timestamps=true,
        
    }

   
   
    const Category = sequelize.define(alias, cols, config);
    
    Category.associate=function(models){
        Category.belongsTo(models.productos, {
            as : 'productos',
            foreingKey : 'category_id'
        })    

    }
    
    return Category
}

module.exports =CategoryModel;