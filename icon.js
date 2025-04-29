function icon_Animation(){
let ic = document.querySelector("#p6-endcol .head-line #up");
let head1=document.querySelector("#p6-endcol .head-line");
let page6C = document.querySelector("#p6-endcol  #p6-contain");
let top1=document.querySelector("#p6-endcol");
    head1.addEventListener("click", () => {
        if (ic.getAttribute("id") === "up") {
            ic.setAttribute("id", "down");
            page6C.style.display = "block";
            page6C.style.opacity="1";
            ic.style.transform = "rotate(180deg)";
            top1.style.borderTop="2px solid white";
        }
         else {
            ic.setAttribute("id", "up");
            page6C.style.display = "none";
            ic.style.transform = "rotate(0deg)";
            top1.style.borderTop="1px solid #333";
        }
    })

let i2=document.querySelector("#p6-endcol2 .head-line #up");
let head2=document.querySelector("#p6-endcol2 .head-line");
let page62C = document.querySelector("#p6-endcol2  #p6-contain");
let top2=document.querySelector("#p6-endcol2");
head2.addEventListener("click", () => {
    if (i2.getAttribute("id") === "up") {
        i2.setAttribute("id", "down");
        page62C.style.display = "block";
        page62C.style.opacity="1";
        page62C.style.transform="translateY(0)";
        i2.style.transform = "rotate(180deg)";
        top2.style.borderTop="2px solid white";

    } else {
        i2.setAttribute("id", "up");
        page62C.style.display = "none";
        i2.style.transform = "rotate(0deg)";
        top2.style.borderTop="1px solid #333";
    }
})
}
icon_Animation();