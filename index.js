// const input = document.getElementById('input');
// function addingEventListener() {
// const input = document.getElementById('input');

//   alert('I was clicked!');
// };
// input.addingEventListener('click', clickAlert);

// function clickAlert() {
//     alert('I was clicked!');
//   }
  
//   input.addEventListener('click', clickAlert);


function addingEventListener() {
  const input = document.getElementById('input');

  function clickAlert() {
    alert('I was clicked!');
  }

  input.addEventListener('click', clickAlert);
}

// Call the addingEventListener function to bind the event listener
addingEventListener();