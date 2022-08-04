$.ajax({
    type: "Get", headers: {
        'Accept': 'application/json', 'Content-text': 'application/json'
    }, url: 'http://localhost:8080/categories', //xử lý khi thành công
    success: function (data) {
        console.log(data.content)
        category_id(data.content);
    }, error: function (err) {
        console.log(err)
    }
})



// console.log("Window Location:",window.location);
const myKey = window.location.search;
// console.log("Keys & Value:",myKey)
const urlParams = new URLSearchParams(myKey);
const id = urlParams.get('id')
console.log(id)
console.log(id)
console.log(id)
console.log(id)


$.ajax({
    type: "Get",
    headers: {
        'Accept': 'application/json', 'Content-text': 'application/json'
    }, url: 'http://localhost:8080/blogs/' + id,
    //xử lý khi thành công
    success: function (data) {
        showEdit(data);
    }, error: function (err) {
        console.log(err)
    }
})

function showEdit(data) {
    let str = ` <td><input hidden id="idEdit" value= ${data.id} ></td>
                    <td><input id="titleEdit" value= ${data.title} ></td>
                    <td><input id="contentEdit" value=${data.content}></td>
                    <td><input id="dateEdit" type="date" value=${data.date}></td>
                    <td> <img id="imageEdit" src="${data.img}" style="width: 120px " height="150px">
                    <br>
                    <input id="imgEdit"  type="file"></td>
                    <td >
                    <select id="category_idEdit">
                    <option value="1">ca nhac</option>
                    <option value="2">the thao</option>
                    </select>
                    </td>`;

    document.getElementById("editBlog").innerHTML = str;
}


function checkEdit() {
    let fileImg = document.getElementById("imgEdit").files;
    if (fileImg.length === 0){
        editNoUpFile();
    }else {
        editYesUpFile()
    }


    }






function editNoUpFile() {
    let id = $("#idEdit").val();
    let title = $("#titleEdit").val();
    let content = $("#contentEdit").val();
    let date = $("#dateEdit").val();
    let img = document.getElementById("imageEdit").src;
    let category_id= $("#category_idEdit").val();

    let blog = {
        id: id,
        title: title,
        content: content,
        date: date,
        img: img,
        category: {category_id}
    }
    callEdit(blog);

}

function callEdit(blog){
    $.ajax({
        type: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/blogs",
        data: JSON.stringify(blog),
        //xử lý khi thành công
        success: function (data) {
            show(data);
        },
        error: function (err) {
            console.log(err)
        }
    })
}


function editYesUpFile() {
    let id = $("#idEdit").val();
    let title = $("#titleEdit").val();
    let content = $("#contentEdit").val();
    let date = $("#dateEdit").val();
    let fileImg = document.getElementById("imgEdit").files;
    let category_id= $("#category_idEdit").val();

    formData.append("file", fileImg[0]);
    $.ajax({
        contentType: false,
        processData: false,
        type: "POST",
        data: formData,
        url: "http://localhost:8080/products/Img",
        success: function (data) {
            let blog = {
                id: id,
                title: title,
                content: content,
                date: date,
                img: data,
                category: {
                    category_id
                }
            }
            callEdit(blog)
        }
    });
}