let TimeScale=Number(1.0);
export function GetTimeScale(){return TimeScale;}

const TimeKeeperButtons=document.querySelectorAll(".TimeKeeperIcon");

// タブ切り替え
export function SetTimeScale(){
    TimeKeeperButtons.forEach((button)=>{
        button.addEventListener("click",()=>{
            const num = Number(button.dataset.number);
            TimeScale=num;
            console.log("時間倍率変更：",TimeScale);
            // 選択中のタブを更新する
            TimeScaleUpdate(button);
        });
    });
}

// 選択中のタブを更新する
function TimeScaleUpdate(button){
    TimeKeeperButtons.forEach((nav)=>{
        nav.classList.toggle("Active",nav===button);
    });
}

/*
document.querySelectorAll(".NavItem").forEach(button => {
    button.addEventListener("click", () => {
        const number = Number(button.dataset.number);
        console.log(number);
    });
});
*/