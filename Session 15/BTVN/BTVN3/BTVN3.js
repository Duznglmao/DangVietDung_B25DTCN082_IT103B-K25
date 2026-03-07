let subjects = [];

function addSubject() {
    let elementInput = document.getElementById("subjectInput");
    let subjectName = elementInput.value.trim();

    if (subjectName === "") {
        alert("tên môn học không được để trống!");
        return;
    }

    subjects.push(subjectName);
    elementInput.value = ""; 
    renderSubjects();
}

function renderSubjects() {
    let listArea = document.getElementById("subjectList");
    let content = "";

    for (let i = 0; i < subjects.length; i++) {
        content += `<p>${i + 1}. ${subjects[i]}</p>`;
    }

    listArea.innerHTML = content;
}