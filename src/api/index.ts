import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { usertype } from '../types'
import { firestore } from '../db/firebase';

const setUserIntoFirebase = async (user: usertype) => {
    await setDoc(doc(firestore, "users", user.uid), user);
}

const findUserFromFirebase = async (uid: string) => {
    const queryFrom = query(collection(firestore, 'users'), where('uid', '==', uid));
    const dataSnapshot = await getDocs(queryFrom);
    return dataSnapshot.docs.map(doc => doc.data());
}

export { setUserIntoFirebase, findUserFromFirebase };