const applybtn = document.getElementById('apply-btn');
const ordercomfirm = document.getElementById('order-comfirm');


applybtn.addEventListener('click',()=>{
        ordercomfirm.classList.toggle('show');

        if (ordercomfirm.classList.contains('show')) {
            applybtn.textContent = 'OK';
             applybtn.style.backgroundColor = 'orange';
        } else {
            applybtn.textContent = 'Apply';
            applybtn.style.backgroundColor = '#ff000061';
        }

})
