import firebase from "firebase";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCGGeyhCtqbpfTlA-05MELT1uP6hn82LLI",
  authDomain: "webshop-233e9.firebaseapp.com",
  projectId: "webshop-233e9"
});

class Manager {
  constructor(database) {
    this.db = database;
  }

  get = collName => {
    return new Promise((resolve, reject) => {
      this.db
        .collection(collName)
        .get()
        .then(res => {
          const data = res.docs.map(elem => ({
            id: elem.id,
            ...elem.data()
          }));

          resolve({
            data,
            error: false,
            errorMessage: ""
          });
        })
        .catch(error =>
          reject(
            new Error({
              data: [],
              error: true,
              errorMessage: error
            })
          )
        );
    });
  };

  add = (collName, elem) => {
    return new Promise((resolve, reject) => {
      this.db
        .collection(collName)
        .add(elem)
        .then(() =>
          resolve({
            data: [],
            error: false,
            errorMessage: ""
          })
        )
        .catch(error =>
          reject(
            new Error({
              data: [],
              error: true,
              errorMessage: `Adding error, ${error}`
            })
          )
        );
    });
  };

  update = (collName, docId, data) => {
    return new Promise((resolve, reject) => {
      this.db
        .collection(collName)
        .doc(docId)
        .update(data)
        .then(() =>
          resolve({
            data: [],
            error: false,
            errorMessage: ""
          })
        )
        .catch(error =>
          reject(
            new Error({
              data: [],
              error: true,
              errorMessage: `Updating error, ${error}`
            })
          )
        );
    });
  };

  delete = (collName, docId) => {
    return new Promise((resolve, reject) => {
      this.db
        .collection(collName)
        .doc(docId)
        .delete()
        .then(() =>
          resolve({
            data: [],
            error: false,
            errorMessage: ""
          })
        )
        .catch(error =>
          reject(
            new Error({
              data: [],
              error: true,
              errorMessage: `Deleting error, ${error}`
            })
          )
        );
    });
  };
}

const dbManager = new Manager(firebase.firestore());

export default dbManager;
