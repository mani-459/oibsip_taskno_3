let completed = 0,rem = 0;
document.getElementById("b1").onclick = function () {
  let tit = document.getElementById("tit").value;
  let p = document.getElementById("paragraph").value;
  if (tit.trim() == "" || p.trim() == "") {
    //qwdw
  } else {
    console.log("yes");
    rem += 1;
    document.getElementById("l").innerHTML = "LeftOut : "+rem;
    var table = document.getElementById("table");
    var newRow = document.createElement("tr");
    var cell2 = document.createElement("td");
    cell2.style.width = "100px";
    cell2.innerHTML = document.getElementById("tit").value;
    var cell4 = document.createElement("td");
    cell4.style.width = "300px";
    cell4.innerHTML = document.getElementById("paragraph").value;
    var cell3 = document.createElement("td");
    var completedButton = document.createElement("button");
    completedButton.value = "Completed";
    completedButton.id = "Completed";
    completedButton.name = "Completed";
    completedButton.innerHTML = "Completed";
    var removeButton = document.createElement("button");
    removeButton.value = "remove";
    removeButton.id = "remove";
    removeButton.name = "remove";
    removeButton.innerHTML = "Remove";

    // Append buttons to cell3
    cell3.appendChild(completedButton);
    cell3.appendChild(removeButton);

    // Append cells to the new row
    newRow.appendChild(cell2);
    newRow.appendChild(cell4);
    newRow.appendChild(cell3);
    // Append the new row to the table
    table.appendChild(newRow);
    document.getElementById("tit").value = "";
    document.getElementById("paragraph").value = "";
  }
};
document.getElementById("table").addEventListener("click", function (event) {
  if (
    event.target &&
    event.target.nodeName == "BUTTON" &&
    event.target.value == "Completed"
  ) {
    completed += 1;
    rem -= 1;
    document.getElementById("c").innerHTML = "Completed : "+rem;
    document.getElementById("l").innerHTML = "LeftOut : "+rem;
    // Find the parent row (tr) of the clicked button
    var clickedButton = event.target;
    var parentRow = clickedButton.parentNode.parentNode;

    // Get the values from the desired cells
    var sno = parentRow.cells[0].innerHTML;
    var todo = parentRow.cells[1].innerHTML;

    // Create a new row in the "Completed Tasks" table
    var completedTable = document.getElementById("completedTable");
    var newRow = completedTable.insertRow();
    var cell1 = newRow.insertCell();
    var cell2 = newRow.insertCell();

    // Set the values for the new row
    cell1.innerHTML = sno;
    cell2.innerHTML = todo;
      // Set the width for the cells in the new row
      cell1.style.width = "100px"; // Example style for width
      cell2.style.width = "300px"; // Example style for width
    // Remove the row from the "Tasks To Be Done" table
    var table = document.getElementById("table");
    table.removeChild(parentRow);
  }
});
document.getElementById("table").addEventListener("click", function (event) {
  if (
    event.target &&
    event.target.nodeName == "BUTTON" &&
    event.target.value == "remove"
  ) {
    rem -=1;
    document.getElementById("l").innerHTML = "LeftOut : "+rem;
    // Find the parent row (tr) of the clicked button
    var clickedButton = event.target;
    var parentRow = clickedButton.parentNode.parentNode;
    // Remove the row from the "Tasks To Be Done" table
    var table = document.getElementById("table");
    table.removeChild(parentRow);
  }
});
