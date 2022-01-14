import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function Signin() {
    // const navigate = useNavigate();
    // const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('')

    return (
        <div className="w-full flex items-center justify-center">
            <div className="max-auto max-w-screen-2xl w-full">
                <div className="w-full py-5 flex items-center flex-col px-2">
                    {error && <p className="my-2 text-red-400">{error}</p>}
                    <h1 className="text-center font-medium text-2xl border-b pb-3 w-full sm:w-80">Google Signin</h1>
                    <p className="py-5">we don't share your information with anyone .</p>
                </div>
            </div>
        </div>
    )
}
