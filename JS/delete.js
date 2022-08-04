function Deleteblog(id){

    $.ajax({
        type: "Delete",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/blogs/"+id,
        data: JSON.stringify(id),
        //xử lý khi thành công
        success: function (data) {
            console.log(data.content)
        },
        error: function (err) {
            console.log(err)
        }
    })
    location.href = "index.html";
}