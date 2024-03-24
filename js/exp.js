// fetch('../assets/exp.json')
// .then(function(response){
//     return response.json();
// })
// .then(function(products){
//     let placeholder = document.querySelector
// })
fetch('../assets/exp.json')
    .then(response => response.json())
    .then(data => showInfo(data));

function showInfo