// 乱数生成
export function GetRand(min, max){
    return Math.random()*(max-min+1)+min;
}
// 整数の乱数生成
export function GetRandInt(min, max){
    return Math.floor(GetRand(min,max));
}