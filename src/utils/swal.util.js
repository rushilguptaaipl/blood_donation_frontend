import swal from "sweetalert";

export const showSuccessMessage = (message) => {
    return swal({
        title: message,
        icon: "success",
    });
};

export const showErrorMessage = (message) => {
    return swal({
        title: message,
        icon: "error",
    });
};

export const showWarningMessage = (message) => {
    return swal({
        title: message,
        icon: "error",
    })
};