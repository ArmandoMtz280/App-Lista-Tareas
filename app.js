
const d = document,
      date = d.getElementById('fecha'),
      input = d.getElementById('input'),
      btnAdd = d.getElementById('add'),
      list = d.getElementById('lista');
      

/**Agregar Tarea */

function agregarTarea(tarea){

    

    

    const item = `
    <li>
       <i class="far fa-circle co" data-="realizado" id=""></i>
       <p class="text ">${tarea}</p>
       <i class="fas fa-trash de" data-="eliminado" id=""></i>
    </li>   
    `;

    list.insertAdjacentHTML('beforeend', item);
};

btnAdd.addEventListener('click', () => {
    const tarea = input.value;

          if(tarea){
               agregarTarea(tarea);
          }

          input.value = '';
          id++;
});

d.addEventListener('keyup', (e) => {
          if(e.key === 'Enter'){
              const tarea = input.value
              if(tarea){
                   agregarTarea(tarea)
              }
              input.value = ''
              id++
          }
})