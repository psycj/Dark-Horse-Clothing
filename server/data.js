export const UserData = [
  {
    _id: ObjectId("616d12c266a30f4b4a4c4b4d"),
    firstName: "Joe",
    lastName: "Doe",
    email: "johndoe@example.com",
    password: "password",
    address: {
      street1: "123 Main St",
      street2: "",
      city: "Anytown",
      state: "CA",
      country: "USA",
      zipcode: "12345",
    },

    orders: [],
    sellingProducts: [
      {
        product: ObjectId("616d141d66a30f4b4a4c4b53"),
        price: 25.99,
        size: "M",
        color: "black",
      },
    ],
    favoriteProducts: [
      ObjectId("616d141d66a30f4b4a4c4b53"),
      ObjectId("616d149f66a30f4b4a4c4b54"),
    ],
    role: ["customer", "seller"],
    createdAt: ISODate("2022-02-10T07:00:00.000Z"),
    updatedAt: ISODate("2022-02-10T07:00:00.000Z"),
  },
  {
    _id: ObjectId("616d154166a30f4b4a4c4b50"),
    firstName: "Jane",
    lastName: "Smith",
    email: "janesmith@example.com",
    password: "password",
    address: {
      street1: "789 Oak St",
      street2: "",
      city: "Another town",
      state: "NY",
      country: "USA",
      postalCode: "56789",
    },
    orders: [],
    sellingProducts: [
      {
        product: ObjectId("616d14f966a30f4b4a4c4b55"),
        price: 15.99,
        size: "S",
        color: "blue",
      },
    ],
    favoriteProducts: [ObjectId("616d14f966a30f4b4a4c4b55")],
    role: ["customer", "seller"],
    createdAt: ISODate("2022-02-10T08:00:00.000Z"),
    updatedAt: ISODate("2022-02-10T08:00:00.000Z"),
  },
  {
    _id: ObjectId("616d15a366a30f4b4a4c4b51"),
    firstName: "Bob",
    lastName: "Johnson",
    email: "bobjohnson@example.com",
    password: "password",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    address: {
      street1: "456 Elm St",
      street2: "",
      city: "Anytown",
      state: "CA",
      country: "USA",
      postalCode: "12345",
    },
    sellingProducts: [],
    role: ["customer"],
    createdAt: ISODate("2022-02-10T08:00:00.000Z"),
    updatedAt: ISODate("2022-02-10T08:00:00.000Z"),
  },
];
