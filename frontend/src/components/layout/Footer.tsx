import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-blue-600">MyApp</h2>
                    <p className="text-gray-600 text-sm mt-2">
                        Building modern web experiences with simplicity and speed.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-blue-600">About</a></li>
                        <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                        <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Support</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                        <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                        <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Stay Updated</h3>
                    <p className="text-sm text-gray-600 mb-3">
                        Subscribe to our newsletter
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                            Go
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="text-center text-sm text-gray-500 border-t py-4">
                © {new Date().getFullYear()} MyApp. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;