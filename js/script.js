var typed = new Typed(".typing",{
    strings:["Software Developer", "Web Devloper", "Web Designer", "Back-End Devloper", "SQL Developer", "Programmar"],
    typeSpeed: 100,
    Backspeed: 60,
    loop: true
})

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});


function calculateAge() {
    var dob = new Date('1999-11-09');
    var today = new Date();

    var yearsDiff = today.getFullYear() - dob.getFullYear();
    var monthsDiff = today.getMonth() - dob.getMonth();
    var daysDiff = today.getDate() - dob.getDate();

    if (monthsDiff < 0 || (monthsDiff === 0 && today.getDate() < dob.getDate())) {
        yearsDiff--;
        monthsDiff += 12;
    }

    if (daysDiff < 0) {
        monthsDiff--;
        daysDiff += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    var age = yearsDiff ;
    var months= monthsDiff;
    var days= daysDiff;
    document.getElementById("age").innerHTML =  age;
}
window.addEventListener("load", () => {
    calculateAge();
})
