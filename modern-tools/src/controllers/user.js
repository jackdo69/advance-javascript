const userData = require('../../user.json');

class User {
  constructor() {
    this.userData = userData;
  }

  getAll() {
    return this.userData;
  }

  getById(id) {
    const user = this.userData.find((u) => u.id === parseInt(id, 10));
    return user;
  }
}

export default User;
