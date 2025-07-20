const scriptURL = 'https://script.google.com/macros/s/AKfycbyy_VlG8bXqtgSMPkvhE47V_EkbZezsj6GM2QhCtjy7MYAjXpq52YNsgEEj2-87u_R2eQ/exec'
  const form = document.forms['submit-to-google-sheet'];
  const msgw=document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msgw.innerHTML="Thank You for Subscribing!";
        setTimeout(function(){
            msgw.innerHTML="";
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })