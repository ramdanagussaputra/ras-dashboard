import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigationSliceActions } from '../store/navigation-slice';
import { NavLink, Link } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';

function Sidebar() {
    // Global State
    const navigationState = useSelector((state) => state.navigation);
    const themeState = useSelector((state) => state.theme);
    const dispath = useDispatch();

    // Handler
    const menuHandler = () => {
        if (navigationState.menuActive && navigationState.screen < 900)
            dispath(navigationSliceActions.setMenu(false));
    };

    // Navbar Styles
    const navLinkActive =
        'flex gap-3 items-center p-3 text-base rounded-lg text-white dark:text-gray-200';
    const navLinkUnActive = `flex gap-3 items-center p-3 dark:hover:text-black hover:bg-gray-200 duration-150 text-base rounded-lg dark:text-gray-200`;
    return (
        <div className="overflow-scroll">
            <div className="h-screen">
                {/* Header */}
                <div className="flex items-center justify-between p-6 text-xl font-bold">
                    <Link
                        to="/"
                        className="flex items-center gap-3 dark:text-white"
                        onClick={() => menuHandler}
                    >
                        <SiShopware />
                        <span>Shoppy</span>
                    </Link>

                    <TooltipComponent content="Menu" position="BottomCenter">
                        <button
                            className="block pt-1 text-2xl md:hidden"
                            onClick={() => dispath(navigationState.toggleMenu())}
                        >
                            <MdOutlineCancel />
                        </button>
                    </TooltipComponent>
                </div>

                {/* Nav */}
                <div className="mt-5 p-6 pt-0">
                    {links.map((item) => (
                        <Fragment key={item.title}>
                            <p className="text-md p-3 pl-0 uppercase text-gray-500 dark:text-gray-400">
                                {item.title}
                            </p>

                            {item.links.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={`/${link.name}`}
                                    className={({ isActive }) =>
                                        isActive ? navLinkActive : navLinkUnActive
                                    }
                                    style={({ isActive }) => ({
                                        backgroundColor: isActive
                                            ? themeState.currentColor
                                            : '',
                                    })}
                                    onClick={menuHandler}
                                >
                                    {link.icon}
                                    <p>{link.name}</p>
                                </NavLink>
                            ))}
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
