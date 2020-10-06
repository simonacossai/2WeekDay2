 /*EXERCISE 1 
       Create a new welcome alert message when the page successfully loads
      */
     window.onload = function () {
        alert("Welcome");
    };
    /* EXERCISE 2
        Write a function to change the Title of the page in something else (execute the function in browser console)
    */
    const changeTitle = function (newTitle) {
      let title= document.querySelector('.brandName');
      title.innerText= newTitle;
    };
    /* EXERCISE 3a
        Write a function to add a class to the page's h1 title in "red-color" (execute the function when title is hovered by mouse).
    */
    const addClassToTitle = function () {
        let title= document.querySelector('.brandName');
        title.classList.add('redTitle');
    };
    /* EXERCISE 3b
        Write a function to remove "red-color" class from previous h1 (execute the function when the mouse leaves the title).
    */
    const removeClassFromTitle = function () {
        let title= document.querySelector('.brandName');
        title.classList.remove('redTitle');
    };

    /* EXERCISE 4
        Add the following html snippet to your page:
    Write a function to change the text of only the p which are child of a div (execute the function by assigning it to a button's click event)
    */
    const changePContent = function () {
        let paragraph = document.querySelectorAll('div p');
        for(let i=0; i<paragraph.length; i++){
        paragraph[i].innerText= "Hi i'm changing on click!!:)";
        }
    };


    /* EXERCISE 5
        Write a function to change the list title (you can use previous day's 
        textarea as input or create a new text input field to grab the content)
    */
    const changeListTitle = function () {
        let content= document.querySelector('#newTitle');
        let listTitle= document.querySelector('#listTitle');
        listTitle.innerText= content.value;
    };


    /* EXERCISE 6
         Write a function to add a new item ONLY to the second list (create an input field + add button)
    */
    const addToTheSecond = function () {
        let content= document.querySelector('#newTitle');
        let myList = document.querySelector('#secondList');
        let listItem= document.createElement("li");
        listItem.innerText = content.value;
        myList.appendChild(listItem);   
    };
    /* EXERCISE 7
        Write a function to make the first UL disappear (button)
    */
    const firstUlDisappear = function () {};
    /* EXERCISE 8
        Write a function to make the background of every UL green (button)
    */
    const paintItGreen = function () {};
  
    /* EXERCISE 9
        Add a "magnifier function" to the table.
        When the user mouse goes on a table cell (not the image one) the font size must increase.
        HINT use mouseenter / mouseleave events
    */
    const makeThemMagnifiable = function () {};
    /* EXERCISE 10
        Add a button to toggle all the product images (toggle => if visible, hide, if not visible, show)
    */
    const toggleShowImages = function () {};
  
    //##### EXTRA
  
    /* EXERCISE 11
        Make the heading of the page change color radomly every time the user clicks on it
        */
    const makeItClickable = function () {};
  
    /*EXERCISE 12
      Refactor your HTML code with HTML5 semantic tags such as header, section, footer, etc
  */