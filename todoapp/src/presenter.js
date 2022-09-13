
const form = document.querySelector("#add-task-form");

const input = document.querySelector("#add-task-input");
const list_el = document.querySelector("#tasks");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  var task  = input.value;
  var tasklen = task.length;

  console.log(task);
if (task === "") {
  alert("no piedes ingresar una tarea vacia, por favor ingresa algo ");
}
if (tasklen > 50) {
  alert("por favor ingresa una tarea de menos de 50 caracteres ");
}

const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_el.appendChild(task_content_el);

		list_el.innerHTML = "<p>" + task + "<p>";

		list_el.appendChild(task_el);

		
});
