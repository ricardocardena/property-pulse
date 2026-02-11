import Link from "next/link";
import { ProLink } from "../common/ProLink";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex gap-2">
                    <ProLink href="/" dataTestId="nav-home-link">Home</ProLink>
                    <ProLink href="/properties" dataTestId="nav-properties-link">Properties</ProLink>
                    <ProLink href="/properties/add" dataTestId="nav-add-property-link">Add Property</ProLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;