import React , {Component} from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name:"",
            price:"",
            imageUrl:""
        };
    };

    handleNameInput(value){
        this.setState({
            name:value
        })
        
    };

    handlePriceInput(value){
        this.setState({
            price:value
        })
    };

    handleImageURLInput(value){
        this.setState({
            imageUrl:value
        })
    };

    handleCancelButton=()=> {
        this.setState({
            name:"",
            price:"",
            imageUrl:""
        })
    };

    addProduct=()=>{
        const {getAll,products} = this.props;
        const {name,price,imageUrl} = this.state;
        axios.post('/api/product', {name,price,imageUrl}).then(res =>{
            console.log(res);
            getAll();
            this.handleCancelButton();
        })
    }

    render () {
        const {name,price,imageUrl} = this.state;
        return(
            <div>
                <input 
                    onChange={(e)=>this.handleNameInput(e.target.value)} 
                    value={name}
                    placeholder="Enter Product Name"
                    />          
                <input 
                    onChange={(e)=>this.handlePriceInput(e.target.value)}
                    value={price}
                    placeholder="Enter Price"
                    />          
                <input 
                    onChange={(e)=>this.handleImageURLInput(e.target.value)}
                    value={imageUrl}
                    placeholder="Enter Image URL"/>
                <button onClick={()=>this.handleCancelButton()}> Cancel</button>          
                <button onClick={()=>this.addProduct()}> Add to Inventory</button>          
            </div>
        )
    }
} 