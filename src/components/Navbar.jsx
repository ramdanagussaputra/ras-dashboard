import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { navigationSliceActions } from '../store/navigation-slice';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiOutlineMenu } from 'react-icons/ai';
import avatarImg from '../data/my-avatar.jpg';

const NavBtn = ({ title, icon, customFunc, color, dotColor }) => {
    return (
        <div>
            <TooltipComponent content={title} position={'BottomCenter'}>
                <button
                    className="relative rounded-full py-3 px-2 text-xl duration-150 hover:bg-gray-100"
                    style={{ color }}
                    onClick={customFunc}
                >
                    <span
                        className="absolute top-2 right-1 h-2 w-2 rounded-full"
                        style={{ backgroundColor: dotColor }}
                    />

                    {icon}
                </button>
            </TooltipComponent>
        </div>
    );
};

function Navbar() {
    // Global State
    const navigationState = useSelector((state) => state.navigation);
    const themeState = useSelector((state) => state.theme);
    const dispath = useDispatch();

    // Side Effects
    // Listen to resize
    useEffect(() => {
        window.addEventListener('resize', () => {
            dispath(navigationSliceActions.setScreen(window.innerWidth));
        });

        return () => {
            window.removeEventListener('resize', () => {
                dispath(navigationSliceActions.setScreen(window.innerWidth));
            });
        };
    }, [dispath]);

    // Check window inner width for menu state
    useEffect(() => {
        if (navigationState.screen < 900) {
            dispath(navigationSliceActions.setMenu(false));
            return;
        }

        dispath(navigationSliceActions.setMenu(true));
    }, [navigationState.screen, dispath]);

    return (
        <div className="flex items-center justify-between py-3 px-12">
            <div className="flex">
                <NavBtn
                    title="Menu"
                    icon={<AiOutlineMenu />}
                    color={themeState.currentColor}
                    customFunc={() => dispath(navigationSliceActions.toggleMenu())}
                />
            </div>

            <div className="flex items-center justify-between gap-1 ">
                <TooltipComponent content="User Profile" position={'BottomCenter'}>
                    <button
                        className="flex flex-wrap items-center justify-center gap-2 text-base text-gray-500 sm:flex-nowrap"
                        onClick={() =>
                            dispath(navigationSliceActions.toggleUserProfile())
                        }
                    >
                        <img
                            src={avatarImg}
                            alt="User profile"
                            className="h-9 w-9 rounded-full"
                        />

                        <p>
                            Hi, <span className="font-bold">Ramdan</span>
                        </p>
                    </button>
                </TooltipComponent>
            </div>
        </div>
    );
}

export default Navbar;
