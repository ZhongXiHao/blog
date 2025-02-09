// Fetch the list of blogsQ

const dateOptions = {
    hour: "2-digit",
    minute: "2-digit",
    month: 'short',  // "Apr"
    day: '2-digit',  // "28"
    year: 'numeric',  // "2023"
    hour12: false // 24小时制
};
const loading = document.querySelector("#loading");
const blogListElement = document.querySelector('#blogList');

// 显示 loading
loading.style.display = "block";

// 创建一个 AbortController 用于控制 fetch 的超时
const controller = new AbortController();
const signal = controller.signal;

// 设置超时（5 秒后中止 fetch 请求）
const timeoutId = setTimeout(() => {
    controller.abort(); // 中止 fetch 请求
    blogListElement.innerHTML = '<li>Timeout: Data not received within 5 seconds.</li>';
    loading.style.display = "none";
}, 5000);

// 发起 fetch 请求，并传入 signal 参数
fetch('https://script.google.com/macros/s/AKfycbwL9g1cKGCxFa72drZj-vxGH5kdqF49JIDmxpVtRkMXD-3CgTim-U5Wj--ZBChEKTOyBw/exec?action=getBlogs', {signal})
    .then(response => response.json())
    .then(data => {
        // 数据返回，清除超时定时器
        clearTimeout(timeoutId);
        blogListElement.innerHTML = ''; // 清空原有数据

        if (data && data.blogs && data.blogs.length) {
            data.blogs.forEach(blog => {
                console.log(blog.visible);
                if(blog.visible === false) return;
                const link = document.createElement('a');
                link.href = `blog.html?blogID=${blog.id}`;
                link.innerHTML = `
          <div class="blogCard">
            <p class="title">${blog.title}</p>
            <p class="postTime">${new Date(blog.postedAt).toLocaleString("en-US", dateOptions)}</p>
            
          </div>
        `;
                blogListElement.appendChild(link);
            });
        } else {
            blogListElement.innerHTML = '<p class="error">No blogs found.</p>';
        }
    })
    .catch(error => {
        if (error.name === 'AbortError') {
            console.error("Fetch aborted due to timeout");
            blogListElement.innerHTML = '<p class="error">Time out. Please refresh to try.</p>';
        } else {
            console.error("Error fetching blog list:", error);
            blogListElement.innerHTML = '<p class="error">Error loading blogs.</p>';
        }
    })
    .finally(() => {
        loading.style.display = "none";
    });
