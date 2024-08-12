
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', formSubmit)

function formSubmit(evt) {
    evt.preventDefault()
    console.log(evt.currentTarget.elements);
    const {delay, state} = evt.currentTarget.elements;
createPromise(delay.value, state.value).then(data => {
    iziToast.success({
        position:"topRight", message: `✅ Fulfilled promise in ${data}ms`
    })
}).catch((err) => {
    iziToast.error({
        position:"topRight", message: `❌ Rejected promise in ${err}ms`
    })
})
form.reset()
}

function createPromise(delay, state) {
    return new Promise((resolve, reject)=> {
        setTimeout (() => {
            if (state === "fulfilled") {
                resolve(delay)
            } else {
                reject(delay)
            }
        }, delay)
    })
}

