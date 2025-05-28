import db from '../config/firebaseConfig.js';
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

const COLLECTION_NAME_AES = 'users_aes';
const COLLECTION_NAME_RSA = 'users_rsa';

async function createUserAES(userData) {
    const docRef = doc(collection(db, COLLECTION_NAME_AES));
    await setDoc(docRef, userData);
    return docRef.id;
}

async function getUserByIdAES(userId) {
    const docRef = doc(db, COLLECTION_NAME_AES, userId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return null;
    return docSnap.data();
}

async function createUserRSA(userData) {
    const docRef = doc(collection(db, COLLECTION_NAME_RSA));
    await setDoc(docRef, userData);
    return docRef.id;
}

async function getUserByIdRSA(userId) {
    const docRef = doc(db, COLLECTION_NAME_RSA, userId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return null;
    return docSnap.data();
}

const userService = {
    createUserAES,
    getUserByIdAES,
    createUserRSA,
    getUserByIdRSA
};

export default userService;