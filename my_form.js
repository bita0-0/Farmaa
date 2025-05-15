const { createApp } = Vue;

createApp({
  data() {
    return {
      forms: []
    };
  },
  methods: {
    getForms() {
      const forms = JSON.parse(localStorage.getItem('forms') || '[]');
      this.forms = forms;
    },

    logoutUser() {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      window.location.href = './sign_up.html';
    },

    createForm() {
      
      window.location.href = './form_creator.html';
    }
  },
  mounted() {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = './sign_up.html';
      return;
    }
    this.getForms();
  }
}).mount('#main-box');
