const fs = require('fs');
const path = require('path')
const product_db = path.join('data','products.json');
module.exports = {
    getProduct: ()=> JSON.parse(fs.readFileSync(__dirname + "/products.json", "utf-8")),
    setProduct: (data) => {
        fs.writeFileSync(
            product_db,            
            JSON.stringify(data, null, 2), //null y 2 deja indentado de forma legible el JSON
            "utf-8"
        );
    },
};