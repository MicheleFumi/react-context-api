import MainMenu from "./MainMenu";




export default function AppHeader() {

    return (
        <header>
            <div className="container">
                <div className="titleHeader py-3 color-black d-flex justify-content-between">
                    <h1>In Cucina Con Michele</h1>
                    <MainMenu />
                </div>
            </div>

        </header>
    )
}