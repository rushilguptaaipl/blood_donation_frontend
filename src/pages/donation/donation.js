import { showErrorMessage } from "../../utils/swal.util"

export const checkContactNumberLength = async (number) => {

    if (number.toString().trim().length !== 10) {
        return await showErrorMessage("Number must be of 10 digits")
    }
}

export const checkAge = async (dob) => {
    const userDob = new Date(dob);
    const currentDate = new Date();
    const eighteenYearsAgo = new Date(
        currentDate.getFullYear() - 18,
        currentDate.getMonth(),
        currentDate.getDate()
    );
    if (userDob >= eighteenYearsAgo) {
        await showErrorMessage("Age must be greater than 18")
        return false
    }
    return true
}