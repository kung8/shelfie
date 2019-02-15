module.exports = {
    getProducts: (req,res) => {
        const db = req.app.get('db');
        db.get_inventory().then(response =>{
            res.status(200).send(response)
        }).catch(err=>{
            res.sendStatus(500)
            })
    },

    addProduct: (req, res) => {
        const db = req.app.get('db');
        const {name, price, image_url} = req.body;
        db.create_product([name,price,image_url]).then(response=>{
            console.log(response);
            res.status(200).send(response)
        }).catch(err=>{
            res.sendStatus(500)
            })
    }

}