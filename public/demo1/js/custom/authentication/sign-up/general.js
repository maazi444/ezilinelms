"use strict";

// Class definition
var KTSignupGeneral = (function () {
    // Elements
    var form;
    var submitButton;
    var validator;
    var validator1;
    var validator2;

    // Handle form
    var handleForm = function (e) {
        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator1 = FormValidation.formValidation(form, {
            fields: {
                first_name: {
                    validators: {
                        notEmpty: {
                            message: "First Name is required",
                        },
                    },
                },
                last_name: {
                    validators: {
                        notEmpty: {
                            message: "Last Name is required",
                        },
                    },
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: "Email address is required",
                        },
                        emailAddress: {
                            message: "The value is not a valid email address",
                        },
                    },
                },
                phoneNumber: {
                    validators: {
                        notEmpty: {
                            message: "Phone Number is required",
                        },
                        phone: {
                            country: function () {
                                return form.querySelector('[name="country"]')
                                    .value;
                            },
                            message: "This is not a valid phone number",
                        },
                    },
                },
                dob: {
                    validators: {
                        notEmpty: {
                            message: "Date of Birth is required",
                        },
                    },
                },
            },
            plugins: {
                bootstrap: new FormValidation.plugins.Bootstrap5({
                    rowSelector: ".fv-row",
                    eleInvalidClass: "",
                    eleValidClass: "",
                }),
            },
        });

        validator2 = FormValidation.formValidation(form, {
            fields: {
                cnic: {
                    validators: {
                        notEmpty: {
                            message: "CNIC is required",
                        },
                        numeric: {
                            message: "CNIC is not numeric",
                        },
                    },
                },
                degree: {
                    validators: {
                        notEmpty: {
                            message: "Current degree is required",
                        },
                    },
                },
                university: {
                    validators: {
                        notEmpty: {
                            message: "University is required",
                        },
                    },
                },
                technology: {
                    validators: {
                        notEmpty: {
                            message: "Technology is required",
                        },
                    },
                },
            },
            plugins: {
                bootstrap: new FormValidation.plugins.Bootstrap5({
                    rowSelector: ".fv-row",
                    eleInvalidClass: "",
                    eleValidClass: "",
                }),
            },
        });

        // begin: Get current Date

        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let currentDate = `0${month}/${day}/${year}`;
        console.log(currentDate);

        // end: Get current Date

        validator = FormValidation.formValidation(form, {
            fields: {
                duration: {
                    validators: {
                        notEmpty: {
                            message: "Course duration is required",
                        },
                    },
                },
                joinDate: {
                    validators: {
                        notEmpty: {
                            message: "Date of Joining is required",
                        },
                    },
                },
                environment: {
                    validators: {
                        notEmpty: {
                            message: "Environment Type is required",
                        },
                    },
                },
                shift: {
                    validators: {
                        notEmpty: {
                            message: "Shift Time is required",
                        },
                    },
                },
                toc: {
                    validators: {
                        notEmpty: {
                            message: "You must accept the terms and conditions",
                        },
                    },
                },
            },
            plugins: {
                bootstrap: new FormValidation.plugins.Bootstrap5({
                    rowSelector: ".fv-row",
                    eleInvalidClass: "",
                    eleValidClass: "",
                }),
            },
        });

        var stepOne = document.querySelector("#stepOne");
        var stepTwo = document.querySelector("#stepTwo");
        var stepThree = document.querySelector("#stepThree");
        var stepOneNxtBtn = document.querySelector("#stepOneNxtBtn");
        var stepTwoNxtBtn = document.querySelector("#stepTwoNxtBtn");
        var stepTwoBackBtn = document.querySelector("#stepTwoBackBtn");
        var stepThreeBackBtn = document.querySelector("#stepThreeBackBtn");

        stepOneNxtBtn.addEventListener("click", function (e) {
            e.preventDefault();
            validator1.validate().then(function (status) {
                if (status === "Valid") {
                    stepOne.style.display = "none";
                    stepTwo.style.display = "block";
                } else {
                    stepOne.style.display = "block";
                    stepTwo.style.display = "none";
                }
            });
        });

        stepTwoBackBtn.addEventListener("click", (e) => {
            e.preventDefault();
            stepTwo.style.display = "none";
            stepOne.style.display = "block";
        });

        stepTwoNxtBtn.addEventListener("click", function (e) {
            e.preventDefault();
            validator2.validate().then(function (status) {
                if (status === "Valid") {
                    stepTwo.style.display = "none";
                    stepThree.style.display = "block";
                } else {
                    stepTwo.style.display = "block";
                    stepThree.style.display = "none";
                }
            });
        });

        stepThreeBackBtn.addEventListener("click", (e) => {
            e.preventDefault();
            stepThree.style.display = "none";
            stepTwo.style.display = "block";
        });

        // Handle form submit
        submitButton.addEventListener("click", function (e) {
            // Prevent button default action
            e.preventDefault();

            // Validate form
            validator.validate().then(function (status) {
                if (status === "Valid") {
                    // Show loading indication
                    submitButton.setAttribute("data-kt-indicator", "on");

                    // Disable button to avoid multiple click
                    submitButton.disabled = true;

                    // Simulate ajax request
                    axios
                        .post(
                            submitButton.closest("form").getAttribute("action"),
                            new FormData(form)
                        )
                        .then(function (response) {
                            // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                            Swal.fire({
                                text: "You have successfully registered! Please check your email for verification.",
                                icon: "success",
                                buttonsStyling: false,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-primary",
                                },
                            }).then(function (result) {
                                if (result.isConfirmed) {
                                    form.querySelector('[name="email"]').value =
                                        "";
                                    window.location.reload();
                                }
                            });
                        })
                        .catch(function (error) {
                            let dataMessage = error.response.data.message;
                            let dataErrors = error.response.data.errors;

                            for (const errorsKey in dataErrors) {
                                if (!dataErrors.hasOwnProperty(errorsKey))
                                    continue;
                                dataMessage += "\r\n" + dataErrors[errorsKey];
                            }

                            if (error.response) {
                                Swal.fire({
                                    text: dataMessage,
                                    icon: "error",
                                    buttonsStyling: false,
                                    confirmButtonText: "Ok, got it!",
                                    customClass: {
                                        confirmButton: "btn btn-primary",
                                    },
                                });
                            }
                        })
                        .then(function () {
                            // always executed
                            // Hide loading indication
                            submitButton.removeAttribute("data-kt-indicator");

                            // Enable button
                            submitButton.disabled = false;
                        });
                } else {
                    // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                    Swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        },
                    });
                }
            });
        });
    };

    // Public functions
    return {
        // Initialization
        init: function () {
            form = document.querySelector("#kt_sign_up_form");
            submitButton = document.querySelector("#kt_sign_up_submit");
            handleForm();
        },
    };
})();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTSignupGeneral.init();
});
