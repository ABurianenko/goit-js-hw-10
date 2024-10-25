`use strict`

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const btnSubmit = document.querySelector(`button[type="submit"]`);
// console.log(btnSubmit);
const form = document.querySelector(`.form`);
// console.log(form);
const delay = form.elements.delay;
// console.log(delay);
const state = form.elements.state;
// console.log(state);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    

    const promise = new Promise((resolve, reject) =>
            setTimeout(() => { 
                if (state.value === `fulfilled`) {
                    resolve(delay.value)
                } else {
                    reject(delay.value)
                }

                
            }, delay.value)
    )
    
    promise
        .then(value => {
            iziToast.success({
                color: `green`,
                position: 'center',
                message: `✅ Fulfilled promise in ${delay.value}ms`
        })
        })
        .catch(error => {
            iziToast.error({
                color: `red`,
                position: 'center',
                message: `❌ Rejected promise in ${delay.value}ms`
            })
        })
        .finally(() => form.reset())
    
})