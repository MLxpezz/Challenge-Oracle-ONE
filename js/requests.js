// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  onValue,
  update,
  remove,
  push,
  get,
  set,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6mAzRrfC8l1KGXrqjGZPRNagoID6TpKs",
  authDomain: "alurageek-3c3da.firebaseapp.com",
  projectId: "alurageek-3c3da",
  storageBucket: "alurageek-3c3da.appspot.com",
  messagingSenderId: "827109852848",
  appId: "1:827109852848:web:34cb129d8efcb698e71d75",
  measurementId: "G-HJ5E0Y4F3W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();
const products = ref(db, "productos/");

const dataItems = () => {
  return new Promise((resolve, reject) => {
    onValue(
      products,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

const dataUser = () => {
  const user = ref(db, "perfil/");
  return new Promise((resolve, reject) => {
    onValue(
      user,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

const detailItem = (id) => {
  const user = ref(db, `productos/${id}`);

  return new Promise((resolve, reject) => {
    onValue(
      user,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

function updateItem(url_img,  nombre, categoria,precio, id) {
  const product = ref(db, `productos/${id}`);

  const information = {
    url_img,
    nombre,
    categoria,
    precio,
    id,
  };

  return update(product, information);
}

const removeItem = (id) => {
  const product = ref(db, `productos/${id}`);

  return remove(product);
};

const addItem = (url_img,  nombre,categoria, precio) => {

    const id = uuid.v4();

  const productsRef = ref(db, `productos/${id}`);

  const information = {
    url_img,
    nombre,
    categoria,
    precio,
    id,
  };

    return set(productsRef, information);
};

export const controller = {
  dataItems,
  dataUser,
  detailItem,
  updateItem,
  removeItem,
  addItem,
};

// const productController = async () => {
//     const res = await fetch(`http://localhost:3000/productos`);
//     return await res.json();
// };

// const loginController = async () => {
//     const res = await fetch(`http://localhost:3000/perfil`);
//     return await res.json();
// };

// const itemDetail = async (id) => {
//     const res = await fetch(`http://localhost:3000/productos/${id}`);
//     return await res.json();
// }

// const deleteItem = async (id) => {
//     return await fetch(`http://localhost:3000/productos/${id}`, {
//         method: "DELETE"
//     });
// };

// const updateItem = async (url_img ,nombre, categoria, precio, id) => {
//     const res = await fetch(`http://localhost:3000/productos/${id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ url_img ,nombre, categoria, precio}),
//     });

//     return res;
// };

// const addItem = async (url_img, nombre, categoria, precio) => {
//     console.log(url_img);
//     return fetch(`http://localhost:3000/productos/`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({url_img, nombre, categoria, precio, id: uuid.v4()}),
//     });
// };
