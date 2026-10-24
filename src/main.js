import { SelectTab } from "./selectTab.js";
import { AddCharaList } from "./charaList.js";
import { CharaActionUpdate } from "./charaAction.js";

let ActionLogList=[];   // 行動ログリスト内部データ

// 毎フレームの処理内部関数
 // Updateの内部処理
let PreviousTime=0;
function GameLoop(currentTime){
    // デルタタイムの計算
    let deltaTime=(currentTime-PreviousTime)/1000;
    PreviousTime=currentTime;

    Update(deltaTime);

    requestAnimationFrame(GameLoop);
}

// 毎フレーム実行する処理
function Update(deltaTime) {
    // ここに処理を追加
    CharaActionUpdate(deltaTime);   // キャラの行動
}

// 起動ゾーン
SelectTab();                        // 下部のタブ切替
AddCharaList();                     // キャラリストに追加
requestAnimationFrame(GameLoop);    // ゲームループ