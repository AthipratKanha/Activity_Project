const activities = [
  {
    _id: "62fb711e0177316af67b7b7b",
    type: "Running",
    date: "2022-10-03",
    durations: 7,
    calories: 7,
    note: "",
    __v: 0,
  },
  {
    _id: "62fb957bd529e22917670e7d",
    type: "Running",
    date: "2022-10-31",
    durations: 6,
    calories: 1,
    note: "",
    __v: 0,
  },
  {
    _id: "62fb96b64ed751c53a6d378c",
    type: "Running",
    date: "2022-10-31",
    durations: 6,
    calories: 1,
    note: "",
    __v: 0,
  },
  {
    _id: "62fb96c04ed751c53a6d378e",
    type: "Running",
    date: "2022-10-31",
    durations: 6,
    calories: 1,
    note: "",
    __v: 0,
  },
  {
    _id: "62fb96c14ed751c53a6d3790",
    type: "Running",
    date: "2022-10-31",
    durations: 6,
    calories: 1,
    note: "",
    __v: 0,
  },
  {
    _id: "62fba615bfc723aaaa4a0c9e",
    type: "Running",
    date: "2022-10-03",
    durations: 6,
    calories: 1,
    note: "",
    __v: 0,
  },
  {
    _id: "62fd283cfaed4b0b8c3d29db",
    type: "Swimming",
    date: "2022-11-10",
    durations: 6,
    calories: 1,
    note: "",
    __v: 0,
  },
  {
    _id: "62fd289afaed4b0b8c3d29e1",
    type: "Swimming",
    date: "2022-01-10",
    durations: 6,
    calories: 1,
    note: "",
    __v: 0,
  },
  {
    _id: "62fd39a4dbbe3c306516a62c",
    type: "Swimming",
    date: "2022-01-01",
    durations: 6,
    calories: 1,
    note: "",
    __v: 0,
  },
  {
    _id: "62fd3a4681902ca7b9f92d39",
    type: "Swimming",
    date: "2022-01-01",
    durations: 6,
    calories: 1,
    note: "",
    __v: 0,
  },
  {
    _id: "62fde9cd6d3c7b384faa00fd",
    type: "Hiking",
    date: "2022-01-01",
    durations: 6,
    calories: 1,
    note: "",
    __v: 0,
  },
  {
    _id: "62fdeed547bc45ad51a69f49",
    type: "Running",
    date: "2022-10-03",
    durations: 7,
    calories: 7,
    note: "",
    __v: 0,
  },
];

const output = activities.map((activity) => {
  return { ...activity, date: activity.date };
});

console.log(output);


axios
        .post("http://127.0.0.1:8080/activities/", newItem ,{headers})
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });