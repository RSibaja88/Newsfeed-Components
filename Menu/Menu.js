/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.*/


function printMenu(array) {

    const menu = document.createElement('div');
    const mList = document.createElement('ul');

    // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
    // Add those items to the <ul>

    array.forEach(menuItems => {
        const mItems = document.createElement("li");
        mItems.textContent = menuItems;

        menu.appendChild(mList);
        mList.appendChild(mItems);

    });

    menu.classList.add('menu');



    // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
    const mButton = document.querySelector(".menu-button");



    mButton.addEventListener('click', () => {
        console.log('menu-toggle');
        // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
        const menu = document.querySelector('.menu');
        menu.classList.toggle("menu--open");
    });
    // Step 5: return the menu component.
    return menu;


}
// Step 6: add the menu component to the DOM
const makeMenu = document.querySelector('.header');
makeMenu.appendChild(printMenu(menuItems));