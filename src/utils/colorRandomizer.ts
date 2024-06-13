export const ColorRandomizer = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

export const isColorLight = (color: string) => {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substring(0, 0 + 2), 16);
    const c_g = parseInt(hex.substring(2, 2 + 2), 16);
    const c_b = parseInt(hex.substring(4, 4 + 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;

    return brightness > 160;
}

export const getTwoLetterNameInitials = (name: string) => {
    const checkNumberOfWords = name.split(" ");

    if(checkNumberOfWords.length > 1) {
        const firstLetter = checkNumberOfWords[0].charAt(0);
        const secondLetter = checkNumberOfWords[1].charAt(0);
        const concatLetters = `${firstLetter}${secondLetter}`;

        return concatLetters.toUpperCase();
    }

    const firstLetter = checkNumberOfWords[0].charAt(0);
    const secondLetter = checkNumberOfWords[0].charAt(1);

    const concatLetters = `${firstLetter}${secondLetter}`;

    return concatLetters.toUpperCase();
}