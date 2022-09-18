var services = document.getElementById('Services');
var Original_Content = `<div>
<div class="icon"><i class="bi bi-briefcase"></i></div>
<h4 class="title"><a href="">TITLES</a></h4>
<p class="description">DESCRIPTION</p>
</div>`

fetch('http://localhost:3000/services')
  .then(response => response.json())
  .then(json => {
    json.services.forEach(element => {
        var content = Original_Content;
        content = content.replace('TITLES',element.A)
        content = content.replace('DESCRIPTION',element.B)
        var service = document.createElement('div')
        service.innerHTML = content
        service.className = "col-lg-4 col-md-6 icon-box"
        services.appendChild(service)
    });
  })
