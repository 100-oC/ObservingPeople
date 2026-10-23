let CharaList=[];       // キャラリスト内部データ TODO:Mapにする
// MEMO:↑のキャラリストをkeyリスト(いつものenumの部分)にして
// 　　 名前とデータを紐付けのも乙だと思います。詳細の参照も楽だし…
let ActionLogList=[];   // 行動ログリスト内部データ

// タブ切り替え
{
    // タブ切り替え
    const NavItems=document.querySelectorAll(".NavItem");
    const Pages=document.querySelectorAll(".Page");
    NavItems.forEach((item)=>{
        item.addEventListener("click",()=>{
            // クリックされているページをターゲットとして取得
            const targetPage=item.dataset.page;

            // 全ての画面を非表示にする
            HideAllPage(targetPage);

            // 選択中のタブを更新する
            SelectTabUpdate(item);
        });
    });
    // 全てのページを非表示にする
    function HideAllPage(targetPage){
        Pages.forEach((page)=>{
            page.classList.toggle("Active",page.id===targetPage);
        });
    }
    // 選択中のタブを更新する
    function SelectTabUpdate(item){
        NavItems.forEach((nav)=>{
            nav.classList.toggle("Active",nav===item);
        });
    }
}
// キャラリストにデータを追加
// TODO:現在は名前のみ登録
{
    // キャラを追加する
    const AddCharaButton=document.getElementById("AddCharaButton");
    const AddCharaName=document.getElementById("AddCharaName");
    AddCharaButton.addEventListener("click",function(){
        // ボタンを押された時名前が入力されていたらキャラリストに登録する
        if(AddCharaName.value=="")
            return;
        CharaList.push({Name: AddCharaName.value});
        CharaListViewerUpdate();
        // 入力した情報を削除
        AddCharaName.value="";
    });
    // キャラリストを描画に適応する
    function CharaListViewerUpdate(){
        const charaListViewer=document.querySelectorAll(".CharaListViewer");
        charaListViewer.forEach(viewer => {
            // 要素を初期値する
            viewer.replaceChildren();
            // 現在のデータを一つづつ登録
            for(const data of CharaList){
                const li = document.createElement("li");
                li.textContent = data.Name;
                viewer.appendChild(li);
            }
        });
    }
}
// 毎フレームの処理内部関数
{
    // Updateの内部処理
    let PreviousTime=0;
    function GameLoop(currentTime){
        // デルタタイムの計算
        let deltaTime=(currentTime-PreviousTime)/1000;
        PreviousTime=currentTime;

        Update(deltaTime);

        requestAnimationFrame(GameLoop);
    }

    // TODO:キャラデータに行動と時間の設定をして計測、随時ログ更新。
}

// 毎フレーム実行する処理
function Update(deltaTime) {
    // ここに処理を追加

}

// 初期起動ゾーン
removeEventListener(GameLoop);