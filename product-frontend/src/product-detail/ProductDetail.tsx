import { Component } from "react";
import { Button } from "react-bootstrap";
import classes from './ProductDetail.module.css'

class ProductDetail extends Component {

    render(){
        return (
            <div className="ProductDetails">
            <div className="ProductTitle"></div>
            <h1>Sample Title</h1>
            <div className="ProductDescription"></div>
            <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.</p>
            <div className="ProductColorSelector"></div>
                <h4>Select Color</h4>
                <div className="ProductTypeWrapper">
                    <img className={classes.ColorSelectorImg} src="https://imgur.com/iOeUBV7.png" />
                    <img className={classes.ColorSelectorImg} src="https://imgur.com/iOeUBV7.png" />
                    <img className={classes.ColorSelectorImg} src="https://imgur.com/iOeUBV7.png" />
                    <img className={classes.ColorSelectorImg} src="https://imgur.com/iOeUBV7.png" />
                </div>
            <div className="product-features">
                <h4>Features</h4>
                <div className="FeatureButtonWrapper">
                    <Button variant="primary">Time</Button>
                    <Button variant="primary">Heart Rate</Button>
                </div>
            </div>
            </div>
        );
    }
}

export default ProductDetail