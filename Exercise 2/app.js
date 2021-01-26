//On Page Load Hide the modify section
$(document).ready(function () {
  $("#modify").hide();
});

//array for all the selected fileds
let selectedArray = [];

//function for adding new rows to the tables
const addRow = (event) => {
  event.preventDefault();
  const firstName = $("#data1").val();
  const lastName = $("#data2").val();
  const color = $("#color").val();
  const pattern = /^#[0-9a-f]{3,6}$/i;
  if (!pattern.test(color)) {
    alert("Please enter color in hex format only");
    return;
  }
  const txtSize = $("#txtSize").val();
  //Unique id for all rows
  const id = Date.now();
  const string = `<tr id=${id}>
                      <td><input type="checkbox" class="form-check-input" onchange="selectDeselect(${id})" /></td>
                      <td color="${color}" tsize="${txtSize}" style="background-color:${color}; font-size:${txtSize}">${firstName}</td>
                      <td color="${color}" tsize="${txtSize}" style="background-color:${color}; font-size:${txtSize}">${lastName}</td>
                      <td><button class="btn btn-success" onclick="editRow(${id})">EDIT</button></td>
                      <td><button class="btn btn-danger" onclick="deleteRow(${id})">DELETE</button></td>
                    </tr>`;
  //Appending the new row to the end of the tablebody
  $("table > tbody").append(string).hide().fadeIn(1000);
  //Form Reset after the values have been added
  $("#addForm")[0].reset();
};

// Function to delete the Rows
const deleteRow = (id) => {
  $(`#${id}`).fadeOut(500, function () {
    $(this).remove();
  });
};

//Function for editing the row
const editRow = (id) => {
  const firstName = $(`#${id} td:eq(1)`).html();
  const lastName = $(`#${id} td:eq(2)`).html();
  const color = $(`#${id} td:eq(1)`).attr("color");
  const txtSize = $(`#${id} td:eq(1)`).attr("tsize");
  $("#addBtn").html("Update").attr("onclick", `updateRow(${id})`);
  $("#data1").val(firstName);
  $("#data2").val(lastName);
  $("#addBtn").toggleClass("btn-success");
  $("#addBtn").toggleClass("btn-primary");
  $("#color").val(color);
  $("#txtSize").val(txtSize);
};

//Function for updating the row
const updateRow = (id) => {
  const firstName = $("#data1").val();
  const lastName = $("#data2").val();
  const color = $("#color").val();
  const txtSize = $("#txtSize").val();
  $(`#${id} td:eq(1)`).html(firstName);
  $(`#${id} td:eq(2)`).html(lastName);
  $(`#${id} td:eq(1)`).attr("color", color);
  $(`#${id} td:eq(1)`).css("backgroundColor", color);
  $(`#${id} td:eq(2)`).attr("color", color);
  $(`#${id} td:eq(2)`).css("backgroundColor", color);
  $(`#${id} td:eq(1)`).attr("tsize", txtSize);
  $(`#${id} td:eq(2)`).attr("tsize", txtSize);
  $(`#${id} td:eq(1)`).css("fontSize", txtSize);
  $(`#${id} td:eq(2)`).css("fontSize", txtSize);
  $("#addBtn").html("Add").attr("onclick", `addRow()`);
  $("#addBtn").toggleClass("btn-success");
  $("#addBtn").toggleClass("btn-primary");
  $("#addForm")[0].reset();
};

//Function to select all whenever select all is checked
const selectAll = () => {
  const state = $("#all").is(":checked");
  selectedArray = [];
  $("tr").each(function () {
    $(this).children()[0].children[0].checked = state;
    if (state) {
      selectedArray.push($(this).attr("id"));
    }
  });
  formString();
};

//Function to insert into selectedArray whenever anything is selected also pop whenever deselcted
const selectDeselect = (id) => {
  const state = $(`#${id}`).children()[0].children[0].checked;
  if (state) {
    selectedArray.push(id);
  } else {
    const index = selectedArray.indexOf(id);
    selectedArray.splice(index, 1);
  }
  formString();
};

//Function for deleting the selected rows
const deleteSelected = () => {
  selectedArray.forEach((id) => {
    $(`#${id}`).fadeOut(500, function () {
      $(this).remove();
    });
  });
  //Emptying the selected Array after all selected values are deleted
  selectedArray = [];
  formString();
};

//Function for shoing the string of how many is selected
const formString = () => {
  $("#totalSelected").html(selectedArray.length);
  //calling the modify function whenever anything is selected
  if (selectedArray.length > 0) showModify(true);
  else showModify(false);
};

//Function to change color and font
const applyChange = (event) => {
  event.preventDefault();
  const color = $("#changeColor").val();
  const pattern = /^#[0-9a-f]{3,6}$/i;
  if (!pattern.test(color)) {
    alert("Please enter color in hex format only");
    return;
  }
  const text = $("#changeTextSize").val();
  //For all selected id's in the selected array change the text size and background color
  selectedArray.forEach((id) => {
    $(`#${id}`).children()[1].style.backgroundColor = color;
    $(`#${id}`).children()[2].style.backgroundColor = color;
    $(`#${id}`).children()[1].style.fontSize = text;
    $(`#${id}`).children()[2].style.fontSize = text;
    $(`#${id}`).children()[1].setAttribute("color", color);
    $(`#${id}`).children()[1].setAttribute("tsize", text);
    $(`#${id}`).children()[2].setAttribute("color", color);
    $(`#${id}`).children()[2].setAttribute("tsize", text);
  });
  //After the values have been changed reset the form
  $("#modifyForm")[0].reset();
};

//Function to show and hide the modify section
const showModify = (choice) => {
  //if choice is true then show the section
  if (choice) {
    $("#modify").show();
  }
  // if choice is false then hide the section
  if (!choice) {
    $("#modify").hide();
  }
};
