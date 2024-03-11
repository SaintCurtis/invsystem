export function generateInitials (fullName) {
    //Split the full name into an array of words
    const words = fullName.split(/\s+/);

    //Get the first letter of each word  and  join them
    const initials = words.map((word) => word.charAt(0)) .join(' ');

    //Ensure that the initials are in upper case
    return initials.toUpperCase();
};