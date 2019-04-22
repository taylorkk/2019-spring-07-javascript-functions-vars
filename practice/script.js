// We're making a web page called MORE DOGS!
// It shows a grid of dog images and has two buttons: More and Less Dogs
// We want the page to start out displaying 4 dogs. 
// When we click "more dogs", one additional dog should appear on the page. 
// When we click "less dogs", one dog should be removed the from the page.

// BEFORE YOU START: 
// 1. What functions do we already have provided? 
// 2. What do we need to create?
// 3. Is there any info the page needs to keep track of?

$("document").ready(function() {
  // 1. SET our starting dog number to 4, and display that on the page. 
    // declare a variable that stores the number of dog pics.
    // call the display dog function. 

  // 2. Make a function that increases the dog count by 1

  // 3. Make a function decreases the dog count by 1

  // 4. Write a click handler to complete the MORE DOGS button. 
    // You'll need to call two functions inside the click handler to make the button work. 
  
  // 5. Write a click handler to complete the LESS DOGS button. 
    // You'll need to call two functions inside the click handler to make the button work. 
  
  // BONUS: Create a function that displays the current number of photos as text on the page (I.E. "There are 3 dogs"). 
         // Call your function every time a button is clicked so the number updates. 
  
  // BONUS: Make a new button that add 2 dogs at a time to the page. 
  
  // BONUS: Update displayDogs so it also shows the dog's name
  
});


// Displays the number of dogs indicated by count. For example, if we call displayDogs(4), 
// it would display the first 4 dogs in the list below on the page. 

function displayDogs(count) {
  $('#dogs').empty();
  for(var i=0; i<count; i++) {
    $('#dogs').append("<img src='" + dog(i) + "' />");
  }
}

// Returns info about a dog by position. For example, if we call dog(0), the function would return info about Benji.
function dog(index) {
  dogs = [
    {
      name: 'Benji',
      parent: 'Tazz',
      image: 'https://scontent-ort2-2.cdninstagram.com/t51.2885-15/e35/13117822_577074802454648_669561747_n.jpg'
    },
    {
      name: 'Stella',
      parent: 'Christina',
      image: 'https://scontent-ort2-2.cdninstagram.com/t51.2885-15/e35/18580614_459447704391612_3858491631091056640_n.jpg'
    },
    {
      name: 'Gus',
      parent: 'Melissa',
      image: 'https://scontent-ort2-2.cdninstagram.com/t51.2885-15/e35/19379679_376805552721596_5539474451298516992_n.jpg'
    },
    {
      name: 'Britta',
      parent: 'Sonia',
      image: 'https://scontent-ort2-2.cdninstagram.com/t51.2885-15/e35/17933967_207807146377335_5752163340625379328_n.jpg'
    },
    {
      name: 'Andi',
      parent: 'Lisa',
      image: 'https://scontent-ort2-2.cdninstagram.com/t51.2885-15/e35/17494535_1673261656312694_1446182537297657856_n.jpg'
    },
    {
      name: 'Pepper',
      parent: 'Lisa',
      image: 'https://scontent-ort2-2.cdninstagram.com/t51.2885-15/e35/17662042_658843390974923_5702249000237793280_n.jpg'
    },
    {
      name: 'Bowie',
      parent: 'Becky',
      image: 'https://scontent-ort2-2.cdninstagram.com/t51.2885-15/e35/18011536_156234241574344_7176909219407331328_n.jpg'
    },
    {
      name: 'Tonks',
      parent: 'Meghan',
      image: 'https://scontent-ort2-2.cdninstagram.com/t51.2885-19/s320x320/13774700_319544435046731_1301136002_a.jpg'
    }
  ];
  return dogs[index % dogs.length].image;
}
