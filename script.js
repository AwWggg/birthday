document.addEventListener('DOMContentLoaded', function() {
    const cakeContainer = document.querySelector('.cake-container');
    const candles = document.querySelectorAll('.candle');
    const message = document.querySelector('.message');

    cakeContainer.addEventListener('click', function() {
        // 蜡烛熄灭动画
        candles.forEach(candle => {
            candle.style.opacity = '0';
            candle.style.transition = 'opacity 1s ease';
        });

        // 显示祝福文字
        message.classList.remove('hidden');
        message.classList.add('show');
        
        // 添加烟花效果
        createFireworks();
    });

    function createFireworks() {
        const colors = ['#FFD700', '#FF4500', '#00FF7F', '#00BFFF', '#FF69B4'];
        const container = document.querySelector('.background');
        
        for(let i = 0; i < 50; i++) {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            firework.style.left = `${Math.random() * 100}%`;
            firework.style.top = `${Math.random() * 100}%`;
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            firework.style.animationDuration = `${Math.random() * 2 + 1}s`;
            container.appendChild(firework);
            
            // 移除烟花元素
            firework.addEventListener('animationend', function() {
                firework.remove();
            });
        }
    }
});
