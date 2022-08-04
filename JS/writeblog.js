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

function category_id(data) {
    let str = "";
    for (let i = 0; i < data.length; i++) {
        str += `<option value=${data[i].id}>${data[i].name}</option>`
    }
    document.getElementById("category_id").innerHTML = str;
}


function create(data) {
    let content = document.getElementById("content").value;
    let date = document.getElementById("date").value;
    let title = document.getElementById("title").value;
    let idCategory = document.getElementById("category_id").value;

    let obj = {
        title: title,
        content: content,
        date: date,
        img: data,
        category: {
            id: idCategory
        }
    }

    console.log("obj");
    console.log(obj);

    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/blogs",
        data: JSON.stringify(obj),
        //xử lý khi thành công
        success: function (data) {
            console.log(data.content)
            location.href = "index.html";
        },
        error: function (err) {
            console.log(err)

        }
    })

}


    function LoadFile(){
        let fileImg = document.getElementById("imgCreate").files;
        if (fileImg.length === 0) {
            alert("ảnh chưa up");
            return;
        }
        let formData = new FormData();
        formData.append("file", fileImg[0]);
        $.ajax({
            contentType: false,
            processData: false,
            type: "POST",
            data: formData,
            url: "http://localhost:8080/blogs/img",
            success: function (data) {
                create(data);
            }
        });
    }