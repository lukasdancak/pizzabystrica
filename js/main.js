// Simple JavaScript for PizzaByStirica website
document.addEventListener('DOMContentLoaded', function() {
    console.log('PizzaByStirica website loaded!');
    
    // Example: Add interactivity to menu items
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.backgroundColor = '#f0f0f0';
            setTimeout(() => {
                this.style.backgroundColor = 'white';
            }, 200);
        });
    });
});