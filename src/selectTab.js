const NavItems=document.querySelectorAll(".NavItem");
const Pages=document.querySelectorAll(".Page");

// タブ切り替え
export function SelectTab(){
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
}

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