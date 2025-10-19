// Landing page functionality
document.addEventListener('DOMContentLoaded', function() {
    const playerNameInput = document.getElementById('playerName');
    const topicCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const startButton = document.getElementById('startQuiz');
    const errorMessage = document.getElementById('errorMessage');

    // Handle topic selection
    topicCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
            
            // Update visual selection
            updateTopicSelection();
            
            // Limit to 2 selections
            if (checkedBoxes.length > 2) {
                this.checked = false;
                showError('Please select exactly 2 topics only.');
                updateTopicSelection();
                return;
            }
            
            // Clear error if valid selection
            if (checkedBoxes.length <= 2) {
                hideError();
            }
            
            // Enable/disable start button
            updateStartButton();
        });
    });

    // Handle player name input
    playerNameInput.addEventListener('input', function() {
        updateStartButton();
        if (this.value.trim()) {
            hideError();
        }
    });

    // Handle start quiz button
    startButton.addEventListener('click', function() {
        if (validateForm()) {
            startQuiz();
        }
    });

    // Handle Enter key in name input
    playerNameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && validateForm()) {
            startQuiz();
        }
    });

    function updateTopicSelection() {
        topicCheckboxes.forEach(checkbox => {
            const topicItem = checkbox.closest('.topic-item');
            if (checkbox.checked) {
                topicItem.classList.add('selected');
            } else {
                topicItem.classList.remove('selected');
            }
        });
    }

    function updateStartButton() {
        const playerName = playerNameInput.value.trim();
        const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
        
        if (playerName && checkedBoxes.length === 2) {
            startButton.disabled = false;
            startButton.style.opacity = '1';
        } else {
            startButton.disabled = true;
            startButton.style.opacity = '0.6';
        }
    }

    function validateForm() {
        const playerName = playerNameInput.value.trim();
        const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');

        if (!playerName) {
            showError('Please enter your name.');
            playerNameInput.focus();
            return false;
        }

        if (playerName.length < 2) {
            showError('Name must be at least 2 characters long.');
            playerNameInput.focus();
            return false;
        }

        if (checkedBoxes.length === 0) {
            showError('Please select 2 topics to start the quiz.');
            return false;
        }

        if (checkedBoxes.length === 1) {
            showError('Please select one more topic (2 topics required).');
            return false;
        }

        if (checkedBoxes.length > 2) {
            showError('Please select exactly 2 topics only.');
            return false;
        }

        return true;
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        
        // Auto-hide error after 5 seconds
        setTimeout(() => {
            hideError();
        }, 5000);
    }

    function hideError() {
        errorMessage.style.display = 'none';
    }

    function startQuiz() {
        const playerName = playerNameInput.value.trim();
        const selectedTopics = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value);

        // Store quiz data in sessionStorage
        const quizData = {
            playerName: playerName,
            selectedTopics: selectedTopics,
            timestamp: new Date().toISOString()
        };

        sessionStorage.setItem('quizData', JSON.stringify(quizData));

        // Add loading animation
        startButton.innerHTML = '🔄 Loading Quiz...';
        startButton.disabled = true;

        // Navigate to quiz page
        setTimeout(() => {
            window.location.href = 'quiz.html';
        }, 500);
    }

    // Initialize button state
    updateStartButton();

    // Add some interactive animations
    const topicItems = document.querySelectorAll('.topic-item');
    topicItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (!this.querySelector('input').checked) {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.2)';
            }
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add ripple effect to start button
    startButton.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .start-btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.4);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});