function showPage(pageId) {
    // Itatago lahat ng pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none'; 
    });

    // Ipapakita ang piniling page
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        target.style.display = 'flex'; 
    }

    // Update ang navigation buttons (glowing pink effect)
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        const checkId = (pageId === 'gallery') ? 'creator' : pageId;
        if (btn.innerText.toLowerCase() === checkId) {
            btn.classList.add('active-tab');
        } else {
            btn.classList.remove('active-tab');
        }
    });

    window.scrollTo(0, 0); 
}

function checkPass() {
    const bday = document.getElementById('birthday').value;
    const nick = document.getElementById('nickname').value.trim(); // Trim para iwas error sa extra space

    if(bday === "06/28/2007" && nick.toLowerCase() === "nikolay") {
        showPage('home');
    } else {
        alert("Ops! Mali po. Haixxt buti nalang cutie pie ka. Try again!");
    }
}