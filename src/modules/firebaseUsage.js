import firebaseApp from '../config/firebase';

const db = firebaseApp.firestore();

// Create new user with firebase auth
const createUser = (name, email, password) => {

}

// signin function with firebase auth
const signInUser = (email, password) => firebaseApp.auth().signInWithEmailAndPassword(email, password);

const getUsersInfo = async () => {
    return await db.collection('users').get()
        .then((result) => result.docs.map((doc) => doc.data()))
        .catch((err) => {            
            console.error(err.message);
            return null;
        });
}

// Get user information with firebase firestore
const getCurrentUserInfo = async () => {
    const userId = firebaseApp.auth().currentUser.uid;
    return await db.collection('users').doc(userId).get()
        .then((result) => result.data())
        .catch((err) => {            
            console.error(err.message);
            return null;
        });
}

// Get user cards by type with firebase firestore
const getUserCardsByType = async (cardType) => {
    const userId = firebaseApp.auth().currentUser.uid;
    let cardData = await db.collection('users').doc(userId).collection(cardType).get()
        .then((result) => {
            if (!result.empty) {
                return result.docs.map((doc) => ({id: doc.id, ...doc.data()}) );
            } else {                
                console.error(cardType + ' data not found');
                return [];
            }            
        }).catch((err) => {
            console.error(err.message);
            return [];
        });

    return cardData;
}
//TODO
const deleteCard = async (cardType, cardId) => {
    const userId = firebaseApp.auth().currentUser.uid;
    return await db.collection('users').doc(userId).collection(cardType).doc(cardId).delete()
        .then((result) => true)
        .catch((err) => {            
            console.error(err.message);
            return false;
        });
}

export { createUser, signInUser, getCurrentUserInfo, getUsersInfo, getUserCardsByType, deleteCard };