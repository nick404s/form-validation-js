/**
 * Class to validate a data from input.
 */

class InputValidator {

    /**
     * Constructs the object.
     * @param {*} errorClass CSS error class
     * @param {*} successClass CSS success class
     */
    constructor(errorClass, successClass) 
    {
        this.errorClass = errorClass;
        this.successClass = successClass;
    } 

    /**
    * Checks if an input is filled with a value.
    * Displays an error if it doesn't.
    * @param {*} inputID ID of the input
    * @returns true if the value is filled, false otherwise
    */
    isFilled(inputID) 
    {
        if (!this.getValue(inputID)) 
        {
            this.displayError(
                              inputID, 
                              `${this.getFieldName(inputID)} is not filled`, 
                              this.errorClass
                             );
            return false;
        }
        return true;
    }


    /**
    * Checks if the input value length is in the min/max range. 
    * Displays an error if it doesn't.
    * @param {*} inputID ID of the input 
    * @param {*} min minimum input value length
    * @param {*} max maximum input value length
    * @returns  true if the input length is valid and false otherwise
    */
    isValidLength(inputID, min, max) 
    {
        if (this.getValue(inputID).length < min)
        {
            this.displayError(
                              inputID, 
                              `${this.getFieldName(inputID)} 
                              must be at least ${min} characters`, 
                              this.errorClass
                             );
            return false;
        }
        else if (this.getValue(inputID).length > max) 
        {
            this.displayError(
                              inputID, 
                              `${this.getFieldName(inputID)} 
                              must be less than ${max} characters`,
                              this.errorClass
                             );
            return false;
        } 
        return true;
    }


    /**
     * Checks if the input value matches to the regex pattern.
    * Displays an error if it doesn't.
    * @param {*} inputID ID of the input 
    * @param {*} regex regular expression pattern 
    * @returns true if the input matches, false otherwise
    */
    isPatternMatch(inputID, regex) 
    {     
        if (regex.test(this.getValue(inputID))) 
        {
            return true;
        } 

        this.displayError(
                         inputID, 
                         `${this.getFieldName(inputID)} is not valid`,
                         this.errorClass
                         );
        return false;
    }


    /**
    * Checks if the two input values match.
    * Displays an error if they don't.
    * @param {*} firstInputID first input ID
    * @param {*} secondInputID second input ID
    * @returns true if the values match, false otherwise
    */
    isMatch(firstInputID, secondInputID) 
    {
    
        if (this.getValue(firstInputID) !== this.getValue(secondInputID)) 
        {
            this.displayError(
                              secondInputID, 
                              `${this.getFieldName(firstInputID)}s don't not match`,
                              this.errorClass
                             );
            return false;
        }
        return true;
    }


    /**
     * Gets an input value of an input.
     * @param {*} anInputID ID of the input
     * @returns value string
     */
    getValue(anInputID)
    {
        return anInputID.val().trim();
    }


    /**
     * Gets an input field name of an input.
     * @param {*} anInputID ID of the input
     * @returns field name string
     */
    getFieldName(anInputID)
    {
        return anInputID.prev().text().trim();
    }


    /**
     * Displays the input error. 
     * Adds to the parent element of the input
     * the error CSS class and shake effect.
     * Sets on the next element the error message.
     * @param {*} anInputID ID of the input 
     * @param {*} errorMessage text describing the error
     */
    displayError(anInputID, errorMessage)
    {
        anInputID.parent().addClass(this.errorClass).effect( "shake", 500 ); 

        anInputID.next().text(errorMessage);
    }
 
    
    /**
     * Displays the input success.
     * Adds the success CSS class to the parent element of the input.
     * @param {*} anInputID ID of the input  
     */
    displaySuccess(anInputID) 
    {
        anInputID.parent().addClass(this.successClass);
    } 
} // End of class