import { GetActionData } from "./data/actionData.js";

// ログの種類
export const ActionLogType=Object.freeze({
    Start: 100,     // 行動開始時のログ

    Event: 200,     // 行動中のイベントログ
});

let ActionLogList=[];   // 行動ログリスト内部データ
ActionLogList.push({Log: "　"});

// 行動ログ追加
export function AddActionLog(name,actionID,logType){
    let logString=new String();

    // 出力時間を取得
    const now=new Date();
    const year=now.getUTCFullYear();
    const month=String(now.getUTCMonth()+1).padStart(2, "0");
    const day=String(now.getUTCDate()).padStart(2, "0");
    const hour=String(now.getUTCHours()).padStart(2, "0");
    const minute=String(now.getUTCMinutes()).padStart(2, "0");
    const second=String(now.getUTCSeconds()).padStart(2, "0");
    logString=`[${year}/${month}/${day} ${hour}:${minute}:${second}]`;
    
    // 名前を追加
    logString+=` ${name.Name}：`;

    // 行動ログの追加
    const actionData=GetActionData(actionID);
    console.log(actionData);
    switch(logType)
    {
        case ActionLogType.Start:
            logString+=actionData.Log.Start;
            break;
        case ActionLogType.Event:
            logString+=actionData.Log.Event;
            break;
    }

    // ログをリストに追加
    ActionLogList.push({Log: logString});

    const ActionLogViewer=document.getElementById("ActionLogViewer");
    // 要素を初期値する
    ActionLogViewer.replaceChildren();
    // 現在のデータを一つづつ登録
    for(const data of ActionLogList){
        const li = document.createElement("li");
        li.textContent = data.Log;
        ActionLogViewer.appendChild(li);
    }

    // ログブロックを最新部にする
    ActionLogViewer.scrollTop=ActionLogViewer.scrollHeight;
}