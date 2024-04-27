import { showErrorMessage } from "../../utils/swal.util"

export const checkContactNumberLength = async (number) => {

    if (number.toString().trim().length !== 10) {
        return await showErrorMessage("Number must be of 10 digits")
    }
}
