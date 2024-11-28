// window.addEventListener('load', () => {
//     const form = document.getElementById('contact-form');

//     function sendData(form) {
//         console.log('Start the function');
//         const XHR = new XMLHttpRequest();

//         const formData = new FormData(form);

//         XHR.addEventListener('load', (event) => {
//             alert(event.target.responseText);
//         })

//         XHR.addEventListener("error", (event) => {
//             alert("Oops! Something went wrong.");
//         });

//         XHR.open("POST", "sendForm.php");

//         XHR.send(formData);
//     }

//     form.addEventListener("submit", function (event) {
//         event.preventDefault();
//         console.log('event registered');
//         sendData();
//     });
// })