import React , {Component} from 'react';
import Product from '../product/Product';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
    };

    delete=(id)=>{
        axios.delete(`/api/product/${id}`).then(res =>{
            this.props.getAll();
            
        })
    }

    render () {
        const mappedInventory = this.props.products.map(product => {
            return (
                <Product
                key={product.product_id}
                product={product}
                delete={this.delete}
                />
            )
        });
        return(
            <div>
                {mappedInventory}
            </div>
        )
    }
} 