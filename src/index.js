// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    var H = 0, Q = 0, D = 0, N = 0, P = 0, ans = {};
    if (currency >= 50){
        H = Math.floor(currency / 50);
        currency -= H * 50;
        ans['H'] = H;
    }
    if (currency >= 25){
        Q = Math.floor(currency / 25);
        currency -= Q * 25;
        ans['Q'] = Q;
    }
    if (currency >= 10){
        D = Math.floor(currency / 10);
        currency -= D * 10;
        ans['D'] = D;
    }
    if (currency >= 5){
        N = Math.floor(currency / 5);
        currency -= N * 5;
        ans['N'] = N;
    }
    if (currency >= 1){
        P = Math.floor(currency);
        currency = 0;
        ans['P'] = P;
    }

    return ans;
};
