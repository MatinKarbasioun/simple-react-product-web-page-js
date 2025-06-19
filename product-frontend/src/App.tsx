
import { Component } from 'react'
import './App.css'
import Navigator from './navigator/Navigator.tsx'
import ProductDetail from './product-detail/ProductDetail.tsx'
import ProductShow from './product-show/ProductShow.tsx'
import { Button } from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('constructor called')
  }

  shouldComponentUpdate(){
        console.log('ShouldComponentUpdate called')
        return true;
  }

  componentDidMount() {
      console.log('Component did mount')
  }

  componentWillUnmount() {
      console.log('Component Unmounting')
  }

  componentDidUpdate() {
      console.log('ComponentDidUpdate Called')
  }

  render() {
    return (
      <div className="main">
        <Navigator />
        <div className="ProductModules">
          <ProductShow />
          <ProductDetail />
        </div>
        <div className="product-buy">
          <Button variant="secondary" type="submit">Buy Now</Button>
        </div>
      </div>
    )
  }
}

export default App
