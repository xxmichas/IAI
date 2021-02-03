import { Fragment, useEffect, useState } from 'react'
import Breadcrumbs from './containers/Breadcrumbs/Breadcrumbs'
import Description from './containers/Description/Description'
import Footer from './containers/Footer/Footer'
import MenuBar from './containers/MenuBar/MenuBar'
import Product from './containers/Product/Product'
import Suggested from './containers/Suggested/Suggested'
import Tips from './containers/Tips/Tips'
import TopBar from './containers/TopBar/TopBar'
import TopMenu from './containers/Mobile/TopMenu/TopMenu'
import OffCanvas from './containers/Mobile/OffCanvas/OffCanvas'

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

    const mediaQuery = window.matchMedia('(max-width: 800px)')

    let [IsMobile, SetIsMobile] = useState(false)

    let handleResize = (e) => {
        if (e.matches) {
            console.log('Media Query Matched!')
            SetIsMobile(true)
        }
        else {
            SetIsMobile(false)
        }
    }

    useEffect(() => {
        mediaQuery.addEventListener("change", handleResize)
        handleResize(mediaQuery)

        return () => {
            mediaQuery.removeEventListener("change", handleResize)
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let [OffCanvasOpened, SetOffCanvasOpened] = useState(false)

    return (
        <div className="Main">
            {IsMobile ? <Fragment><OffCanvas SetOffCanvasOpened={SetOffCanvasOpened} opened={OffCanvasOpened} /> <TopMenu SetOffCanvasOpened={SetOffCanvasOpened} cart={Cart} /></Fragment> : <TopBar cart={Cart} />}
            <MenuBar />
            <Breadcrumbs />
            <Product UpdateCart={UpdateCart} />
            <Suggested />
            <Description />
            <Tips />
            <Footer />
        </div>
    )
}

export default App