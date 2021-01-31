import { useState } from 'react'
import Breadcrumbs from './containers/Breadcrumbs/Breadcrumbs'
import MenuBar from './containers/MenuBar/MenuBar'
import Product from './containers/Product/Product'
import TopBar from './containers/TopBar/TopBar'

const App = () => {
    let [Cart, SetCart] = useState({})

    let UpdateCart = (item, price, amount) => {
        SetCart({...Cart, [item]: {price: price, amount: amount}})
    }

    return (
        <div className="Main">
            <TopBar cart={Cart} />
            <MenuBar />
            <Breadcrumbs />
            <Product UpdateCart={UpdateCart} />
        </div>
    )
}

export default App