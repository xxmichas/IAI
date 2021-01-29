import Breadcrumbs from './containers/Breadcrumbs/Breadcrumbs'
import MenuBar from './containers/MenuBar/MenuBar'
import Product from './containers/Product/Product'
import TopBar from './containers/TopBar/TopBar'

const App = () => {
    return (
        <div className="Main">
            <TopBar />
            <MenuBar />
            <Breadcrumbs />
            <Product />
        </div>
    )
}

export default App