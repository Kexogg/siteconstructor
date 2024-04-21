import "./tailwind.css"
import {ReactNode} from "react";

export default function FormLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center">
            <div className="max-w-md mx-auto p-5 bg-white my-auto rounded-xl drop-shadow">
                {children}
            </div>
        </div>
    );
}
