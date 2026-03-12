const urlParams = new URLSearchParams(window.location.search);
const blogID = urlParams.get('blogID');
const blogTitle = document.querySelector("#blogTitle");
const editTimeP = document.querySelector("#blogContentContainer .no-gap");
const blogContent = document.querySelector('#blogContent');
const footer = document.querySelector('footer');
const loading = document.querySelector("#loading");
loading.style.display = "block";
const dateOptions = {
    month: 'short',  // "Apr"
    day: '2-digit',  // "28"
    year: 'numeric',  // "2023"
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false // 24小时制
};

const controller = new AbortController();
const signal = controller.signal;

const timeoutId = setTimeout(() => {
    controller.abort(); // 中止 fetch 请求
    blogContent.innerHTML = '<li>Timeout: Data not received within 5 seconds.</li>';
    loading.style.display = "none";
}, 8000);


if (blogID) {
    // Fetch the specific blog content using the ID
    fetch(`https://script.google.com/macros/s/AKfycbwL9g1cKGCxFa72drZj-vxGH5kdqF49JIDmxpVtRkMXD-3CgTim-U5Wj--ZBChEKTOyBw/exec?action=getBlog&blogID=${parseInt(blogID)}`, {signal})
        .then(response => response.json())
        .then(data => {
            clearTimeout(timeoutId);
            blogContent.innerHTML = '';
            if (data && data.blogsData.blogContent && data.blogsData.blogTitle && data.blogsData.editTime) {
                blogTitle.innerText = data.blogsData.blogTitle;
                editTimeP.innerHTML = `Last Edited At <span id="editTime">${new Date(data.blogsData.editTime).toLocaleString("en-US", dateOptions)}</span>`;
                const content = data.blogsData.blogContent;
                content.split('\n\n').forEach(paragraph => {
                    paragraph = "　　" + paragraph.replace(/\n/g, "<br>　　");
                    const p = document.createElement('p');
                    p.innerHTML = paragraph;
                    blogContent.appendChild(p);
                });
                if (data.blogsData.prevBlog) {
                    const link = document.createElement('a');
                    link.id = "prevBlog";
                    link.href = `blog.html?blogID=${data.blogsData.prevBlog.id}`;
                    link.innerHTML = `${prevIcon}
                    <h2>
                        ${data.blogsData.prevBlog.title}
                    </h2>
                    `;
                    footer.append(link);
                } else {
                    const link = document.createElement('a');
                    link.classList.add("noPrevBlog")
                    link.style.cursor = "not-allowed";
                    link.innerHTML = `
                    ${prevIcon}
                    <h2>
                        No More Blogs
                    </h2>
                    `;
                    footer.append(link);
                }


                if (data.blogsData.nextBlog) {
                    const link = document.createElement('a');
                    link.id = "nextBlog";
                    link.href = `blog.html?blogID=${data.blogsData.nextBlog.id}`;
                    link.innerHTML = `
                    <h2>
                        ${data.blogsData.nextBlog.title}
                    </h2>
                    ${nextIcon}
                    `;
                    footer.append(link);
                } else {
                    const link = document.createElement('a');
                    link.classList.add("noNextBlog")
                    link.style.cursor = "not-allowed";
                    link.innerHTML = `
                    <h2>
                        No More Blogs
                    </h2>
                    ${nextIcon}
                    `;
                    footer.append(link);
                }
                document.querySelector("#icon").style.width = document.querySelector("header h1").offsetWidth + "px";
            } else {
                document.getElementById('blogContent').innerText = 'No blog found.';
            }
        })
        .catch(error => {
            if (error.name === 'AbortError') {
                console.error("Fetch aborted due to timeout");
                blogContent.innerHTML = '<p class="error">Time out. Please refresh to try.</p>';
            } else {
                console.error("Error fetching blog list:", error);
                blogContent.innerHTML = '<p class="error">Error loading blogs. (The blog may be invisible or deleted.)</p>';
            }
        })
        .finally(() => {
            loading.style.display = "none";
        });
}