$(document).ready(() => {

    //ID's from the form inputs
    const userNameInputID = $('#username');
    const emailInputID = $('#email');
    const passwordInputID = $('#password');
    const passwordConfirmInputID = $('#password-confirm');
    
    // CSS classes for the error and success display
    const errorCSSClass = 'error';
    const successCSSClass = 'success';

    // min/max for the lengths
    const minUserNameLength = 2;
    const maxUserNameLength = 15;
    const minPasswordLength = 6;
    const maxPasswordLength = 20;

    // pattern for checking email
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

    // object to validate the input values
    const validator = new InputValidator(errorCSSClass, successCSSClass);


    /**
     * Handles the submit button event.
     * Hides the form, prints the success message
     * after the submit button click
     * if the form is valid.
     */
  $('#submit-btn').click( event => {

        // prevent the form submitting
        event.preventDefault();

        // clean up the error attributes 
        // before each validation
        removeErrorAttributes();

        if (isValidForm()) 
        {
            // hide the container div
            $('.container').hide();

            // hide the form
            $('#form').hide();

            // create the success message template
            $('#success-message')
            .html(
                `
                <h2>Hi ${validator.getValue(userNameInputID)}</h2>
                <h4>Thank You for Signing Up!</h4>
                <a href="index.html"><input id="return-btn" type="button" value="Return"></a>
                `
            )
            .css({color: '#2ecc71'});

            // show the container with the success message
            // using the blind and slow effects
            $('.container').show('blind', 'slow');
        }
    });


    /**
     * Removes the CSS error class 
     * and sets the error messages to an empty string
     * on all input fields.
     */
    const removeErrorAttributes = () => {

        $('.form-control')
        .removeClass(errorCSSClass)
        .find('small')
        .text('');
    };


    /**
     * Validates the form inputs.
     * @returns true if all fields are valid and false otherwise
     */
    const isValidForm = () => {       

        let result = true;

        if (!isValidUserName()) 
        {
            result = false; 
        } 

        if (!isValidEmail()) 
        {
            result = false;
        }

        if (!isValidPassword()) 
        {
            result = false;
        }

        if (!isValidPasswordConfirm()) 
        {
            result = false;
        }

        return result;
    };


    /**
     * Validates user name input.
     * Displays succes if it's valid.
     * @returns true if the value is valid or false otherwise
     */
    const isValidUserName = () => {

        if (validator.isFilled(userNameInputID) 
            && validator.isValidLength(userNameInputID,minUserNameLength,maxUserNameLength)) 
        {
            validator.displaySuccess(userNameInputID);
            return true;
        }
        return false;
    };


    /**
     * Validates email input.
     * Displays succes if it's valid.
     * @returns true if the value is valid or false otherwise 
     */
    const isValidEmail = () => {

        if (validator.isFilled(emailInputID) 
            && validator.isPatternMatch(emailInputID,emailPattern)) 
        {
            validator.displaySuccess(emailInputID);
            return true;
        }
        return false;
    };


    /**
     * Validates password input.
     * Displays succes if it's valid.
     * @returns  true if the value is valid or false otherwise
     */
    const isValidPassword = () => {

        if (validator.isFilled(passwordInputID) 
            && validator.isValidLength(passwordInputID,minPasswordLength,maxPasswordLength)) 
        {
            validator.displaySuccess(passwordInputID);
            return true;
        }
        return false;
    };


    /**
     * Validates password confirmation input.
     * Displays succes if it's valid.
     * @returns  true if the value is valid or false otherwise
     */
    const isValidPasswordConfirm = () => {

        if (validator.isFilled(passwordConfirmInputID) 
            && validator.isValidLength(passwordConfirmInputID, minPasswordLength, maxPasswordLength) 
            && validator.isMatch(passwordInputID, passwordConfirmInputID)) 
        {
            validator.displaySuccess(passwordConfirmInputID);
            return true;
        }
        return false;
    };
}); // End of program