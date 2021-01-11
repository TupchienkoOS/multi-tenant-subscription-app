export const users = [
  {
    id: 1,
    firstName: "David",
    lastName: "Williams",
    type: "user",
    role: "owner",
    companies: [1, 2],
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
    firstName: "Bruce",
    lastName: "Wayne",
    type: "user",
    role: "tenant",
    login: "test1@.com.ua",
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
