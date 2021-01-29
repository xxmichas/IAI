import Breadcrumbs from './containers/Breadcrumbs/Breadcrumbs'
import MenuBar from './containers/MenuBar/MenuBar'
import TopBar from './containers/TopBar/TopBar'

const App = () => {
    return (
        <div className="Main">
            <TopBar />
            <MenuBar />
            <Breadcrumbs />
        </div>
    )
}

export default App