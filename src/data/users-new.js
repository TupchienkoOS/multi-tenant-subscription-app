const users = [
  {
    id: 1,
    firstName: "David",
    lastName: "Williams",
    role: "user",
    login: "test@.com.ua",
    messages: [],
    notifications: [
      {
        notification: "Bruce",
        date: "Wayne",
        id: "1",
      },

      {
        notification: "Peter",
        date: "Parker",
        id: "2",
      },

      {
        notification: "Tony",
        date: "Stark",
        id: "3",
      },
    ],
    avatarSmall: "../multi-tenant-subscription-app/src/img/profile_small.jpg",
  },
  {
    id: 2,
    firstName: "Yoga_Center",
    lastName: "",
    role: "company",
    login: "comp@.com.ua",
    messages: [],
    notifications: [
      {
        notification: "Bruce",
        date: "Wayne",
        id: "1",
      },

      {
        notification: "Peter",
        date: "Parker",
        id: "2",
      },

      {
        notification: "Tony",
        date: "Stark",
        id: "3",
      },
    ],
    avatarSmall:
      "D:/DEV/multi-tenant-subscription-app/src/img/profile_small.jpg",
  },
];

/**
 * @typedef Company
 * @property {number} id
 * @property {string} name
 * @property {string} subdomain
 * @property {number[]} owners
 */

/**
 * @type {Company[]}
 */
const companies = [
  { name: "FirstCompany", subdomain: "FirstCompany", owners: [1] },
];

export const db = { users, companies };

export default class Db {
  companies;
  users;

  registerUser;
}

export class UserService {
  /**
   *
   * @param {Db} db
   */
  constructor(db) {
    this.db = db;
  }

  /**
   *
   * @param {number} id
   */
  async getUser(id) {
    return db.users.find((u) => u.id === id);
  }
  /**
   *
   * @param {number} id
   */
  getUser(email, password) {
    return db.users.find((u) => u.id === id);
  }
}

export class CompaniesService {
  /**
   *
   * @param {Db} db
   */
  constructor(db) {
    this.db = db;
  }

  /**
   *
   * @param {number} id
   */
  getCom(id) {
    return db.users.find((u) => u.id === id);
  }
  /**
   *
   * @param {number} id
   */
  getUser(email, password) {
    return db.users.find((u) => u.id === id);
  }
}
