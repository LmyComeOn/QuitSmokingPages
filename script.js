function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const targetSection = document.getElementById(sectionId);
    targetSection.style.display = 'block';
}

var audioPlayer = document.getElementById('audioPlayer');

function playMusic() {
    audioPlayer.play();
}

function pauseMusic() {
    audioPlayer.pause();
}

function stopMusic() {
    audioPlayer.pause(); // 暂停播放
    audioPlayer.currentTime = 0; // 重置播放时间
}

const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselItems = document.querySelectorAll('.carousel-item');
const overlay = document.getElementById('overlay');
const closeBtn = document.querySelector('.close-btn');
const fullImage = document.getElementById('fullImage');
let currentIndex = 0;

// 切换到下一张图片
function nextImage() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
}

// 切换到上一张图片
function prevImage() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
}

// 更新轮播图显示，实现切换动画效果
function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 给上一张按钮添加点击事件
prevBtn.addEventListener('click', prevImage);

// 给下一张按钮添加点击事件
nextBtn.addEventListener('click', nextImage);

// 自动轮播，每3秒切换一次图片（可根据需求调整时间间隔）
setInterval(nextImage, 3000);

// 给每张轮播图添加点击事件，用于放大查看
carouselItems.forEach(item => {
    item.addEventListener('click', function () {
        const fullSrc = this.dataset.fullsrc;
        fullImage.src = fullSrc;
        overlay.style.display = 'flex';
    });
});

// 给关闭按钮添加点击事件，用于关闭放大查看的图片
closeBtn.addEventListener('click', function () {
    overlay.style.display = 'none';
});

// 留言板
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.querySelector('.comment-list');

// 阻止表单默认提交行为，采用自定义的提交逻辑
commentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const commentText = commentInput.value;
    if (commentText.trim()!== '') {
        // 创建新的评论元素
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<p>${commentText}</p>`;
        // 将新评论添加到评论列表中
        commentList.appendChild(newComment);
        // 清空输入框
        commentInput.value = '';
    }
});