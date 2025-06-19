import { Component } from "react";
import classes from './ProductShow.module.css'


class ProductShow extends Component {
    render() {
        return (
            <div className="product-image">
                <img className={classes.ProductImg} src="https://imgur.com/PTgQlim.png" />
            </div>
        )
    }
}


export default ProductShow;