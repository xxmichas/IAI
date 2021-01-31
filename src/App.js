import { useState } from 'react'
import Breadcrumbs from './containers/Breadcrumbs/Breadcrumbs'
import MenuBar from './containers/MenuBar/MenuBar'
import Product from './containers/Product/Product'
import Suggested from './containers/Suggested/Suggested'
import TopBar from './containers/TopBar/TopBar'

const App = () => {
    let [Cart, SetCart] = useState({})

    let UpdateCart = (item, price, amount) => {
        let oldAmount = 0
        if (Cart[item] === undefined || Cart[item] === null) {

        }
        else {
            oldAmount = Cart[item].amount
        }
        SetCart({...Cart, [item]: {price: price, amount: amount + oldAmount}})
    }

    return (
        <div className="Main">
            <TopBar cart={Cart} />
            <MenuBar />
            <Breadcrumbs />
            <Product UpdateCart={UpdateCart} />
            <Suggested />
        </div>
    )
}

export default App