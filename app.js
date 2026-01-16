
const d = document,
      date = d.getElementById('fecha'),
      input = d.getElementById('input'),
      btnAdd = d.getElementById('add'),
      list = d.getElementById('lista'),
      check = 'fa-check-circle',
      uncheck = 'fa-circle',
      lineThrough = 'line-through',
      tasks = [];
let id = 0;

      

/**Agregar Tarea */

function agregarTarea(tarea, id, realizado, eliminado){

    if(eliminado) return

    const REALIZADO = realizado ? check : uncheck,
          LINE = realizado ? lineThrough : ''

    

    const item = `
    <li>
       <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
       <p class="text ${LINE}">${tarea}</p>
       <i class="fas fa-trash de" data="eliminado" id="${id}"></i>
    </li>   
    `;

    list.insertAdjacentHTML('beforeend', item);
    
};

/**Tarea Realizada */

function tareaRealizada(element){
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)
};

/** Tarea Eliminada */

function tareaEliminada(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
}

btnAdd.addEventListener('click', () => {
    const tarea = input.value;

          if(tarea){
               agregarTarea(tarea, id, false, false);
               tasks.push({
                 nombre: tarea,
                 id: id,
                 realizado: false,
                 eliminado: false
               });
          }

          input.value = '';
          id++;
});

d.addEventListener('keyup', (e) => {
          if(e.key === 'Enter'){
              const tarea = input.value
              if(tarea){
                   agregarTarea(tarea, id, false, false);
                   tasks.push({
                     nombre: tarea,
                     id: id,
                     realizado: false,
                     eliminado: false
                   });
                   
              }
              input.value = ''
              id++
              console.log(tasks)
          }
});

list.addEventListener('click', (e) => {
    const element = e.target,
          elementData = element.attributes.data.value;

          if(elementData === 'realizado'){
                tareaRealizada(element);
          }else if(elementData === 'eliminado'){
                tareaEliminada(element);
          }
})