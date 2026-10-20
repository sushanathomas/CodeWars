//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

//If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
    // First check if the PIN has 4 or 6 characters. 
    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }
    // Go through each character in the PIN. 
    for (let i = 0; i < pin.length; i++) {
        // Check if the character is NOT a number. 
        if (pin[i] < '0' || pin[i] > '9') {
            return false;
        }
    }
    // If we made it this far, the PIN has the correct length, AND contains only numbers. 
    return true;
}