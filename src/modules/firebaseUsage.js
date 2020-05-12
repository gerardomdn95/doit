import firebaseApp from '../config/firebase';

const db = firebaseApp.firestore();

// Create new user with firebase auth
const createUser = (name, email, password) => {
  firebaseApp.auth().createUserWithEmailAndPassword()
    .then()
    .catch();
}

// signin function with firebase auth
const signInUser = (email, password) => firebaseApp.auth().signInWithEmailAndPassword(email, password);

const getPaintings = async () => {
  return await db.collection('painting').get()
    .then((result) => result.docs.map((doc) => doc.data()))
    .catch((err) => {
      console.error(err.message);
      return null;
    });
}

const createPainting = async (painting) => {
  return await db.collection('painting').add(painting)
    .then((result) => result.docs.map((doc) => doc.data()))
    .catch((err) => {
      console.error(err.message);
      return null;
    });
}

const editPainting = async (paintingId, data) => {
  return await db.collection('painting').doc(paintingId).set(data, { merge: true })
    .then((result) => result.docs.map((doc) => doc.data()))
    .catch((err) => {
      console.error(err.message);
      return null;
    })
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

export { createUser, signInUser, getCurrentUserInfo, getPaintings, createPainting, editPainting };
