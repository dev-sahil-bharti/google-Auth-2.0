import React from "react";

const Home: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">

            {/* Hero Section */}
            <section className="text-center py-20 px-6 bg-white">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Welcome to MyApp
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
                    Build modern apps faster with a clean UI and simple authentication flow.
                </p>

                <div className="flex justify-center gap-4">
                    <a
                        href="/signup"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Get Started
                    </a>
                    <a
                        href="/login"
                        className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                    >
                        Login
                    </a>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
                    Features
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Fast Setup</h3>
                        <p className="text-gray-600 text-sm">
                            Get your project running in minutes with pre-built components.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Modern UI</h3>
                        <p className="text-gray-600 text-sm">
                            Clean and responsive design using Tailwind CSS.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Secure Auth</h3>
                        <p className="text-gray-600 text-sm">
                            Easy integration with authentication systems.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 text-white text-center py-16 px-6">
                <h2 className="text-2xl font-bold mb-4">
                    Ready to get started?
                </h2>
                <p className="mb-6">
                    Create an account and start building today.
                </p>

                <a
                    href="/signup"
                    className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100"
                >
                    Sign Up Now
                </a>
            </section>

            {/* Footer */}
            <footer className="text-center text-gray-500 text-sm py-6">
                © {new Date().getFullYear()} MyApp. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;