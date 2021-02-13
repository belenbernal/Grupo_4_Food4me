module.exports = {
    getProducts: ()=> JSON.parse(fs.readFileSync(__dirname + "/products.json", "utf-8")),
};