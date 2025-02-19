export const palindrome = (str: string) : boolean => {
    if(str == ""){
        return true;
    }
    if(str.length == 1) {
        return true;
    }
    let finalIndex = str.length -1;
    let result = false

    for(let i = 0; i < str.length ; i ++, finalIndex --) {
        if(i == finalIndex){
            result = true;
            break;
        }
        if(str.charAt(i).toLowerCase() != str.charAt(finalIndex).toLowerCase()){
            result = false;
            break
        }
    }

    return result;
}