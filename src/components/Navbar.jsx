import { BarChart3, Home, LucideLogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-gray-900 text-white p-4 flex gap-6 flex-row-reverse">
            <Link to="/login" className="flex items-center gap-2">
                <LucideLogOut size={18} />Logout
            </Link>
            <Link to="/analytics" className="flex items-center gap-2">
                <BarChart3 size={18} />Analytics
            </Link>
            <Link to="/dashboard" className="flex items-center gap-2">
                <Home size={18} />Home
            </Link>
        </div>
    )
}

export default Navbar;