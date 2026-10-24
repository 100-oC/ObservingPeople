import { GetCharaList } from "./charaList.js";
import { SetCharaDeta } from "./charaList.js";
import { GetCharaData } from "./charaList.js";
import { GetRand } from "./common.js";
import { GetRandInt } from "./common.js";
import { GetActionData } from "./data/actionData.js";
import { GetActionNum } from "./data/actionData.js";

const CharaDataSubKey="Action";  // ここで扱うキャラデータの項目名

// 場所構造体の定義
function CreateActionData(actionID,finishTime,currentTime=0.0){
    return{
        ActionID: actionID,
        FinishTime: finishTime,
        CurrentTime: currentTime,
    };
}

// キャラの行動更新
export function CharaActionUpdate(deltaTime){
    const charaList=GetCharaList();

    // 登録されているキャラIDでキャラデータを回す
    for(const charaID of charaList){
        let charaData=GetCharaData(charaID,CharaDataSubKey);
        if(!charaData){
            console.log(charaID,CharaDataSubKey,"：キャラ情報を取得できませんでした");
            // キャラ情報を新規作成
            const actionData=GetActionData(0);
            const initFinishTime=GetRand(actionData.FinishTime.Min,actionData.FinishTime.Max);
            const initActionData=CreateActionData(actionData.ActionID,initFinishTime);
            charaData=initActionData;
            console.log(charaID,charaData,"：キャラ情報を新規生成");
        }

        let actionID=charaData.ActionID;
        let currentTime=charaData.CurrentTime;
        let finishTime=charaData.FinishTime;

        // 行動時間を計測
        currentTime+=deltaTime;
        // 終了時間に到達していたら更新
        if(currentTime>=finishTime){
            console.log(charaID,actionID,"行動が完了しました");

            // 次の行動を取得
            // TODO:性格を含めて行動を選出するGetNextAction(charaID)を作成する
            const nextActionData=GetActionData(GetRandInt(0,GetActionNum()));
             if(!nextActionData){
                console.log("行動を取得できませんでした");
                continue;
            }

            actionID=nextActionData.ActionID;
            currentTime=0.0;
            finishTime=GetRand(nextActionData.FinishTime.Min,nextActionData.FinishTime.Max);

            console.log(charaID,actionID,finishTime,"行動を選出しました");
        }

        // キャラデータを更新
        const setCharaData=CreateActionData(actionID,finishTime,currentTime);
        SetCharaDeta(charaID,CharaDataSubKey,setCharaData);
    }
}