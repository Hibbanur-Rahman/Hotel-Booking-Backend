var profilePhotoUpload=document.querySelectorAll('#profilePhotoUpload');

profilePhotoUpload.forEach((element)=>{
    element.addEventListener('change', (event) => {
        var selectedFile = event.target.files[0];
        var imgInputFeildCard=element.parentElement.parentElement;
        var imagePreviewCard=element.parentElement.parentElement.previousElementSibling;
        var imgPreview=element.parentElement.parentElement.previousElementSibling.childNodes[1];
        
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imgInputFeildCard.classList.add('d-none');
                imagePreviewCard.classList.remove('d-none');
                imgPreview.src = e.target.result;
            }
            reader.readAsDataURL(selectedFile);
        }
    })  
})


const menuItemsForm = document.querySelector("#menuItemsForm");
const addMenu = document.querySelector("#addMenu");
const manyForm=document.querySelector('.manyForm');
const manyFormInnerData= manyForm.innerHTML;

addMenu.addEventListener("click", () => {
  var x=manyForm.innerHTML;
  x+=manyFormInnerData;
  manyForm.innerHTML=x;
});

document.getElementById('submitMenuItems').addEventListener('click', () => {
    const menuItemsFormAll = document.querySelectorAll('.menuItemsForm');

    const formDataArray = [];

    menuItemsFormAll.forEach((form) => {
        const formData = new FormData(form);
        formDataArray.push(Object.fromEntries(formData.entries()));
    });

    sendDataToServer(formDataArray);
});

function sendDataToServer(formDataArray) {
    fetch('/addMenu', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataArray),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}