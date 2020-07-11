var isPalindrome = function(x) {
    const str = x.toString();
    const rev = str.split('').reverse().join('');
    if (str === rev) {
        return true;
    } else {
        return false;
    }
};