
document.getElementById("add-task").addEventListener('click', () => {
    let table = document.getElementById("list");
    let row = table.insertRow(2);
    row.insertCell(0).innerHTML = document.getElementById("due-date").value;
    row.insertCell(1).innerHTML = document.getElementById("new-task").value;
    let status = row.insertCell(2);
    status.appendChild(createCompleteButton());
    document.getElementById("new-task").value = '';
})

function createCompleteButton() {
    let btn = document.createElement('button');
    btn.className = "btn btn-secondary";
    btn.id = "complete-btn";
    btn.innerHTML = "In Progress";
    btn.onclick = () => {
        btn.innerHTML = "Complete";
        btn.className = "btn btn-success";
    };
    return btn;
}