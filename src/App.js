import MenuBar from './containers/MenuBar/MenuBar'
import TopBar from './containers/TopBar/TopBar'

const App = () => {
    return (
        <div className="Main">
            <TopBar />
            <MenuBar />
        </div>
    )
}

export default App