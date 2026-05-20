const btn = document.getElementById("btn")
const dob = document.getElementById("dob")
const result = document.getElementById("result")

function calculateAge(){
    const dobVal = dob.value
    if(dobVal === ""){
        alert("Please Enter Your Date of Birth.")
    }else{
        const age = getAge(dobVal)
        result.innerText = `You are ${age} ${age <= 1 ? "Year" : "Years"} Old.`
    }
}

function getAge(dobVal){
    const today = new Date()
    const birthday = new Date(dobVal)
    let age = today.getFullYear() - birthday.getFullYear()
    const birthday_passed = today.getMonth() > birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() > birthday.getDate())
    if(!birthday_passed){
        age--
    }else{
        age
    }
    return age
}

btn.addEventListener("click", calculateAge)