import firebaseApp from '../config/firebase';
import { v4 as uuidv4 } from 'uuid';

const db = firebaseApp.firestore();

const createUser = (name, email, password) => {
  firebaseApp.auth().createUserWithEmailAndPassword()
    .then()
    .catch();
}

const signInUser = (email, password) =>
  firebaseApp.auth().signInWithEmailAndPassword(email, password);

const getCurrentUserInfo = async () => {
  const userId = firebaseApp.auth().currentUser.uid;
  return await db.collection('users').doc(userId).get()
    .then((result) => result.data())
    .catch((err) => {
      console.error(err.message);
      return null;
    });
}

const getPaintings = async () => {
  return await db.collection('painting').get()
    .then((result) => result.docs.map((doc) => doc.data()))
    .catch((err) => {
      console.error(err.message);
      return null;
    });
}

const createPainting = async (painting) => {
  const uuid = uuidv4();
  return await db.collection('painting').doc(uuid).set({ paintingId: uuid, ...painting })
    .then((result) => result.docs.map((doc) => doc.data()))
    .catch((err) => {
      console.error(err.message);
      return null;
    });
}

const deletePaintingById = async (paintingId) => {
  return await db.collection('painting').doc(paintingId).delete()
    .then((result) => result)
    .catch((err) => {
      console.error(err.message);
      return null;
    })
}

const editPainting = async (paintingId, data) => {
  return await db.collection('painting').doc(paintingId).set(data, { merge: true })
    .then((result) => result.docs.map((doc) => doc.data()))
    .catch((err) => {
      console.error(err.message);
      return null;
    })
}

export { createUser, signInUser, getCurrentUserInfo, getPaintings, createPainting, editPainting, deletePaintingById };
