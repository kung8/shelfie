import React , {Component} from 'react';
import Product from '../product/Product';

export default class Dashboard extends Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    };

    render () {
        const mappedInventory = this.props.products.map(product => {
            return (
                <Product
                key={product.id}
                product={product}
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