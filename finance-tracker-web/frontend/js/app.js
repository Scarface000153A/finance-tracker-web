// Finance Tracker - Main App Script
// Mounted on #app in index.html

const { createApp } = Vue;

createApp({
  data() {
    return {
      features: [
        {
          id: 1,
          icon: '💰',
          title: 'Track Income & Expenses',
          description: 'Record every transaction with categories and descriptions.',
        },
        {
          id: 2,
          icon: '📊',
          title: 'Real-time Analytics',
          description: 'View your balance, income, and expenses at a glance.',
        },
        {
          id: 3,
          icon: '🔐',
          title: 'Secure Authentication',
          description: 'JWT-based auth with bcrypt password hashing.',
        },
        {
          id: 4,
          icon: '📱',
          title: 'Responsive Design',
          description: 'Works on desktop, tablet, and mobile devices.',
        },
        {
          id: 5,
          icon: '⚡',
          title: 'Fast & Lightweight',
          description: 'Built with Vue.js 3 for a snappy user experience.',
        },
        {
          id: 6,
          icon: '🔧',
          title: 'Easy to Customize',
          description: 'Open source and modular for your needs.',
        },
      ],
    };
  },
}).mount('#app');
