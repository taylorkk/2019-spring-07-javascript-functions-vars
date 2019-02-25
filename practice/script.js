$("document").ready(function() {
  // declare a variable that stores the number of
  // dog pictures to display on the page

  // write a function that increases the dog count by 1

  // write a function decreases the dog count by 1

  // write a click handler that adds 1 to the dog 
  // count and then calls the displayDogs function. 
  // Pass the dog count to the function

  // write a click handler that removes 1 from the dog 
  // count and then calls the displayDogs function. 
  // Pass the dog count to the function

  // Can you combine your functions that increase and
  // decrease the dog count into 1 function?

  // Update the click handler so that it also displays
  // the current count value on the page

  // If there's time... (or else it's homework!)
  // Let's double up!
  // Create 2 columsn of dogs with 2 sets of buttons
  // You should be able to add/remove from each column
  // separately
  // Put a border between the 2 colums  so you can 
  // clearly see the difference
});


function displayDogs(count) {
  $('#dogs').empty();
  for(var i=0; i<count; i++) {
    $('#dogs').append("<img src='" + dog(i) + "' />");
  }
}


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
