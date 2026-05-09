import { Link } from "react-router-dom";

type Props = {
    user: {
        name: string;
        email: string;
    } | null;
    handleLogout: () => void;
}

function Profile({ user, handleLogout }: Props) {
    if (!user) {
        return (
            <div className="flex flex-col md:flex-row items-center gap-3 w-full justify-end">
                <Link to="/login" className="w-full md:w-auto">
                    <button className="w-full px-4 py-2 md:py-1.5 border border-gray-300 rounded-full hover:bg-gray-50 transition text-sm font-medium">
                        Log In
                    </button>
                </Link>
                <Link to="/signup" className="w-full md:w-auto">
                    <button className="w-full px-6 py-2.5 md:py-2 bg-gray-900 text-white rounded-full hover:bg-black shadow-md transition text-sm font-medium">
                        Sign Up
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className="inline-flex items-center gap-3 p-1.5 md:p-1 bg-gray-100 md:bg-transparent rounded-full shadow-sm md:shadow-none">
                <img
                    src={`https://ui-avatars.com/api/?name=${user.name}&background=0D9488&color=fff`}
                    className="w-10 h-10 md:w-8 md:h-8 rounded-full"
                    alt="Avatar"
                />
                <div className="md:hidden">
                    <p className="font-semibold text-gray-800">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                </div>
            </div>
            <button
                onClick={handleLogout}
                className="px-4 py-2 md:py-1.5 border border-gray-300 rounded-full hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition text-sm font-medium"
            >
                Logout
            </button>
        </div>
    );
}

export default Profile;