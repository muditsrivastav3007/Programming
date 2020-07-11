var kidsWithCandies = function(candies, extraCandies) {
    let maxE = 0;
    for(let i = 0 ; i < candies.length; i++) {
        if(candies[i] > maxE) {
            maxE = candies[i];
        }
    }
    var res = [];
    for(let i = 0 ; i < candies.length ; i++) {
        if(candies[i] + extraCandies >= maxE)
            res.push(true);
        else
            res.push(false);
    }
    return res;
};