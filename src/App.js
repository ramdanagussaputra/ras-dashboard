import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { themeSliceActions } from './store/theme-slice';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import { Navbar, Sidebar, ThemeSettings } from './components';
import {
    Area,
    Bar,
    Calendar,
    ColorMapping,
    ColorPicker,
    Customer,
    Ecommerce,
    Editor,
    Employee,
    Financial,
    Kanban,
    Line,
    Orders,
    Pie,
    Pyramid,
    Stacked,
} from './pages';
import './App.css';

function App() {
    // Global state
    const menuActive = useSelector((state) => state.navigation.menuActive);
    const themeState = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    return (
        <BrowserRouter>
            <div
                className={`relative flex dark:bg-main-dark-bg ${
                    themeState.currentMode === 'dark' ? 'dark' : ''
                }`}
            >
                {/* Setting button */}
                <div className="fixed right-4 bottom-4">
                    <TooltipComponent content={'Settings'} position={'TopCenter'}>
                        <button
                            type="button"
                            className={`rounded-full p-3 text-3xl text-white hover:drop-shadow-xl`}
                            style={{ backgroundColor: themeState.currentColor }}
                            onClick={() => dispatch(themeSliceActions.toggleThemeMenu())}
                        >
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>

                {/* Sidebars */}
                {menuActive ? (
                    <div className={`fixed z-40 w-72 bg-white dark:bg-secondary-dark-bg`}>
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0">
                        <Sidebar />
                    </div>
                )}

                {/* Content */}
                <div
                    className={`w-full bg-main-bg  dark:bg-main-dark-bg ${
                        menuActive ? 'md:ml-72' : ''
                    } min-h-screen`}
                >
                    {/* Navbar */}
                    <div className="fixed z-30 w-full bg-main-bg dark:bg-main-dark-bg md:static">
                        <Navbar />
                    </div>

                    {/* Theme settings */}
                    {themeState.openThemeMenu && <ThemeSettings />}

                    {/* Main content */}
                    <Routes>
                        <Route path="/" element={<Ecommerce />} />
                        <Route path="/ecommerce" element={<Ecommerce />} />
                        {/* Pages */}
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/employees" element={<Employee />} />
                        <Route path="/customers" element={<Customer />} />

                        {/* Apps */}
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/kanban" element={<Kanban />} />
                        <Route path="/editor" element={<Editor />} />
                        <Route path="/color-picker" element={<ColorPicker />} />

                        {/* Charts */}
                        <Route path="/line" element={<Line />} />
                        <Route path="/area" element={<Area />} />
                        <Route path="/bar" element={<Bar />} />
                        <Route path="/pie" element={<Pie />} />
                        <Route path="/Financial" element={<Financial />} />
                        <Route path="/color-mapping" element={<ColorMapping />} />
                        <Route path="/pyramid" element={<Pyramid />} />
                        <Route path="/stacked" element={<Stacked />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
