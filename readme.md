## Some Basic Question & Answer on Jacascript



---


## Q1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## Answer:
- **ndocument.getElementById("idName")** = select specific element by its unique ID 
- **document.getElementsByClassName("className")** = select all element with similar css class name
- **document.querySelector("cssSelector")** =  its only return first matching element using css selector
- **querySelectorAll("cssSelector")** = It selects all elements matching the CSS selector and return a Node list




---

## 2. How do you create and insert a new element into the DOM?
## Answer:
- First of all, I have to *Creat an Element* like **let newDiv = document.createElement("div");**
- Then, *Add Content or Attribute* on the element- **newDiv.textContent = "I am noob developer !";** 
- *Insert ta content or attribute in DOM element* - **document.body.appendChild(newDiv);**


---

### 3. What is Event Bubbling and how does it work?
## Answer:
- **Event bubbling**  means that when an event occurs on a child element, it first runs on that element, then bubbles (propagates) to its parents, then to its grandparents, all the way up to the document.

**Working procedure:**

- If I click on the Child button, first the event handler of the child will run.

- Then the event will bubble up to its parent div.

- Then it will go up to the body, document, window.



### 4. What is Event Delegation in JavaScript? Why is it useful?
## Answer:
**Event Delegation** is a JavaScript technique where we place a single event listener on the parent element, and use that event listener to handle events on child elements.
- Event Delegation works through Event Bubbling

**This is useful** because, if there are many buttons, there is no need to attach a separate listener to each one, just add one to the parent and everything will work. Also, many times dynamic elements are created, such as when a new list item is added, there is no need to attach a new listener to them, because the parent's listener is already working.

### 4. What is the difference between preventDefault() and stopPropagation() methods?
## Answer:
- **preventDefault()**= This method disables the browser's default behavior. For example,
Submitting a form normally reloads the page. Using event.preventDefault() will prevent the page from reloading even if the form is submitted.

- **stopPropagation()**= This method stops the propagation (upward) of the event.Using event.stopPropagation() will force the event to only work on the current element and will not bubble up.
