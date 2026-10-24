// 行動リスト
const ActionList=new Array();
// 行動リストから行動データを取得(行動配列)
export function GetActionData(key){
    // インデックスから取得
    if(typeof key==="number"){
        return ActionList[key];
    }
    // 行動IDから取得
    if(typeof key==="string"){
        // 行動リストを回し、行動データ内にkeyが含まれていたらそのデータを返す
        for(const actionData of ActionList){
           if(actionData.ActionID!=key)
                continue;
            return actionData;
        }      
    }
    console.log("行動を取得できませんでした");
    return false;
}
// 要素数を取得
export function GetActionNum(){return ActionList.length-1;}

// 行動リストの生成
function SetActinData(actionID,finishTime,log){
    const setActionDataMap={
        ActionID: actionID,
        FinishTime: {
            Min: finishTime.Min,
            Max: finishTime.Max,
        },
        // Parameter: "TODO:選出率操作パラメータ",
        Log:{
            Start: log.Start,
            Event: log.Event,
        },
    };
    ActionList.push(setActionDataMap);
}

// 行動とパラメータの定義
SetActinData("ぼーっと",{
    Min: 10,Max: 60}, {
    Start: "ぼーっとしています。",
    Event: {
        0: "テスト",
        1: "TODO:後で作る",}});
SetActinData("散歩",{
    Min: 30,Max: 60},{
    Start: "散歩しています。",
    Event: {}});
SetActinData("座る",{
    Min: 10,Max: 60},{
    Start: "座っています。",
    Event: {}});
SetActinData("見渡す",{
    Min: 5,Max: 10},{
    Start: "辺りを見渡しています。",
    Event: {}});

/*
// テンプレート
SetActinData("",{
    Min: 0,Max: 0},{
    Start: "",
    Event: {
    0: "",
    1: "",}});
*/