import React , {Component} from 'react';

export default class Form extends Component {
    constructor () {
        super();
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
                <button> Add to Inventory</button>          
            </div>
        )
    }
} 