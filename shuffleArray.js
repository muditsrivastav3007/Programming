var shuffle = function(nums, n) {
    const fir = nums.slice(0, n);
    const sec = nums.slice(n, nums.length)
    var res = [];
    for(let i = 0 ; i < fir.length ; i++) {
        res.push(fir[i]);
        res.push(sec[i]);
    }
    return res;
};