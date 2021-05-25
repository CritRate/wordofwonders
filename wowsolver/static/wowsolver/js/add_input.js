// window.onload = () => {
//     letters = document.querySelector('.number_of_letters')
//     length = document.querySelector('.length_of_word')

//     div_letters = document.getElementById('letters')
//     div_word = document.getElementById('word')

//     // populate with default amount of inputs
//     add_inputs(div_letters, letters.value)
//     add_inputs(div_word, length.value)

//     letters.addEventListener('change', e => {
//         add_inputs(div_letters, e.target.value)
//     })

//     length.addEventListener('change', e => {
//         add_inputs(div_word, e.target.value)
//     })
// }

// function create_inputs(num_of_inputs){
//     // create input elements
//     inputs = document.createElement('div')
//     for(i = 0; i < num_of_inputs; i++){
//         el = document.createElement('input')
//         el.type = 'text'
//         el.value= ""
//         el.maxLength = 1
//         inputs.appendChild(el)
//     }
//     return inputs
// }

// function delete_exisitng_inputs(parent){
//     // remove existing input fields
//     while(parent.firstChild){
//         parent.firstChild.remove()
//     }
// }

// function add_inputs(parent, value){
//     inputs = create_inputs(parseInt(value))         
//     delete_exisitng_inputs(parent)
//     parent.appendChild(inputs)
// }