const { createApp } = Vue;

createApp({
  data() {
    return {
      userData: { username: '', email: '', password: '' },
      oldUser: { email: '', password: '' },
      tuggle_signUp_past: false
    };
  },
  methods: {
    sendUser(e) {
      e.preventDefault();

      let users = JSON.parse(localStorage.getItem('users') || '[]');

    
      const exists = users.find(u => u.email === this.userData.email);
      if (exists) {
        alert('این ایمیل قبلاً ثبت شده است.');
        return;
      }

      users.push(this.userData);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('token', 'dummy_token'); 
      localStorage.setItem('username', this.userData.username);

      window.location.href = './my_form.html';
    },

    loginUser(e) {
      e.preventDefault();

      let users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === this.oldUser.email && u.password === this.oldUser.password);

      if (!user) {
        alert('ایمیل یا رمز عبور اشتباه است.');
        return;
      }

      localStorage.setItem('token', 'dummy_token');
      localStorage.setItem('username', user.username);

      window.location.href = './my_form.html';
    },

    showLogin() {
      this.tuggle_signUp_past = true;
    },

    showSignUp() {
      this.tuggle_signUp_past = false;
    }
  }
}).mount('#sign-up');
