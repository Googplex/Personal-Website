var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    console.log(tabname);
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

var sidemenu = document.getElementById("side-menu");
function open_menu(){
    sidemenu.style.right = "0";
}
function close_menu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycby8vGYALYMA0heSmRJp9CkHCrpBbx2D99QnS_u2uUMEoZodQ52l3VHQYPU3A4lmdIEs/exec'
  const form = document.forms['submit-to-google-sheet']
  const message = document.getElementById("suc-message");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        message.innerHTML = "Message has been sent sucessfully";
        setTimeout(function(){
            message.innerHTML = "";
        },5000)
        form.reset()
      } )
      .catch(error => console.error('Error!', error.message))
  })

