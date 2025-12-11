//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let  id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
    });


    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animation footer on scroll
    let footer = document.querySelector('footer');
    
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement. scrollHeight);
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent default temporarily to control submission
    const form = event.target;
    const msg = document.getElementById("msg");

    // Show success message
    msg.innerHTML = "Message sent successfully ✓";
    
    // Submit the form to the Google Apps Script
    form.submit();

    // Clear the message after 5 seconds and reset the form
    setTimeout(() => {
        msg.innerHTML = "";
        form.reset();
    }, 5000);
}
// const scriptURL = 'https://script.google.com/macros/s/AKfycbyTklRtm6l6cwL-8nvBx-ZSVuxFRSoEs1c6A3unJuw7x9jl3-hXTnxny5Xlxz3X51DQLA/exec'
// const form = document.forms['submit-to-google-sheet']
// const msg = document.getElementById("msg")


//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => {
//         msg.innerHTML = "Message sent sucessfully &#x2713"
//         setTimeout(function(){
//             msg.innerHTML = ""
//         },5000)
//         form.reset()
//       })
//       .catch(error => console.error('Error!', error.message))
// });

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

