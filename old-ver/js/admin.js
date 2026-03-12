const draftsHeader = `
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Created At</th>
                <th>Last Edit</th>
                <th>Actions</th>
            </tr>`;

const publishedHeader = `
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Posted At</th>
                <th>Last Edit</th>
                <th>Actions</th>
            </tr>`;
const editBtn = `
        <div class="actionBtn editBtn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.2302 6.01488L17.8435 0.628138C17.6868 0.471421 17.5007 0.347105 17.296 0.26229C17.0912 0.177474 16.8718 0.13382 16.6502 0.13382C16.4286 0.13382 16.2091 0.177474 16.0044 0.26229C15.7996 0.347105 15.6136 0.471421 15.4569 0.628138L0.592405 15.4914C0.435389 15.6479 0.310886 15.8339 0.226069 16.0387C0.141252 16.2435 0.0977971 16.463 0.0982085 16.6847V22.0714C0.0982085 22.519 0.275998 22.9482 0.592466 23.2647C0.908934 23.5812 1.33816 23.7589 1.78571 23.7589H22.0357C22.2275 23.7589 22.4115 23.6827 22.5471 23.5471C22.6827 23.4115 22.7589 23.2275 22.7589 23.0357C22.7589 22.8439 22.6827 22.66 22.5471 22.5243C22.4115 22.3887 22.2275 22.3125 22.0357 22.3125H9.31799L23.2302 8.40149C23.3869 8.24478 23.5113 8.05875 23.5961 7.854C23.6809 7.64925 23.7245 7.4298 23.7245 7.20818C23.7245 6.98656 23.6809 6.76711 23.5961 6.56236C23.5113 6.35762 23.3869 6.17158 23.2302 6.01488ZM7.27249 22.3125H1.78571C1.72177 22.3125 1.66045 22.2871 1.61525 22.2419C1.57004 22.1967 1.54464 22.1354 1.54464 22.0714V16.6847C1.54491 16.6209 1.57048 16.5597 1.61575 16.5147L12.3929 5.73765L18.1207 11.4643L7.27249 22.3125ZM22.2069 7.37814L19.1429 10.4422L13.4162 4.7143L16.479 1.65149C16.5014 1.62907 16.528 1.61129 16.5573 1.59916C16.5865 1.58703 16.6179 1.58078 16.6496 1.58078C16.6813 1.58078 16.7126 1.58703 16.7419 1.59916C16.7712 1.61129 16.7977 1.62907 16.8201 1.65149L22.2069 7.03702C22.2293 7.05941 22.2471 7.086 22.2592 7.11526C22.2713 7.14453 22.2776 7.1759 22.2776 7.20758C22.2776 7.23926 22.2713 7.27063 22.2592 7.2999C22.2471 7.32916 22.2293 7.35575 22.2069 7.37814Z"
                          fill="#EEEEEE"/>
                </svg>
            </div>
`

const deleteBtn = `
            <div class="actionBtn deleteBtn">
                <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0358 4.02679H16.9733V2.82143C16.9733 2.11814 16.6939 1.44364 16.1966 0.946337C15.6993 0.449031 15.0248 0.169647 14.3215 0.169647H8.53577C7.83247 0.169647 7.15798 0.449031 6.66067 0.946337C6.16336 1.44364 5.88398 2.11814 5.88398 2.82143V4.02679H0.821481C0.629673 4.02679 0.44572 4.10299 0.310091 4.23861C0.174462 4.37424 0.0982666 4.5582 0.0982666 4.75C0.0982666 4.94181 0.174462 5.12576 0.310091 5.26139C0.44572 5.39702 0.629673 5.47322 0.821481 5.47322H2.02684V23.0714C2.02684 23.519 2.20463 23.9482 2.5211 24.2647C2.83756 24.5811 3.26679 24.7589 3.71434 24.7589H19.1429C19.5905 24.7589 20.0197 24.5811 20.3362 24.2647C20.6526 23.9482 20.8304 23.519 20.8304 23.0714V5.47322H22.0358C22.2276 5.47322 22.4115 5.39702 22.5472 5.26139C22.6828 5.12576 22.759 4.94181 22.759 4.75C22.759 4.5582 22.6828 4.37424 22.5472 4.23861C22.4115 4.10299 22.2276 4.02679 22.0358 4.02679ZM7.33041 2.82143C7.33041 2.50175 7.4574 2.19516 7.68345 1.96912C7.9095 1.74307 8.21609 1.61608 8.53577 1.61608H14.3215C14.6412 1.61608 14.9477 1.74307 15.1738 1.96912C15.3998 2.19516 15.5268 2.50175 15.5268 2.82143V4.02679H7.33041V2.82143ZM19.384 23.0714C19.384 23.1354 19.3586 23.1967 19.3134 23.2419C19.2682 23.2871 19.2068 23.3125 19.1429 23.3125H3.71434C3.6504 23.3125 3.58908 23.2871 3.54387 23.2419C3.49866 23.1967 3.47327 23.1354 3.47327 23.0714V5.47322H19.384V23.0714ZM9.25898 10.5357V18.25C9.25898 18.4418 9.18278 18.6258 9.04716 18.7614C8.91153 18.897 8.72757 18.9732 8.53577 18.9732C8.34396 18.9732 8.16001 18.897 8.02438 18.7614C7.88875 18.6258 7.81255 18.4418 7.81255 18.25V10.5357C7.81255 10.3439 7.88875 10.16 8.02438 10.0243C8.16001 9.8887 8.34396 9.8125 8.53577 9.8125C8.72757 9.8125 8.91153 9.8887 9.04716 10.0243C9.18278 10.16 9.25898 10.3439 9.25898 10.5357ZM15.0447 10.5357V18.25C15.0447 18.4418 14.9685 18.6258 14.8329 18.7614C14.6972 18.897 14.5133 18.9732 14.3215 18.9732C14.1297 18.9732 13.9457 18.897 13.8101 18.7614C13.6745 18.6258 13.5983 18.4418 13.5983 18.25V10.5357C13.5983 10.3439 13.6745 10.16 13.8101 10.0243C13.9457 9.8887 14.1297 9.8125 14.3215 9.8125C14.5133 9.8125 14.6972 9.8887 14.8329 10.0243C14.9685 10.16 15.0447 10.3439 15.0447 10.5357Z"
                          fill="#EEEEEE"/>
                </svg>
            </div>
            `;

const showBtn = `
            <div class="actionBtn visBtn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.1853 11.6963C23.1525 11.6222 22.3584 9.86062 20.5931 8.09531C18.2409 5.74312 15.27 4.5 12 4.5C8.72999 4.5 5.75905 5.74312 3.40687 8.09531C1.64155 9.86062 0.843741 11.625 0.814679 11.6963C0.772035 11.7922 0.75 11.896 0.75 12.0009C0.75 12.1059 0.772035 12.2097 0.814679 12.3056C0.847491 12.3797 1.64155 14.1403 3.40687 15.9056C5.75905 18.2569 8.72999 19.5 12 19.5C15.27 19.5 18.2409 18.2569 20.5931 15.9056C22.3584 14.1403 23.1525 12.3797 23.1853 12.3056C23.2279 12.2097 23.25 12.1059 23.25 12.0009C23.25 11.896 23.2279 11.7922 23.1853 11.6963ZM12 18C9.11437 18 6.59343 16.9509 4.50655 14.8828C3.65028 14.0313 2.92179 13.0603 2.34374 12C2.92164 10.9396 3.65014 9.9686 4.50655 9.11719C6.59343 7.04906 9.11437 6 12 6C14.8856 6 17.4066 7.04906 19.4934 9.11719C20.3514 9.9684 21.0815 10.9394 21.6609 12C20.985 13.2619 18.0403 18 12 18ZM12 7.5C11.11 7.5 10.2399 7.76392 9.49993 8.25839C8.7599 8.75285 8.18313 9.45566 7.84253 10.2779C7.50194 11.1002 7.41282 12.005 7.58646 12.8779C7.76009 13.7508 8.18867 14.5526 8.81801 15.182C9.44735 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.4988 10.8069 16.0242 9.66303 15.1806 8.81939C14.337 7.97575 13.1931 7.50124 12 7.5ZM12 15C11.4066 15 10.8266 14.8241 10.3333 14.4944C9.83993 14.1648 9.45542 13.6962 9.22835 13.148C9.00129 12.5999 8.94188 11.9967 9.05764 11.4147C9.17339 10.8328 9.45911 10.2982 9.87867 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.148 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.824 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15Z" fill="#EEEEEE"/>
                </svg>
            </div>
                    `

const hideBtn = `
        <div class="actionBtn visBtn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.375 16.4063C21.2894 16.4551 21.1949 16.4866 21.0971 16.4989C20.9992 16.5112 20.8999 16.5041 20.8048 16.478C20.7097 16.4518 20.6207 16.4072 20.5429 16.3467C20.4651 16.2861 20.3999 16.2108 20.3513 16.125L18.57 13.0125C17.5344 13.7127 16.3921 14.2402 15.1875 14.5744L15.7378 17.8763C15.7541 17.9735 15.751 18.0729 15.7288 18.1689C15.7065 18.2649 15.6656 18.3556 15.6083 18.4358C15.551 18.516 15.4785 18.5841 15.3949 18.6363C15.3113 18.6884 15.2182 18.7236 15.121 18.7397C15.081 18.7462 15.0405 18.7497 15 18.75C14.8226 18.7498 14.651 18.6866 14.5157 18.5718C14.3805 18.4569 14.2903 18.2979 14.2613 18.1228L13.7203 14.881C12.5796 15.0397 11.4223 15.0397 10.2816 14.881L9.74064 18.1228C9.71153 18.2982 9.62109 18.4575 9.48545 18.5724C9.3498 18.6872 9.17776 18.7502 9.00001 18.75C8.95856 18.7498 8.91718 18.7464 8.87626 18.7397C8.77904 18.7236 8.68596 18.6884 8.60233 18.6363C8.5187 18.5841 8.44617 18.516 8.38888 18.4358C8.33159 18.3556 8.29067 18.2649 8.26845 18.1689C8.24623 18.0729 8.24315 17.9735 8.25939 17.8763L8.81251 14.5744C7.60842 14.2391 6.4667 13.7107 5.43189 13.0097L3.65626 16.125C3.55681 16.2983 3.39258 16.425 3.19971 16.4772C3.00684 16.5294 2.80113 16.5029 2.62783 16.4035C2.45452 16.304 2.32783 16.1398 2.27561 15.9469C2.22339 15.754 2.24993 15.5483 2.34939 15.375L4.22439 12.0938C3.56579 11.5248 2.96019 10.8972 2.41501 10.2188C2.34702 10.1429 2.29522 10.0539 2.26276 9.95729C2.2303 9.86069 2.21787 9.75849 2.22622 9.65693C2.23457 9.55536 2.26353 9.45657 2.31133 9.36657C2.35914 9.27657 2.42478 9.19726 2.50426 9.13347C2.58373 9.06969 2.67537 9.02277 2.77359 8.99558C2.8718 8.96839 2.97452 8.9615 3.07548 8.97533C3.17645 8.98916 3.27353 9.02342 3.36082 9.07602C3.4481 9.12862 3.52374 9.19846 3.58314 9.28127C5.13939 11.2069 7.86189 13.5 12 13.5C16.1381 13.5 18.8606 11.2041 20.4169 9.28127C20.4756 9.19676 20.5511 9.12525 20.6386 9.07117C20.7262 9.01708 20.8239 8.9816 20.9257 8.96691C21.0276 8.95222 21.1314 8.95865 21.2306 8.98579C21.3299 9.01293 21.4225 9.06021 21.5027 9.12468C21.5829 9.18915 21.649 9.26943 21.6968 9.36054C21.7447 9.45164 21.7732 9.55161 21.7808 9.65423C21.7883 9.75686 21.7747 9.85993 21.7407 9.95706C21.7067 10.0542 21.653 10.1433 21.5831 10.2188C21.038 10.8972 20.4324 11.5248 19.7738 12.0938L21.6488 15.375C21.6991 15.4606 21.732 15.5552 21.7454 15.6535C21.7589 15.7519 21.7527 15.8519 21.7273 15.9478C21.7018 16.0437 21.6576 16.1337 21.5971 16.2123C21.5366 16.291 21.4611 16.357 21.375 16.4063Z" fill="#EEEEEE"/>
                    </svg>
                </div>
    `

const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false // 24小时制
};
const header = document.querySelector("header");
const main = document.querySelector(".container");
const form = document.querySelector("form");
const blogTitle = document.querySelector("#title");
const blogContent = document.querySelector("#blogContent");
const loading = document.querySelector("#loading");
const second = document.querySelector("#saveSuccess .second");

form.style.display = "none";
const renderData = (mode, arr) => {
        const tbody = createTbody();
        let visible;
        arr.slice(1).forEach((item, index) => {
            const row = document.createElement('tr');
            item.forEach((content, index) => {
                if (mode && index === 4) {
                    // console.log(content);
                    visible = (content === "true" || content === "TRUE" || content === true) ? 1 : 0;
                    return;
                }

                if (!content) {
                    return;
                }
                const td = document.createElement('td');
                if(index === 2 || index === 3){
                    content = new Date(content).toLocaleString("zh-CN", options);
                    // console.log(content);
                }
                td.textContent = content;
                row.appendChild(td);


            });

            // 添加操作按钮列
            const actionsTd = document.createElement('td');
            actionsTd.classList.add("actions");
            actionsTd.dataset.id = item[0];
            actionsTd.dataset.order = index+1;
            actionsTd.dataset.bool = visible;
            if (!mode) {
                actionsTd.innerHTML = `${editBtn}${deleteBtn}`;
            } else {
                if (visible) {
                    actionsTd.innerHTML = `${showBtn}${editBtn}${deleteBtn}`;
                } else {
                    actionsTd.innerHTML = `${hideBtn}${editBtn}${deleteBtn}`;
                }
            }
            row.appendChild(actionsTd);

            tbody.appendChild(row);
            document.querySelector(".Table").appendChild(tbody);
        });
    }
;

const createTbody = () => {
    const tbody = document.createElement("tbody");
    tbody.classList.add("tableData");
    return tbody;
};

const reloadHash = () => {
    location.hash = location.hash.replace(/(Drafts|Published).*/, "$1");
    // console.log(location.hash);
    hideForm();
    location.hash = location.hash.replace("New", "");
    switch (location.hash) {
        case "#Drafts":
            draftsA.click(e=>e.preventDefault());
            break;
        case "#Published":
            publishedA.click(e=>e.preventDefault());
            break;
    }
};


const hideHeader = ()=>{
    document.querySelector("#newBlog").style.display = "none";
    document.querySelector("#icon").style.display = "none";
};

const showHeader = ()=>{
    document.querySelector("#newBlog").style.display = "flex";
    document.querySelector("#icon").style.display = "block";
};

const showForm = ()=>{
    document.body.style.background = "linear-gradient(to bottom right, #dfe9f3, #ffffff)"
    hideHeader();
    main.style.display = "none";
    form.style.display = "flex";
}

const hideForm = ()=>{
    document.body.style.background = "#ffffff";
    showHeader();
    main.style.display = "flex";
    form.style.display = "none";
}


const draftsA = document.querySelector(".nav").children[0];
const publishedA = document.querySelector(".nav").children[1];

let draftsData, publishedData; // 声明全局变量用于存储数据
let draftsID, publishedID;
let content="", title="";
let timer = null;
let toDrafts = true;

const refreshData = (data)=>{
    draftsData = data[0]; // 将返回的数据存储到全局变量中
    publishedData = data[1];
    draftsID = parseInt(draftsData[0][4]);
    publishedID = parseInt(publishedData[0][5]);
    // console.log(draftsData.length);
};

function fetchDraftsData() {
    loading.style.display = "block";
    google.script.run.withSuccessHandler(handleData).getSheetData();
    function handleData(data) {
        refreshData(data);
        loading.style.display = "none";
        draftsA.click(e=>e.preventDefault);
        // 你可以在这里进一步处理数据
    }
}

function fetchBlogsData() {
    loading.style.display = "block";
    google.script.run.withSuccessHandler(handleData).getSheetData();
    function handleData(data) {
        refreshData(data);
        loading.style.display = "none";
        publishedA.click(e=>e.preventDefault);
        // 你可以在这里进一步处理数据
    }
}

const loadTitleAndContent = (mode, order) => {
    showLoadingAndHideForm();
    blogTitle.value = "";
    blogContent.value = "";
    // console.log(mode);
    // console.log(mode.replace("#","")+"Content");
    google.script.run.withSuccessHandler(handleData).getContent(mode.replace("#","")+"Content", order);
    function handleData(data) {
        content = data;
        blogContent.value = content;
        title = getBlogTitle(mode, order);
        blogTitle.value = title;
        hideLoadingAndShowForm();
    }
}

const getBlogTitle =(mode, order)=>{
    if(mode === "#Drafts") {
        return draftsData[order][1];
    } else {
        return publishedData[order][1];
    }
}

function successUpdateVisible(){
    fetchBlogsData();
}

const showLoadingAndHideForm = ()=>{
    form.style.display = "none";
    loading.style.display = "block";
};

const hideLoadingAndShowForm = ()=>{
    form.style.display = "flex";
    loading.style.display = "none";
};

const clearSuccessInterval = ()=>{
    clearInterval(timer);
    document.querySelector("#saveSuccess").style.display = "none";
};

const fetchDataAgain = ()=>{
    reloadHash();
    if (location.hash.includes("Drafts")) {
        fetchDraftsData();
    }
    else{
        fetchBlogsData();
    }

}

const showSaveSuccess = () => {
    loading.style.display = "none";
    saveSuccess.style.display = "block";
    timer = setInterval(() => {
        second.textContent = (parseInt(second.textContent) - 1).toString();
        // console.log(second.textContent);
        if (second.textContent === "0") {
            clearSuccessInterval();
            second.textContent = "5";
            fetchDataAgain();
        }
    }, 1000);
}

const lightShowSaveSuccess = () => {
    fetchDataAgain();
    loading.style.display = "none";
}




document.querySelector("#saveSuccess a").addEventListener("click",(e)=>{
    e.preventDefault();
    clearSuccessInterval();
    second.textContent = "5";
    fetchDataAgain();

});
draftsA.addEventListener("click", (e) => {
    // e.preventDefault();
    draftsA.classList.add("active");
    publishedA.classList.remove("active");
    document.querySelector(".Table").innerHTML = draftsHeader;
    renderData(0, draftsData);
});

publishedA.addEventListener("click", (e) => {
    // e.preventDefault();
    draftsA.classList.remove("active");
    publishedA.classList.add("active");
    document.querySelector(".Table").innerHTML = publishedHeader;
    renderData(1, publishedData);
});

document.addEventListener("DOMContentLoaded", () => {
    fetchDraftsData();
});

const deleteDraftsAndPublished = (mode, order)=>{
    const sheetName = mode.replace(/#(Drafts|Published).*/, "$1");
    google.script.run.withSuccessHandler(lightShowSaveSuccess).deleteDraftsAndPublished(sheetName, order);
};

document.querySelector(".Table").addEventListener("click", (event) => {
    const actionsTd = event.target.closest(".actions"); // 找到最近的 actions 容器
    const hash = location.hash;
    if (!actionsTd) return; // 确保点的地方在 actions 里面

    const id = actionsTd.dataset.id; // 直接从 <td> 取 ID
    const order = actionsTd.dataset.order;
    const editBtn = event.target.closest(".editBtn"); // 确保点击了 .editBtn
    const deleteBtn = event.target.closest(".deleteBtn"); // 确保点击了 .deleteBtn
    const visBtn = event.target.closest(".visBtn"); // 确保点击了 .visBtn

    if (editBtn) {
        location.hash = hash + id + "Order" + order;
        console.log(location.hash);
        showForm();
        loadTitleAndContent(hash, order);
    } else if (deleteBtn) {
        const result = confirm(`Confirm to delete ${getBlogTitle(hash, order)} ?`)
        if(result){
            loading.style.display = "block";
            deleteDraftsAndPublished(hash, order);
        }
        console.log("Delete ID:", id);

    } else if(visBtn){
        loading.style.display = "block";
        google.script.run.withSuccessHandler(successUpdateVisible).updateSheetData("Published", 0, parseInt(order), !parseInt(actionsTd.dataset.bool));
    }});

document.querySelector("#newBlog").addEventListener("click", (e) => {
    e.preventDefault();
    title = "";
    content = "";
    blogTitle.value = "";
    blogContent.value = "";
    location.hash = location.hash + "New";
    showForm();
});

blogContent.addEventListener("input", (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
});

const topButton = document.querySelector(".top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
});

topButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth"});
});

document.querySelector("#back").addEventListener("click", (e) => {
    e.preventDefault();
    let result;
    // confirm if user wants to leave the page
    console.log(content, blogContent.value, title, blogTitle.value);
    if(content !== blogContent.value || title!==blogTitle.value){
        result = confirm("You haven't saved yet, confirm BACK?");
        if(result){

            reloadHash();
        }
        else{
            console.log(location.hash);
        }
    }
    else{

        reloadHash();
    }
    // console.log(result);

});

const saveNewBlog = () => {
    showLoadingAndHideForm();
    const now = new Date();
    const blogData = [++draftsID, blogTitle.value, now.toISOString(), now.toISOString(), blogContent.value];
    console.log(blogData);
    google.script.run.withSuccessHandler(showSaveSuccess).saveNewBlog(blogData);
};

const saveDraftsAndPublished = () =>{
    showLoadingAndHideForm();
    const hash = location.hash; // 获取当前的 hash
    const sheetName = hash.replace(/#(Drafts|Published).*/, "$1");
    const now = new Date();
    const orderNumberMatch = hash.match(/Order(\d+)/); // 使用正则表达式匹配 Order 后面的数字
    let orderNumber = 0;
    if (orderNumberMatch) {
        orderNumber = orderNumberMatch[1]; // 获取匹配到的数字
        console.log(orderNumber); // 输出提取的数字
    } else {
        console.log("没有找到 Order 后面的数字");
    }
    const blogData = [sheetName, now.toISOString(), parseInt(orderNumber), blogTitle.value, blogContent.value]
    console.log(blogData);
    google.script.run.withSuccessHandler(showSaveSuccess).saveDraftsAndPublished(...blogData);
};

document.querySelector("#save").addEventListener("click", (e) => {
    e.preventDefault();
    if (location.hash.includes("New")) {
        // update the post
        saveNewBlog();
    }
    else{
        saveDraftsAndPublished();
    }

});

const postBlog = () => {
    showLoadingAndHideForm();
    const now = new Date();
    const blogData = [++publishedID, blogTitle.value, now.toISOString(), now.toISOString(), true, blogContent.value];
    google.script.run.withSuccessHandler(showSaveSuccess).postBlog(blogData);
};

document.querySelector("#post").addEventListener("click", (e) => {
    e.preventDefault();
    postBlog();
    if (!location.hash.includes("New")) {
        const orderNumberMatch = location.hash.match(/Order(\d+)/); // 使用正则表达式匹配 Order 后面的数字
        let orderNumber = 0;
        if (orderNumberMatch) {
            orderNumber = orderNumberMatch[1]; // 获取匹配到的数字
            console.log(orderNumber); // 输出提取的数字
        } else {
            console.log("没有找到 Order 后面的数字");
        }
        deleteDraftsAndPublished(location.hash, parseInt(orderNumber));
    }
});

