
// Part 1: Variables & Conditionals

function checkAge() {
    let age = document.getElementById("user-age").value;
    age = Number(age); // convert input to number

    if (age >= 18) {
        document.getElementById("age-result").innerText = "You are an adult ✅";
    } else if (age > 0) {
        document.getElementById("age-result").innerText = "You are a minor ⚠️";
    } else {
        document.getElementById("age-result").innerText = "Invalid age ❌";
    }
}

// Part 2: Functions

function greetUser(name) {
    document.getElementById("greeting").innerText = `Hello, ${name}! 👋`;
}

// Another reusable function
function calculateSquare(number) {
    return number * number;
}

// Part 3: Loops

function showNumbers() {
    let output = "";
    for (let i = 1; i <= 5; i++) { 
        output += i + " ";
    }
    document.getElementById("numbers").innerText = output;

    let j = 1;
    while (j <= 5) {
        console.log("While loop number:", j);
        j++;
    }
}

// DOM Manipulation

const toggleBtn = document.getElementById("toggle-btn");
toggleBtn.addEventListener("click", function() {
    const title = document.getElementById("main-title");
    title.classList.toggle("red");
    title.classList.toggle("blue");
});

// Add a new list item
const addItemBtn = document.getElementById("add-item-btn");
addItemBtn.addEventListener("click", function() {
    const ul = document.getElementById("item-list");
    const li = document.createElement("li");
    li.innerText = `Item ${ul.children.length + 1}`;
    ul.appendChild(li);
});
