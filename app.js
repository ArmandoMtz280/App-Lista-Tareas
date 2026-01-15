
const d = document,
      date = d.getElementById('fecha'),
      input = d.getElementById('input'),
      btnAdd = d.getElementById('add'),
      list = d.getElementById('lista'),
      check = 'fa-check-circle',
      uncheck = 'fa-circle',
      lineThrough = 'line-through';

/**Agregar Tarea */

function agregarTarea(tarea, id, realizado, eliminado){

    if(eliminado) return

    const REALIZADO = realizado ? check : uncheck;
    const LINE = realizado ? lineThrough : '';

    const item = `
    <li>
       <i class="far ${REALIZADO}" data-="realizado" id="${id}"></i>
       <p class="text ${LINE}">${tarea}</p>
       <i class="fas fa-trash de" data-="eliminado" id="${id}"></i>
    </li>   
    `;

    list.insertAdjacentHTML('beforeend', item);
};

btnAdd.addEventListener('click', () => {
    const tarea = input.value;

          if(tarea){
               agregarTarea(tarea, id, false, false);
          }

          input.value = '';
          id++;
});

d.addEventListener('keyup', (e) => {
          if(e.key === 'Enter'){
              const tarea = input.value
              if(tarea){
                   agregarTarea(tarea, id, false, false)
              }
              input.value = ''
              id++
          }
})