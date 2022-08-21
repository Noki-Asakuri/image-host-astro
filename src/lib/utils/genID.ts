export const genID = (fileExt: string, author: string, length = 20) => {
    let imageID = "";
    let invisibleID = "";

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const invisibleChars = "​​‌‍⁠";

    const charactersLength = characters.length;
    const invisibleLength = invisibleChars.length;

    for (let i = 0; i < length; i++) {
        imageID += characters.charAt(Math.floor(Math.random() * charactersLength));

        invisibleID += invisibleChars.charAt(Math.floor(Math.random() * invisibleLength));
    }

    return {
        imageID,
        invisibleID,
        file: `${imageID}.${fileExt}`,
        path: `${author.split("#")[0]}/${imageID}.${fileExt}`,
    };
};
