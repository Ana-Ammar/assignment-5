 ## Answer the following questions:

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 ## Ans: 
 - getElementById : select element by unique ID, always returns a single
   element.
   
 - getElementsByClassName : select element by classname, returns a live html 
   collection and Updates automatically when the DOM changes.

 - querySelector : select the first matching element using CSS selector (id,
   class, tag etc.)
   
 - querySelectorAll(): select all matching elements using CSS selector, 
   returns static nodeList and doesn’t update when DOM changes.  

---

## 2. How do you create and insert a new element into the DOM?

## Ans: 
  - Create HTML element -- const newDiv = document.createElement('div')
  - Add content element -- niwDiv.innerText = "Assignment 5" or
    newDiv.innerHTML = `<h1>Assignment 5</h1>` .
  - Add style -- newDiv.style.color = "red"
  - Add class -- newDiv.classList.add("heading")
  - Insert into DOM -- document.body.appendChild(newDiv).

---

## 3. What is Event Bubbling and how does it work?

- Event Bubbling :
   It is a behavior in the DOM where an event starts from the element when that was clicked (the target element) and then bubbles up through all of its parent elements and reaching the top of the DOM tree.

- how does it work :
    `<div class="grandparent">`
      `<div class="parent">`
        `<button class="child">Click Me!</button>`
      `</div>`
    `</div>  -->`

  - If you click the `<button class="child">`, the event is fired on the target element.
  - Then it bubbles up to the parent div.
  - Next, it bubbles up to the grandparent div.
  - Finally, it bubbles up to the `<body>` and then reaches the document(object).

---

## 4. What is Event Delegation in JavaScript? Why is it useful?
  
- Event Delegation :
  It is a powerful technique in JavaScript for handling events in the DOM. It involves adding a single event listener to a parent element, which handles events on its child elements.

- Benefits
  Code Simplicity, Memory Efficiency and Dynamic Element Handle.
  In short, you don’t need to attach multiple event listeners to each child element, even for newly created elements.

---

## 5. What is the difference between preventDefault() and stopPropagation()
   methods?

 - preventDefault() stops default behavior of an element.
 - stopPropagation() stops event bubbling and capturing.
  