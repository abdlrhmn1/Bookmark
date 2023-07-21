var siteName = document.getElementById('siteName')
var siteURL = document.getElementById('siteURL')
var button = document.getElementById('btn')



var websites = [];

if (localStorage.getItem('Sites') != null) {

    websites = JSON.parse(localStorage.getItem("Sites"));
    display()
}


function addSite() {
    if (nameValid() == true && urlValid() == true) {
        var site = {
            siteName: siteName.value,
            url: siteURL.value,
        }
        websites.push(site)
        localStorage.setItem('Sites', JSON.stringify(websites))
        display()
        reset()
    }
    else {
        alert(`Site Name or Url is not valid, Please follow the rules below :
        *Site name must contain at least 3 characters
        *Site URL must be a valid one
        `)
    }

}

function display() {
    var box = "";
    for (i = 0; i < websites.length; i++) {
        box += `
            <tr>
            <td>${i + 1}</td>
            <td>${websites[i].siteName}</td>
            <td><button class="btn btn-warning"><i class="fa-solid fa-eye pe-2"></i> <a href="https://www.${websites[i].url}" target="_blank" class="text-decoration-none text-white">Visit</a></button></td>
            <td><button class="btn btn-danger" onclick="deleteFun(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
            </tr>
    `
    }
    document.getElementById('tableRow').innerHTML = box;
}
function reset() {
    siteName.value = "";
    siteURL.value = "";
}

function deleteFun(index) {
    websites.splice(index, 1)
    localStorage.setItem('Sites', JSON.stringify(websites))
    display()
}

function nameValid() {
    var regex = /^[a-z]{3,}$/
    return regex.test(siteName.value);
}

function urlValid() {
    var regex = /^[a-z]{1,}\.com$/
    return regex.test(siteURL.value);
}