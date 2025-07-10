// Initialize AOS animations
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out'
});

// Theme Management
class ThemeManager {
  constructor() {
    this.darkMode = false;
    this.toggleButton = document.getElementById('toggleTheme');
    this.init();
  }
  init() {
    const savedTheme = this.getStoredTheme();
    if (savedTheme === 'dark') {
      this.enableDarkMode();
    }
    this.toggleButton.addEventListener('click', () => this.toggleTheme());
  }
  getStoredTheme() {
    return window.srhTheme || 'light';
  }
  setStoredTheme(theme) {
    window.srhTheme = theme;
  }
  toggleTheme() {
    if (this.darkMode) {
      this.enableLightMode();
    } else {
      this.enableDarkMode();
    }
  }
  enableDarkMode() {
    document.body.classList.add('dark');
    this.toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    this.darkMode = true;
    this.setStoredTheme('dark');
  }
  enableLightMode() {
    document.body.classList.remove('dark');
    this.toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    this.darkMode = false;
    this.setStoredTheme('light');
  }
}

// Navigation Management
class NavigationManager {
  constructor() {
    this.hamburger = document.querySelector('.hamburger');
    this.navLinks = document.querySelector('.nav-links');
    this.init();
  }
  init() {
    this.hamburger.addEventListener('click', () => this.toggleMenu());
    this.navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });
    document.addEventListener('click', (e) => {
      if (!this.hamburger.contains(e.target) && !this.navLinks.contains(e.target)) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.navLinks.classList.toggle('active');
    this.hamburger.classList.toggle('active');
  }

  closeMenu() {
    this.navLinks.classList.remove('active');
    this.hamburger.classList.remove('active');
  }
}

// Player Management
class PlayerManager {
  constructor() {
    this.players = [
      {
        name: "Pat Cummins",
        role: "Captain & Bowler",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/33.png",
        stats: { matches: 45, wickets: 67, economy: 7.2 },
        isCaptain: true,
        isOverseas: true,
        roleType: "bowler"
      },
      {
        name: "Heinrich Klaasen",
        role: "Wicket‑Keeper Batter",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/202.png",
        stats: { matches: 28, runs: 1120, average: 42.3 },
        isOverseas: true,
        roleType: "keeper"
      },
      {
        name: "Travis Head",
        role: "Batsman",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/37.png",
        stats: { matches: 25, runs: 890, average: 32.1 },
        isOverseas: true,
        roleType: "batsman"
      },
      {
        name: "Ishan Kishan",
        role: "Wicket‑Keeper Batter",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/164.png",
        stats: { matches: 91, runs: 2295, average: 29.2 },
        roleType: "keeper"
      },
      {
        name: "Smaran Ravichandran",
        role: "Batsman",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3752.png",
        stats: { matches: 91, runs: 2295, average: 29.2 },
        roleType: "batsman"
      },
      {
        name: "Abhinav Manohar",
        role: "Batsman",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/974.png",
        stats: { matches: 13, runs: 170 },
        roleType: "batsman"
      },
      {
        name: "Atharva Taide",
        role: "Batsman",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1001.png",
        stats: { matches: 9, runs: 186 },
        roleType: "batsman"
      },
      {
        name: "Aniket Verma",
        role: "Batsman",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3576.png",
        stats: { matches: 0, runs: 0 },
        roleType: "batsman"
      },
      {
        name: "Sachin Baby",
        role: "Batsman",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/599.png",
        stats: { matches: 18, runs: 144 },
        roleType: "batsman"
      },
      {
        name: "Abhishek Sharma",
        role: "All‑Rounder",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2024/212.png",
        stats: { matches: 47, runs: 1416, wickets: 12 },
        roleType: "allrounder"
      },
      {
        name: "Nitish Kumar Reddy",
        role: "All‑Rounder",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1944.png",
        stats: { matches: 13, runs: 303, wickets: 3 },
        roleType: "allrounder"
      },
      {
        name: "Harsh Dubey",
        role: "All‑Rounder",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1494.png",
        stats: { matches: 13, runs: 303, wickets: 3 },
        roleType: "allrounder"
      },
      {
        name: "Harshal Patel",
        role: "All‑Rounder",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/114.png",
        stats: { matches: 95, wickets: 111, runs: 238 },
        roleType: "allrounder"
      },
      {
        name: "Kamindu Mendis",
        role: "All‑Rounder",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/627.png",
        stats: { matches: 0, runs: 0, wickets: 0 },
        isOverseas: true,
        roleType: "allrounder"
      },
      {
        name: "Wiaan Mulder",
        role: "All‑Rounder",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/630.png",
        stats: { matches: 0, runs: 0, wickets: 0 },
        isOverseas: true,
        roleType: "allrounder"
      },
      {
        name: "Harsh Dubey",
        role: "All‑Rounder",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1494.png",
        stats: { matches: 0, runs: 0, wickets: 0 },
        roleType: "allrounder"
      },
      {
        name: "Mohammad Shami",
        role: "Bowler",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/47.png",
        stats: { matches: 110, wickets: 127, economy: 8.44 },
        roleType: "bowler"
      },
      {
        name: "Rahul Chahar",
        role: "Bowler",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/171.png",
        stats: { matches: 69, wickets: 63, economy: 7.5 },
        roleType: "bowler"
      },
      {
        name: "Simarjeet Singh",
        role: "Bowler",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/622.png",
        stats: { matches: 6, wickets: 4, economy: 8.1 },
        roleType: "bowler"
      },
      {
        name: "Zeeshan Ansari",
        role: "Bowler",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3575.png",
        stats: { matches: 0, wickets: 0 },
        roleType: "bowler"
      },
      {
        name: "Jaydev Unadkat",
        role: "Bowler",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/180.png",
        stats: { matches: 94, wickets: 91, economy: 8.8 },
        roleType: "bowler"
      },
      {
        name: "Eshan Malinga",
        role: "Bowler",
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2025/3339.png",
        stats: { matches: 0, wickets: 0 },
        isOverseas: true,
        roleType: "bowler"
      }
    ];
    this.init();
  }

  init() {
    this.renderPlayers();
  }

  renderPlayers() {
    const playerList = document.querySelector('.player-list');
    if (!playerList) return;

    playerList.innerHTML = this.players.map((player, index) => `
      <div class="player-card" data-aos="zoom-in" data-aos-delay="${index * 100}">
        ${player.isCaptain ? `<div class="badge badge-captain">C</div>` : ""}
        ${player.roleType === "bowler" ? `<div class="badge badge-role-bowler"><img src="https://www.iplt20.com/assets/images/teams-bowler-icon.svg" alt="Bowler" class="role-icon" /> </div>` : ""}
        ${player.roleType === "batsman" ? `<div class="badge badge-role-batsman"><img src="https://www.iplt20.com/assets/images/teams-batsman-icon.svg" alt="Batsman" class="role-icon" /> </div>` : ""}
        ${player.roleType === "keeper" ? `<div class="badge badge-role-keeper"><img src="https://www.iplt20.com/assets/images/teams-wicket-keeper-icon.svg" alt="Batsman" class="role-icon" /> </div>` : ""}
        ${player.roleType === "allrounder" ? `<div class="badge badge-allrounder"><img src="https://www.iplt20.com/assets/images/teams-all-rounder-icon.svg" alt="Batsman" class="role-icon" /> </div>` : ""}
        ${player.isOverseas ? `<div class="badge badge-overseas"><i class="fas fa-plane"></i></div>` : ""}
        <img src="${player.img}" alt="${player.name}" onerror="this.src='fallback.jpg'" />
        <h4>${player.name.toUpperCase()}</h4>
        <p>${player.role}</p>
        <div class="player-stats">
          <small>
            ${player.stats.matches} matches • 
            ${player.stats.runs ? `${player.stats.runs} runs` : `${player.stats.wickets} wickets`}
          </small>
        </div>
      </div>
    `).join('');
  }
}

// Statistics Management
class StatsManager {
  constructor() {
    this.stats = {
      matches: 14,
      wins: 6,
      runs: 2519,
      wickets: 185
    };
    this.init();
  }

  init() {
    this.animateCounters();
  }

  animateCounters() {
    this.animateCounter('matchCount', this.stats.matches, 30);
    this.animateCounter('winCount', this.stats.wins, 50);
  }

  animateCounter(id, target, speed) {
    const element = document.getElementById(id);
    if (!element) return;

    let current = 0;
    const increment = target / 100;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      element.textContent = Math.floor(current);
    }, speed);
  }
}

// Voting System
class VotingManager {
  constructor() {
    this.votes = window.srhVotes || {
      Abhishek: 0,
      Pat: 0,
      Harshal: 0,
    };
    this.init();
  }

  init() {
    this.setupVotingButtons();
    this.displayResults();
  }

  setupVotingButtons() {
    const pollButtons = document.querySelectorAll('.poll-btn');
    pollButtons.forEach(button => {
      button.addEventListener('click', () => {
        const player = button.dataset.player;
        this.vote(player);
      });
    });
  }

  vote(player) {
    this.votes[player]++;
    window.srhVotes = this.votes;
    this.displayResults();
    this.showVoteAnimation(player);
  }

  displayResults() {
    const total = Object.values(this.votes).reduce((sum, count) => sum + count, 0);
    const resultDiv = document.getElementById('voteResult');
    
    if (total === 0) {
      resultDiv.innerHTML = '<p>No votes yet. Be the first to vote!</p>';
      return;
    }

    const results = Object.entries(this.votes)
      .map(([player, count]) => {
        const percentage = ((count / total) * 100).toFixed(1);
        return `
          <div class="vote-item">
            <span class="vote-player">${player}</span>
            <div class="vote-bar">
              <div class="vote-fill" style="width: ${percentage}%"></div>
            </div>
            <span class="vote-percentage">${percentage}%</span>
          </div>
        `;
      })
      .join('');

    resultDiv.innerHTML = `
      <div class="vote-results">
        <h4>Current Results (${total} votes)</h4>
        ${results}
      </div>
    `;
  }

  showVoteAnimation(player) {
    const button = document.querySelector(`[data-player="${player}"]`);
    button.style.transform = 'scale(1.1)';
    button.style.background = '#4caf50';
    
    setTimeout(() => {
      button.style.transform = '';
      button.style.background = '';
    }, 300);
  }
}

// Comment System
class CommentManager {
  constructor() {
    this.comments = window.srhComments || [];
    this.init();
  }

  init() {
    this.setupCommentForm();
    this.setupEmojiPicker();
    this.setupClearButton();
    this.renderComments();
  }

  setupCommentForm() {
    const postButton = document.getElementById('postBtn');
    const nameInput = document.getElementById('nameInput');
    const commentInput = document.getElementById('commentInput');

    postButton.addEventListener('click', () => {
      this.postComment();
    });

    commentInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && e.ctrlKey) {
        this.postComment();
      }
    });
  }

  setupEmojiPicker() {
    const emojiSpans = document.querySelectorAll('.emoji');
    emojiSpans.forEach(span => {
      span.addEventListener('click', () => {
        const emoji = span.dataset.emoji;
        this.addEmoji(emoji);
      });
    });
  }

  setupClearButton() {
    const clearButton = document.getElementById('clearBtn');
    clearButton.addEventListener('click', () => {
      this.clearComments();
    });
  }

  postComment() {
    const nameInput = document.getElementById('nameInput');
    const commentInput = document.getElementById('commentInput');
    const postButton = document.getElementById('postBtn');

    const name = nameInput.value.trim();
    const text = commentInput.value.trim();

    if (!text) {
      this.showNotification('Please write something before posting!', 'error');
      return;
    }
    postButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Posting...';
    postButton.disabled = true;
    setTimeout(() => {
      const comment = {
        id: Date.now(),
        name: name || 'Anonymous',
        text: text,
        timestamp: new Date().toISOString(),
        likes: 0
      };

      this.comments.unshift(comment);
      window.srhComments = this.comments;
      
      this.renderComments();
      this.clearForm();
      this.showNotification('Comment posted successfully!', 'success');
      postButton.innerHTML = '<i class="fas fa-paper-plane"></i> Post Comment';
      postButton.disabled = false;
    }, 500);
  }

  addEmoji(emoji) {
    const commentInput = document.getElementById('commentInput');
    const cursorPos = commentInput.selectionStart;
    const textBefore = commentInput.value.substring(0, cursorPos);
    const textAfter = commentInput.value.substring(cursorPos);
    
    commentInput.value = textBefore + emoji + textAfter;
    commentInput.focus();
    commentInput.setSelectionRange(cursorPos + emoji.length, cursorPos + emoji.length);
  }

  clearForm() {
    document.getElementById('nameInput').value = '';
    document.getElementById('commentInput').value = '';
  }

  clearComments() {
    if (confirm('Are you sure you want to delete all comments? This action cannot be undone.')) {
      this.comments = [];
      window.srhComments = [];
      this.renderComments();
      this.showNotification('All comments cleared!', 'success');
    }
  }

  renderComments() {
    const commentList = document.getElementById('commentList');
    if (!commentList) return;

    if (this.comments.length === 0) {
      commentList.innerHTML = `
        <div class="empty-comments">
          <i class="fas fa-comments"></i>
          <p>No comments yet. Be the first to share your thoughts!</p>
        </div>
      `;
      return;
    }

    commentList.innerHTML = this.comments.map((comment, index) => `
      <div class="comment" data-aos="fade-up" data-aos-delay="${index * 50}">
        <div class="comment-header">
          <strong>${this.escapeHtml(comment.name)}</strong>
          <small>${this.formatTimestamp(comment.timestamp)}</small>
        </div>
        <p>${this.escapeHtml(comment.text)}</p>
        <div class="comment-actions">
          <button class="like-btn" onclick="commentManager.likeComment(${comment.id})">
            <i class="fas fa-heart"></i> ${comment.likes || 0}
          </button>
        </div>
      </div>
    `).join('');
    AOS.refresh();
  }

  likeComment(commentId) {
    const comment = this.comments.find(c => c.id === commentId);
    if (comment) {
      comment.likes = (comment.likes || 0) + 1;
      window.srhComments = this.comments;
      this.renderComments();
    }
  }

  formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMs = now - date;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    return date.toLocaleDateString();
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
      <i class="fas fa-${type === 'success' ? 'check' : 'info'}-circle"></i>
      ${message}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);

    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Smooth Scrolling
class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        
        if (target) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = target.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// Navbar scroll effect
class NavbarEffect {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.lastScrollTop = 0;
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => this.handleScroll());
  }

handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector('header');

  if (scrollTop > this.lastScrollTop && scrollTop > 100) {
    header.classList.add('header-hidden');
  } else {
    header.classList.remove('header-hidden');
  }

  this.lastScrollTop = scrollTop;
}


}

// Loading animation
class LoadingManager {
  constructor() {
    this.init();
  }

  init() {
    this.showLoading();
    window.addEventListener('load', () => {
      this.hideLoading();
    });
  }

  showLoading() {
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerHTML = `
      <div class="loading-content">
        <div class="loading-logo">
          <i class="fas fa-fire"></i>
        </div>
        <div class="loading-text">Loading Orange Army...</div>
        <div class="loading-spinner"></div>
      </div>
    `;
    
    document.body.appendChild(loadingScreen);
  }

  hideLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }
  }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const loadingManager = new LoadingManager();
  const themeManager = new ThemeManager();
  const navigationManager = new NavigationManager();
  const playerManager = new PlayerManager();
  const statsManager = new StatsManager();
  const votingManager = new VotingManager();
  const commentManager = new CommentManager();
  const smoothScroll = new SmoothScroll();
  const navbarEffect = new NavbarEffect();
  
  window.commentManager = commentManager;
  addInteractiveEffects();
});
function addInteractiveEffects() {
  const cards = document.querySelectorAll('.match-card, .player-card, .news-card, .stat-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    });
  }
}
const style = document.createElement('style');
style.textContent = `
  #loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #ff6f00, #ff8f00);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    transition: opacity 0.5s ease;
  }

  .loading-content {
    text-align: center;
    color: white;
  }

  .loading-logo {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: pulse 2s infinite;
  }

  .loading-text {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    font-weight: 500;
  }

  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top: 3px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .navbar {
    transition: all 0.3s ease;
  }

  .navbar.scrolled {
    background: rgba(255, 111, 0, 0.95);
    backdrop-filter: blur(10px);
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      width: 40px;
      height: 40px;
      opacity: 0;
    }
  }

  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 1000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
  }

  .notification.show {
    transform: translateX(0);
  }

  .notification.success {
    background: #4caf50;
  }

  .notification.error {
    background: #f44336;
  }

  .notification.info {
    background: #2196f3;
  }

  .vote-results {
    margin-top: 1rem;
  }

  .vote-item {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    gap: 1rem;
  }

  .vote-player {
    min-width: 80px;
    font-weight: 500;
  }

  .vote-bar {
    flex: 1;
    height: 8px;
    background: #ddd;
    border-radius: 4px;
    overflow: hidden;
  }

  .vote-fill {
    height: 100%;
    background: linear-gradient(45deg, #ff6f00, #ff8f00);
    transition: width 0.5s ease;
  }

  .vote-percentage {
    min-width: 50px;
    text-align: right;
    font-weight: 500;
  }

  .empty-comments {
    text-align: center;
    padding: 2rem;
    color: #666;
  }

  .empty-comments i {
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
`;

document.head.appendChild(style);
