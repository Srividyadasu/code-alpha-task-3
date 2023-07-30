function submitForm() {
    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var uploadFile = document.getElementById('uploadFile').value;

    if (username === '' || email === '' || state === '' || city === '' || education === '' || skills === '' || experience === '' || uploadFile ==='') {
        document.getElementById('errorMessage').textContent = 'Please fill in all required fields.';
    } else {
        // Code to submit the form data to the server
        alert('Congratulations Submitted successful!');
        document.getElementById('errorMessage').textContent = '';
        document.getElementById('registrationForm').reset();
    }
}

// myformElement.addEventListener('submit',function(e){
//     e.preventDefault()
//     nameElement.addEventListener("change",function(event){
//         if(event.target.value===""){
//             nameErrEl.content="Required**";
//         }
//         else{
//             nameErrEl.content="";
//         }
//         formData.name=event.target.value
//     });
    
//     EmailElement.addEventListener("change",function(event){
//         if(event.target.value===""){
//             EmailElement.content="Required**";
//         }
//         else{
//             EmailErrEl.content="";
//         }
//         formData.email=event.target.value
//     });
    
//     EducationElement.addEventListener("change",function(event){
//         if(event.target.value===""){
//             EducationErrEl.content="Required**";
//         }
//         else{
//             EducationElement.content="";
//         }
//         formData.education=event.target.value
//     });
    
//     CityElement.addEventListener("change",function(event){
//         if(event.target.value===""){
//            CityErrEl.content="Required**";
//         }
//         else{
//             CityElement.content="";
//         }
//         formData.city=event.target.value
//     });
    
//     ZipElement.addEventListener("change",function(event){
//         if(event.target.value===""){
//           ZipErrEl.content="Required**";
//         }
//         else{
//             ZipElement.content="";
//         }
//         formData.zip=event.target.value
//     });
    
//     StateElement.addEventListener("change",function(event){
//         if(event.target.value===""){
//             StateErrEl.content="Required**";
//         }
//         else{
//             StateElement.content="";
//         }
//         formData.state=event.target.value
//     });
    
//     ExperienceElement.addEventListener("change", function(event) {
//         formData.status = event.target.value;
//       });
    
//     SkillElement.addEventListener("change", function(event) {
//         formData.skillstatus = event.target.value;
//       });
    
//     maleElement.addEventListener("change", function(event) {
//         formData.gender = event.target.value;
//       });
    
//     femaleElement.addEventListener("change", function(event) {
//         formData.gender = event.target.value;
//       });

     
// })
    


// myformElement.addEventListener("submit",function(event){ 
// event.preventDefault();
// Btnelement.classList.add("btn,btn-primary")
// Btnelement.textContent="Submitted";
// })