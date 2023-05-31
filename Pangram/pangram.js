const string = "A quick  brown fox jumps jumps over the little laxy dog"
const checkPangram =(string) => {
    const charArray = Array(26).fill(false);

    for (let i =0; i<string.length; i++){
        const value = string[i].toLowerCase
        ().charCodeAt(0)-97;

        charArray[value]=true;
        }
        return charArray.reduce((result, value)=> {
            return result && value
        }, true)
    }
    console.log(checkPangram(string));
    