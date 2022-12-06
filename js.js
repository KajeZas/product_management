 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAJtzKBiNW4xLEj9btXn71doNiugeHzdhA",
   authDomain: "project-7736769911831467477.firebaseapp.com",
   databaseURL: "https://project-7736769911831467477-default-rtdb.firebaseio.com",
   projectId: "project-7736769911831467477",
   storageBucket: "project-7736769911831467477.appspot.com",
   messagingSenderId: "1048920183283",
   appId: "1:1048920183283:web:bec53e5d55d6a575540286",
   measurementId: "G-WYFSZES40F"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);


import { getDatabase, ref, get, set, child, update, remove }
 from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"
 
const db = getDatabase();

const enterID = document.getElementById("enterID")
const enterName = document.getElementById("enterName")
const enterQuantity = document.getElementById("enterQuantity")
const insertBtn = document.getElementById("insert")
const updateBtn = document.getElementById("update")
const removeBtn = document.getElementById("remove")
const findIDBtn = document.getElementById("findID")
const findBtn = document.getElementById("find")
const findDataBtn = document.getElementById("findData")

function InsertData(evt) {
    evt.preventDefault();
    console.log(enterID.value, enterName.value, enterQuantity.value);
    set(ref(db, "Products/" + enterID.value), {
        Name: enterName.value,
        ID: enterID.value,
        Quantity: enterQuantity.value
    })
        .then(() => {
            alert("Data added successfully");
        })
        .catch((error) => {
            alert(error);
        });
}
function FindData(evt) {
    evt.preventDefault();
    console.log(`select function ${enterID.value}`)
    const dbref = ref(db);

    get(child(dbref, "Produts/" + findIDBtn.value)) //cia
        .then((snapshot) => {
            if (snapshot.exists())  {
                let listItem = document.createElement('li');
                listItem.classList.add("list-group-item", "list-group-item-secondary");
                listItem.textContent = "Product Name: " + snapshot.val().Name;
                findDataBtn.appendChild(listItem);
                let listItemSecond = document.createElement('li');
                listItemSecond.textContent = "Product Quantity: " + snapshot.val().Quantity;
                findDataBtn.appendChild(listItemSecond);

            } else {
                alert("No data found");
            }
        })
        .catch((error) => {
            alert(error)
        })
}
function UpdateData(evt) {
    evt.preventDefault();
    console.log(`update function ${enterID.value}
                                    ${enterName.value}
                                    ${enterQuantity.value}`);
    update(ref(db, "Products/" +))
}
insertBtn.addEventListener('click', InsertData);
// updateBtn.addEventListener('click', UpdateData);
// removeBtn.addEventListener('click', RemoveData);
findBtn.addEventListener('click', FindData);