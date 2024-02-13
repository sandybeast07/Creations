let toastBox = document.getElementById('toast-box');
let successMsg = '<i class="fa-solid fa-circle-check" style="color: green;"></i> Successsfully Submitted';
let failureMsg = '<i class="fa-solid fa-circle-xmark" style="color: red;"></i> Invalid Input, Check Again';
let errorMsg = '<i class="fa-solid fa-circle-exclamation" style="color: orange;"></i> Error 404';

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes('Successsfully')) {
        toast.classList.add('success');
    }

    if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    if (msg.includes('Error')) {
        toast.classList.add('error');
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
}