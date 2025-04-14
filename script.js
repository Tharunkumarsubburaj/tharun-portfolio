// ============================================================ nav bar code ==============================================================================================
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menubtn');
    const menuList = document.querySelector('.menu');
    const logoname = document.querySelector('.logoname');
    const logobox = document.querySelector('.logo');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;
        logobox.style.width = menuOpen ? '0%' : '100%';
        menuList.classList.toggle('active');
        logoname.classList.toggle('logohide');
    });
});
// ============================================================ nav bar code ==============================================================================================

document.addEventListener('DOMContentLoaded', function() {
    const myphoto = document.querySelector('#myphoto');
    // Disable right-click 
    myphoto.addEventListener('contextmenu', function(e) { 
        e.preventDefault(); 
    }); 
    
    // Disable keyboard shortcuts 
    myphoto.addEventListener('keydown', function(e) { 
        if (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'u')) { 
            e.preventDefault(); 
        } 
    }); 
});
