export const requiredValidation = function(formData) {

    for (const formControlName in formData) {
        if (formControlName !== 'isValid') {
            if (!formData[formControlName].value.length) {
                formData[formControlName].error = `${formControlName.charAt(0).toUpperCase()}${formControlName.substring(1)}  is a required field`
                formData.isValid = false
                return
            } else {
                formData[formControlName].error = ''
            }
        }
    }

    formData.isValid = true
}

export const emailValidation = function(formData) {

    const emailExpression = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
    if (!emailExpression.test(formData.email.value)) {
        formData.email.error = "Email must be valid"
        formData.isValid = false
        return
    }
    formData.email.error = ""
    formData.isValid = true
}

export const passwordValidation = function(formData) {
    if (formData.password.value.length < 8) {
        formData.password.error = "Password must be at least 8 characters"
        formData.isValid = false
        return;
    }

    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    const passwordExpression = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
    if (!passwordExpression.test(formData.password.value)) {
        formData.password.error = "Password must contain at least 8 characters, 1 uppercase and lowercase letter and 1 special character"
        formData.isValid = false
        return
    }

    formData.password.error = ""
    formData.isValid = true
}
