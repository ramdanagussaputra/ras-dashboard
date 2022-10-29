// Redux
import { useDispatch, useSelector } from 'react-redux';
import { themeSliceActions } from '../store/theme-slice';

// Component
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';

// Data
import { themeColors } from '../data/dummy';

function ThemeSetting() {
    // Global state
    const themeState = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    return (
        // Overlay
        <div className="fixed top-0 bottom-0 right-0 left-0 z-50 bg-half-transparent">
            {/* Theme panel */}
            <div className="fixed right-0 ml-4 h-screen w-[360px] bg-white p-8 dark:bg-secondary-dark-bg dark:text-gray-100">
                <div className="mb-4 flex items-center justify-between border-b border-gray-300 pb-8">
                    <h2 className="text-lg font-semibold">Settings</h2>

                    <MdOutlineCancel
                        className="cursor-pointer text-2xl text-gray-400"
                        onClick={() => dispatch(themeSliceActions.toggleThemeMenu())}
                    />
                </div>

                <div className="mb-4 border-b border-gray-300 pb-8">
                    <h3 className="mb-4 text-2xl font-bold">Theme Option</h3>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <input
                                id="light"
                                type="radio"
                                name="theme"
                                value="light"
                                onChange={(e) =>
                                    dispatch(themeSliceActions.setMode(e.target.value))
                                }
                                checked={themeState.currentMode === 'light'}
                            />
                            <label htmlFor="light">Light</label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                id="dark"
                                type="radio"
                                name="theme"
                                value="dark"
                                onChange={(e) =>
                                    dispatch(themeSliceActions.setMode(e.target.value))
                                }
                                checked={themeState.currentMode === 'dark'}
                            />
                            <label htmlFor="dark">Dark</label>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="mb-4 text-2xl font-bold">Theme Colors</h3>

                    <div className="flex items-center justify-center gap-2">
                        {themeColors.map((item) => (
                            <TooltipComponent
                                key={item.name}
                                content={item.name}
                                position={'TopCenter'}
                            >
                                <button
                                    className="flex items-center justify-center rounded-full p-5"
                                    style={{ backgroundColor: item.color }}
                                    onClick={() =>
                                        dispatch(themeSliceActions.setColor(item.color))
                                    }
                                >
                                    {themeState.currentColor === item.color && (
                                        <BsCheck className="text-2xl text-white" />
                                    )}
                                </button>
                            </TooltipComponent>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThemeSetting;
