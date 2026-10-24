let CharaList=[];       // キャラリスト内部データ TODO:Mapにする
// MEMO:↑のキャラリストをkeyリスト(いつものenumの部分)にして
// 　　 名前とデータを紐付けのも乙だと思います。詳細の参照も楽だし…
// キャラリストを取得
export function GetCharaList(){return CharaList;}

const CharaData=new Map();  // キャラ名とデータの紐付け
// キャラデータを設定
// key:キャラ名, subKey:項目名, value:格納する情報
export function SetCharaDeta(key, subKey, value){
     if(!CharaData.has(key))
            CharaData.set(key,new Map());
    
    CharaData.get(key).set(subKey,value);
}
// キャラデータを取得
// key:キャラ名, subKey:項目名
export function GetCharaData(key,subKey=""){
    if(subKey=="")
    {
        return CharaData.get(key)?? false;
    }

     if(!CharaData.has(key))
            CharaData.set(key,new Map());

    return CharaData.get(key).get(subKey)?? false;
}

// キャラリストにデータを追加
// TODO:現在は名前のみ登録
const AddCharaButton=document.getElementById("AddCharaButton");
const AddCharaName=document.getElementById("AddCharaName");

// キャラリストにキャラクターを追加
export function AddCharaList(){
    AddCharaButton.addEventListener("click",function(){
        // ボタンを押された時名前が入力されていたらキャラリストに登録する
        if(AddCharaName.value=="")
            return;
        CharaList.push({Name: AddCharaName.value});

        CharaListViewerUpdate();
        // 入力した情報を削除
        AddCharaName.value="";
    });
}

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