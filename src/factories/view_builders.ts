class taskFormBuilder {
  function() {
    const wrapper: HTMLDivElement = document.createElement("div");
    wrapper.classList.add("task", "task-flex");

    const nameInput: HTMLInputElement = document.createElement("input");
    nameInput.classList.add("task-name", "second-level-header");
    nameInput.type = "text";
    nameInput.placeholder = "Task name";
    // TODO gotta set deadline and priority somehow.
    const descriptionInput: HTMLTextAreaElement =
      document.createElement("textarea");
    descriptionInput.classList.add("task-description");
    descriptionInput.name = "description";
  }
}
