/**
 * 'single-responsibility' simply means one module only does
 * one job, logically or technically, therefore
 * there should be one reason to update this module
 */

class User {
  read() {
    // return user from DB
  }
  create() {
    // write new user to DB
  }

  update(req: string) {
    // update user to DB
    // load picture from request
    // save it to storage
    // update picture link
    // only update Url
    const pictureHandler = new Picture();
    const url = pictureHandler.loadPicture(req);
    // update the url
  }
  delete() {
    // delete user from DB
  }
}

/**
 * In the class User above, the update() method has some code that not related to User
 * we can load picture and save to storage in another module
 */
class Picture {
  loadPicture(req: string) {
    // load picture from request
    //return the new URL
    return;
  }
}

export default {};
