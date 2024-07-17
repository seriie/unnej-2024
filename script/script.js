document.addEventListener('DOMContentLoaded', function() {
    const ticketButton =  document.querySelector('.content .button');
    
    if (ticketButton) {
        ticketButton.addEventListener('click', function() {
            ticketButton.classList.add('active', 'before', 'after');
            setTimeout(() => {
                window.location.href = "ticket.html";
            }, 1000);
        });
    }
    showLoading();
    setTimeout(() => {
        hideLoading();
    }, 1500);
});


function showLoading() {
    document.querySelector('.wrapper').style.display = "flex";
    document.querySelector('.wrapper').style.transform = "scale(1.2)";
}

function hideLoading() {
    document.querySelector('.wrapper').style.display = "none";
}