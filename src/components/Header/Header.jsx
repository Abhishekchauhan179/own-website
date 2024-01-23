import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="data:image/jpeg;base64,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"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
