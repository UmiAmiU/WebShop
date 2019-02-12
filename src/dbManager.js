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

  getFilteredDoc = (collName, sessionId) => {
    return new Promise((resolve, reject) => {
      this.db
        .collection(collName)
        .doc(sessionId)
        .get()
        .then(res => {
          if (res.exists) {
            const data = {
              id: res.id,
              ...res.data()
            };

            resolve({
              data,
              error: false,
              errorMessage: ""
            });
          } else {
            throw new Error("No such document");
          }
        })
        .catch(error => {
          reject(
            new Error({
              data: [],
              error: true,
              errorMessage: error
            })
          );
        });
    });
  };

  getFiltered = (collName, filterOptions) => {
    const filter = [];
    const maxFilters = 5;

    for (let index = 0; index < maxFilters; index += 1) {
      if (filterOptions[index]) {
        filter.push(filterOptions[index]);
      } else {
        filter.push(filter[index - 1]);
      }
    }

    return new Promise((resolve, reject) => {
      this.db
        .collection(collName)
        .where(filter[0].left, filter[0].option, filter[0].right)
        .where(filter[1].left, filter[1].option, filter[1].right)
        .where(filter[2].left, filter[2].option, filter[2].right)
        .where(filter[3].left, filter[3].option, filter[3].right)
        .where(filter[4].left, filter[4].option, filter[4].right)
        .get()
        .then(res => {
          if (res.empty) {
            throw new Error("No such user");
          }
          const data = {
            id: res.docs[0].id,
            ...res.docs[0].data()
          };

          resolve({
            data,
            error: false,
            errorMessage: ""
          });
        })
        .catch(error => {
          reject(
            new Error({
              data: [],
              error: true,
              errorMessage: error
            })
          );
        });
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
