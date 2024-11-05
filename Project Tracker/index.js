
const project_modal = document.getElementById("modal");
const add_task_button = document.getElementById("add_task");

let task_in_project = [];

add_task_button.addEventListener("click", () => {
  addTask();
  add_task_button.disabled = true;
} );

function addTask(){
  const task_fieldset = document.createElement("fieldset");
  const delete_button = document.createElement("button");
  const task_legend = document.createElement("legend");
  const task_label = document.createElement("label");
  const date_start_label = document.createElement("label");
  const est_day_label = document.createElement("label");
  const task_name_input = document.createElement("input");
  const date_start_input = document.createElement("input");
  const est_day_input = document.createElement("input");
  const add_dependency = document.createElement("button");

  let last_index = task_in_project.length-1;
  task_in_project.push(task_in_project.length+1);

  if(document.getElementById("add_another_task"+last_index+"")){
    let add_another_task = document.getElementById("add_another_task"+last_index+"");
    document.getElementById("add_another_task"+(last_index-1)+"").style.display = "none";
  }else{
    let add_another_task = document.createElement("button");
  }

  task_fieldset.classList.add("task_container");
  delete_button.innerHTML = "X";
  delete_button.setAttribute("id", "delete_task"+last_index+"");
  task_legend.innerHTML = "Task 1";

  task_label.setAttribute("for", "task1_name");
  task_label.innerHTML = "Task Name: ";
  task_name_input.setAttribute("type", "text");
  task_name_input.setAttribute("name", "task_name");
  task_name_input.setAttribute("id", "task_name"+last_index+"");

  date_start_label.setAttribute("for", "est_date_start");
  date_start_label.innerHTML ="date_start_label: ";
  date_start_input.setAttribute("type", "date");
  date_start_input.setAttribute("name", "est_date_start");
  date_start_input.setAttribute("id", "est_date_start"+last_index+"");
  
  est_day_label.setAttribute("for", "est1_day");
  est_day_label.innerHTML = "Estimated Number Of Days: ";
  est_day_input.setAttribute("type", "number");
  est_day_input.setAttribute("name", "est_day");
  est_day_input.setAttribute("id", "est_day"+last_index+"");

  add_dependency.innerHTML = "Add Dependencies";
  add_dependency.classList.add("add_dependencies");

  add_another_task.setAttribute("id", "add_another_task"+last_index+"");
  add_another_task.innerHTML = "Add Another Task";
  add_another_task.addEventListener("click", addTask);


  //appending
  project_modal.appendChild(task_fieldset);
  task_fieldset.appendChild(delete_button);
  task_fieldset.appendChild(task_legend);

  task_fieldset.appendChild(task_label);
  task_label.appendChild(task_name_input);

  task_fieldset.appendChild(date_start_label);
  date_start_label.appendChild(date_start_input);

  task_fieldset.appendChild(est_day_label);
  est_day_label.appendChild(est_day_input);

  task_fieldset.appendChild(add_dependency);
  task_fieldset.appendChild(add_another_task);
} 