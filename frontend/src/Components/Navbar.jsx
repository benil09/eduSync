import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="w-full bg-white shadow-sm border-b/35">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-16">
                    {/* Left: Logo */}
                    <div className="flex-shrink-0">
                        <div className="text-2xl font-bold ">edu<span className="text-orange-500">Connect</span> </div>
                    </div>

                    {/* Middle: Nav buttons */}
                    <nav className="flex-1 flex justify-center  space-x-6 ">
                        <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm">
                            Courses
                        </button>
                        <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm">
                            Resources
                        </button>
                        <button className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm">
                            About
                        </button>
                    </nav>

                    {/* Right: Auth */}
                    <div className="flex items-center space-x-3">
                      
                        <Link to="/login" className="bg-orange-500  font-bold text-white px-6 py-2 rounded-full text-sm hover:bg-orange-600">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}