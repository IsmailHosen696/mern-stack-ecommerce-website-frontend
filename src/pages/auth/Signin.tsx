import { FirebaseError } from "firebase/app";
import { signInWithPopup } from "firebase/auth"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { findUserFromFirebase, setUserIntoFirebase } from "../../api";
import { useDashboard } from "../../contexts/DashboardProvider"
import { auth, provider } from "../../db/firebase"
import { Actions, usertype } from "../../types"

export default function Signin() {
    const navigate = useNavigate();
    const { dispatch } = useDashboard();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('')
    const handleGoogleSignin = async () => {
        setLoading(true);
        setError('')
        await signInWithPopup(auth, provider).then((data) => {
            findUserFromFirebase(data.user.uid).then((rData) => {
                if (rData.length > 1) {
                    let user = rData[0] as usertype;
                    let payload: usertype = {
                        uid: user.uid,
                        displayName: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL,
                        role: user.role
                    }
                    dispatch({ type: Actions.SET_USER, user: payload })
                    setLoading(false);
                    navigate('/');
                } else {
                    let payload: usertype = {
                        uid: data.user.uid,
                        displayName: data.user.displayName,
                        email: data.user.email,
                        photoURL: data.user.photoURL,
                        role: "user"
                    }
                    setUserIntoFirebase(payload).then(() => {
                        dispatch({ type: Actions.SET_USER, user: payload })
                        setLoading(false);
                        navigate('/');
                    }).catch((err: FirebaseError) => {
                        setLoading(false);
                        setError(err.message);
                    })
                }
            })
        }).catch((err: FirebaseError) => {
            setLoading(false);
            setError(err.message);
        })
    }
    return (
        <div className="w-full flex items-center justify-center">
            <div className="max-auto max-w-screen-2xl w-full">
                <div className="w-full py-5 flex items-center flex-col px-2">
                    {error && <p className="my-2 text-red-400">{error}</p>}
                    <h1 className="text-center font-medium text-2xl border-b pb-3 w-full sm:w-80">Google Signin</h1>
                    <p className="py-5">we don't share your information with anyone .</p>
                    <button disabled={loading} onClick={handleGoogleSignin} className="mt-10 bg-blue-500 text-white rounded w-full sm:w-96 py-2">{loading ? "loading..." : 'Continue with google'}</button>
                </div>
            </div>
        </div>
    )
}
