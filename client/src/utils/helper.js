export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export function imgUpload(){
  const file = document.querySelector("#file");

  file.addEventListener("change", function (){
    const reader = new FileReader()
  
  console.log(reader)

  reader.readAsDataURL(this.files[0])
  })
}