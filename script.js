var storage = localStorage.getItem("StorageKey");

if (storage != null){
  var data = JSON.parse(storage);
  loadData(data);
  var id = data.length;
} else {
  id = 0;
  data = [];
}

function loadData(array){
  array.forEach(function(todo){
    newItem(todo.name, todo.trash, todo.id);
  });
}

document.body.onkeyup = function(e){
  if (e.keyCode === 13){
    // localStorage.setItem("list", list.value);
    var todo = document.getElementById("input").value;
    newItem(todo, false, id);
    // console.log("Enter clicked!");
    data.push({
      name: todo,
      trash: false,
      id: id
    });
    localStorage.setItem("StorageKey", JSON.stringify(data))
    // id = id + 1;
  }
};

function newItem(todo, trash, id){
  // console.log("Inside newItem");
  // var item = document.getElementById("input").value;
  // console.log(item);

  if (trash == true) {
    return;
  }

  // store UL as a variable
  var ul = document.getElementById("list");

  var li = document.createElement("li");

  // put text in list item
  li.appendChild(document.createTextNode("- " + todo));

  li.setAttribute("id", id);
  
  // put list item in ul
  ul.appendChild(li);

  todo = document.getElementById("input").value = "";

  // document.getElementById("input").value = "";

  li.onclick = removeItem;
}

function removeItem(e){
  // e.target.remove();
  element = e.target;
  element.remove();

  data[element.id].trash = true;
  localStorage.setItem("StorageKey", JSON.stringify(data));
};

// document.body.onkeyup = function(e){
//   if (e.keyCode === 13){
//     // console.log(e.keyCode);
//     console.log("Enter clicked!");
//   }
// };

// list.value = localStorage.getItem("list");

