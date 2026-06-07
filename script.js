document.addEventListener('DOMContentLoaded', function() {
    
    const formular = document.getElementById('contact-form');
    
    formular.addEventListener('submit', function(udalost) {
        udalost.preventDefault();
        
        const jmeno = document.getElementById('jmeno').value;
        
        alert('Ahoj ' + jmeno + '! Děkujeme za vaši zprávu na fanpage BMW M5 Competition.');
        
        formular.reset();
    });
    
});