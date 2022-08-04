//call lấy dữ liệu từ database

$.ajax({
    type: "Get", headers: {
        'Accept': 'application/json', 'Content-text': 'application/json'
    }, url: 'http://localhost:8080/blogs', //xử lý khi thành công
    success: function (data) {
        console.log(data.content)
        show(data.content);
    }, error: function (err) {
        console.log(err)
    }
})


function show(data) {
    let str = "";
    for (let i = 0; i < data.length; i++) {
        str += `
                     <article class="col-12 col-md-6 tm-post">
                    <hr class="tm-hr-primary">
                    <a  class="effect-lily tm-post-link tm-pt-60">
                        <div class="tm-post-link-inner">
                            <img src="${data[i].img}" alt="" class="img-fluid">
                        </div>
                        <span class="position-absolute tm-new-badge">New</span>
                        <h2 class="tm-pt-30 tm-color-primary tm-post-title">${data[i].title}</h2>
                    </a>
                    <div class="d-flex justify-content-between tm-pt-45">
                        <span class="tm-color-primary"   >${data[i].category.name}</span>
                        <span class="tm-color-primary" >${data[i].date}</span>
                    </div>
                    <div class="d-flex justify-content-between tm-pt-45">
                    <button "><a href="edit.html?id=${data[i].id}">Edit</a> </button>
                    <button onclick="Deleteblog(${data[i].id})">Delete</button>
                    </div>
                    </hr>
                </article>
                `
    }
    document.getElementById("show").innerHTML = str;
}
