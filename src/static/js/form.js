const form = document.querySelector('.form_email');
const footer = document.querySelector('#footer');
const dataForm = document.querySelectorAll('.campo');



form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let data = [];
 
   dataForm.forEach((e)=>{

        data.push([e.name, e.value]);

   });

   const objectValue=Object.fromEntries(data);

   fetch('http://localhost/pagina%20web%20empresa/src/services/index.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(objectValue)
   })
   .then((e)=>e.json())
   .then((e)=>console.log(e))
   .catch((err)=>console.log(err))

});



