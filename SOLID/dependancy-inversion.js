/**
 * Dependancy consideration
 * High level modules should not rely on low level module
 */

class FileSystem {
  writeToFile() {}
}

class CloudDatabase {
  saveDataToCloud() {}
}

class Data {
  save(data) {
    if (data instanceof FileSystem) {
      // writeToFile()
    }
    if (data instanceof CloudDatabase) {
      // saveDataToCloud()
    }
  }
}

/**
 * The Data class is relying on FileSystem and CloudDatabase class
 * we should change like this
 */

class LocalData {
  save(data) {
    //write to local file system
  }
}

class CloudData {
  save(data) {
    // write to external cloud
  }
}
