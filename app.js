window.addEventListener("load", () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#task");

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const task = input.value;

		if (!task) {
			alert("please fill out the task");
			return;
		}

		const task_el = document.createElement("div");
		task_content_el.classList.add("content");

		task_content_el.innerText = task;

		const task_input_el = document.createElement("input");
		task_input_el.classList.add("text");
		task_input_el.type = "text";
		task_input_el.value = task;
		task_input_ei.setAtribute("read only", "readonly");

		task_content_el.appendChild(task - input - el);
		const task_actions_el = document.createElement("div");
		task_actions_el.classList.add("actions");

		const task_adit_el = document.createElement("button");
		task_edit_el.classList.add("edit");
		task_edit_el.innerHTML = "edit";

		const task_delete_el = document.createElement("button");
		task_delete_el.classList("delete");
		task_delete_el.innerHTML = "delete";
		task_actions_el.appendChild(task-edit-el);
		task_actions_el.appendChild(task-delete-el);

		task-el.appendChild(task-actions-el);

		list_el.appendChild(task-el);

		input.value = "";

		task_adit_el.addEventListener('click', () => {
			if(task-edit-el.innerText.toLowerCase() == "edit"){
				task_input_el.removeAttribute("readonly")
				task_input_el.innerText = "save";
			}else{
				task_input_el.setAttribute("readonly", "readonly");
				task_edit_el.innerText = "edit";


			}

		});
		task_delete_el.addEventListener('click', () => {
			list_el.removeChild(task_el);
		})
	});
});
