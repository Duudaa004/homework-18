// work 1

const firstNameError = document.getElementById("first_name_error")


const registrationForm = document.getElementById("registration")
registrationForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const registrationValues = document.forms["registration"]
  const firstName = registrationValues.firstName
  const lastName = registrationValues.last_name
  const lastNameError = registrationValues.last_name_error
  const email = registrationValues.email
  const emailError = registrationValues.email_error
  const password = registrationValues.password
  const passwordError = registrationValues.password_error
  const confirm = registrationValues.confirm
  const confirmError = registrationValues.confirm_error
  const description = registrationValues.description
  const descriptionError = registrationValues.description_error
  
  try {
    if (firstName.value.length <= 6) {
        firstName.style.border = "4px solid red"
        throw new Error("First name must contain minimum 6 letter")
      } else {
        firstName.style.border = "4px solid green"
        firstNameError.textContent = "First name is valid"
        firstNameError.style.color = "green"
      }
    } catch (error) {
      firstNameError.textContent = error.message
      firstNameError.style.color = "red"
    }
  })