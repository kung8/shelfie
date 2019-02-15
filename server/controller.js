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
        // console.log(db);
        const {name, price, imageUrl} = req.body;
        console.log(req.body);
        db.create_product([name, +price,imageUrl]).then(response=>{
            console.log(response);
            res.status(200).send(response)
        }).catch(err=>{
            console.log(err)
            res.sendStatus(500)
            })
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_product([id]).then(response =>{
            res.status(200).send(response)
        }).catch(err=>{
            res.sendStatus(500)
            }) 
    }


}