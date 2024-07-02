// 所有nav的id清單
let navIdList = [];
const navIdDesktopList = ["nav-list-1", "nav-list-2", "nav-list-3", "nav-list-4", "nav-list-5", "nav-list-6", "nav-list-7"];
const navIdCellphoneList = [
  "nav-list-cellphone-1",
  "nav-list-cellphone-2",
  "nav-list-cellphone-3",
];
//目前啟動的id
let activeId = "";

// 當nav的第一層選單被按的時候(桌機)
function navClick(id) {
  console.log(id);

  // 桌機的navList
  navIdList = [...navIdDesktopList];
  //取得body class
  let bodyClass = document.body.classList;
  //取得li class
  let li = document.getElementById(id);
  let nowActiveId = getActiveLi();

  //如果body裡面有class：表示已經是開啟狀態
  console.log("bodyClass.value: ", bodyClass.value);
  if (bodyClass.value.includes("nav-second-active")) {
    //如果點選的是已經開啟的nav
    if (id === nowActiveId) {
      //對body移除class: nav-second-active (遮罩)
      bodyClass.remove("nav-second-active");
      //移除所有nav 內的 active
      resetNav();
      //重設啟動的id
      activeId = "";
    } else {
      //移除所有nav 內的 active
      resetNav();
      //顯示這個id 內的nav-second
      li.classList.add("active");
      //設定啟動的id
      activeId = id;
    }
  } else {
    //對body加上class: nav-second-active (遮罩)
    bodyClass.add("nav-second-active");
    //顯示這個id 內的nav-second
    li.classList.add("active");
    //設定啟動的id
    activeId = id;
  }
}

// 當nav的第一層選單被按的時候(手機)
function navCellphoneClick(id) {
  console.log(id);
  // 手機的navList
  navIdList = [...navIdCellphoneList];
  //取得body class
  let bodyClass = document.body.classList;
  //取得li class
  let li = document.getElementById(id);
  let nowActiveId = getActiveLi();

  //如果點選的是已經開啟的nav
  if (id === nowActiveId) {
    //移除所有nav 內的 active
    resetNav();
  } else {
    //移除所有nav 內的 active
    resetNav();
    //顯示這個id 內的nav-second
    li.classList.add("active");
  }
}

// 當手機選單開啟時
function openCellphoneNav() {
  //取得body class
  let bodyClass = document.body.classList;
  //對body加上class: nav-cellphone-active (遮罩)
  bodyClass.add("nav-cellphone-active");
}
// 當手機選單關閉時
function closeCellphoneNav() {
  //取得body class
  let bodyClass = document.body.classList;
  //對body移除class: nav-cellphone-active (遮罩)
  bodyClass.remove("nav-cellphone-active");
}

// 根據navIdList內容，移除所有li的active
function resetNav() {
  for (let i = 0; i < navIdList.length; i++) {
    let li = document.getElementById(navIdList[i]);
    li.classList.remove("active");
  }
}
// 根據navIdList內容，取得有active的li
function getActiveLi() {
  for (let i = 0; i < navIdList.length; i++) {
    let li = document.getElementById(navIdList[i]);
    if (li.classList.contains("active")) {
      return navIdList[i];
    }
  }
}

// 當切換頁面時，抽換dom
// pageA <-> pageB (nowPage:"A"|"B")
let nowPage = "A";
function changePage() {
  //取得body class
  let bodyClass = document.body.classList;
  if (nowPage === "A") {
    //對body移除class: pageA-active
    bodyClass.remove("pageA-active");
    // 設定目前位置為B
    nowPage = "B";
    bodyClass.add("pageB-active");
  } else {
    //對body移除class: pageB-active
    bodyClass.remove("pageB-active");
    // 設定目前位置為A
    nowPage = "A";
    bodyClass.add("pageA-active");
  }

  //關閉手機選單
  closeCellphoneNav();
  if (activeId !== "") {
    //關閉桌機選單
    navClick(activeId);
  }
}
