import { Component } from "react";
import classes from './Navigator.module.css'


class Navigator extends Component {
    render(){
        return (
            <div className="Navigator">
                <div className={classes.NavigatorLogoWrapper}>
                    <img id={classes.MainLogo} src="https://www.pngmart.com/files/23/Amazon-Logo-White-PNG.png" alt="amazon logo"/>
                </div>
            </div>
        )
    }
}

export default Navigator;