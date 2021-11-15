/**Normally, when we talk about inheritance,
 * we also mention composition
 * E.g:
 * class Human {sleep()}
 * class Developer {sleep(), code(), design()}
 * class SystemAdmin {sleep(), deploy(), maintain()}
 * and finally,
 * class DevOps {sleep(), code(), deploy(), maintain()}
 *
 * 2 subclasses can inherits from Human {} class
 * but how DevOps will be written, whe he has to do some task of both Developer
 * and SystemAdmin
 *
 * composition comes to the rescue, we can exposes all the skills to an object
 */

const skills = {
  code() {
    console.log('..coding..');
  },
  design() {
    console.log('..designing..');
  },
  deploy() {
    console.log('..deploying..');
  },
  maintain() {
    console.log('..maintaining..');
  },
};
class Human {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  sleep() {
    console.log('..sleeping..');
  }
}

class Developer extends Human {
  code: () => void;
  design: () => void;
  constructor(name: string) {
    super(name);
    //Assign the skills to the instance
    Object.assign(this, {
      code: skills.code,
      design: skills.design,
    });
  }
}

class SystemAdmin extends Human {
  deploy: () => void;
  maintain: () => void;
  constructor(name: string) {
    super(name);
  }
}

//Asign the skills to the prototype
Object.assign(SystemAdmin.prototype, {
  deploy: skills.deploy,
  maintain: skills.maintain,
});

class DevOps extends Human {
  code: () => void;
  deploy: () => void;
  maintain: () => void;
  constructor(name: string) {
    super(name);
    Object.assign(this, {
      code: skills.code,
      deploy: skills.deploy,
      maintain: skills.maintain,
    });
  }
}

const benDev = new Developer('Ben');
const jacobSystemAdmin = new SystemAdmin('Jacob');
const lauraDevOps = new DevOps('Laura');
benDev.code();
jacobSystemAdmin.deploy();
lauraDevOps.maintain();

export default {};
