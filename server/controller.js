module.exports = {
    getProducts: (req,res) => {
        const db = req.app.get('db');
        db.get_inventory().then(response =>{
            res.status(200).send(response)
        }).catch(err=>{
            res.sendStatus(500)
        })
    }
}