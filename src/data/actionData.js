// 行動リスト
const ActionList=new Array();
// 行動リストから行動データを取得(行動配列)
export function GetActionData(key){
    // インデックスから取得
    if(typeof key==="number"){
        console.log(key,ActionList[key],"行動を取得します");
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
function SetActinData(actionID,finishTime){
    const setActionDataMap={
        ActionID: actionID,
        FinishTime: {
            Min: finishTime.Min,
            Max: finishTime.Max,
        },
        Parameter: "TODO:選出率操作パラメータ",
    };
    ActionList.push(setActionDataMap);
}

// 行動とパラメータの定義
SetActinData("ぼーっと",    {Min: 10,Max: 60});
SetActinData("散歩",        {Min: 30,Max: 60});
SetActinData("座る",        {Min: 10,Max: 60});