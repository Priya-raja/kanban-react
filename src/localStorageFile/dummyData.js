export const ApiMockResponse = [
  {
    id: 1651319512266.7095,
    title: "Discover",
    cards: [
      {
        id: 1,
        title: "Task1",
        labels: [{ color: "#cf61a1", text: "Urgent" }],
        date: "2022-05-05",
        tasks: [
          { id: 11, completed: true, text: "Task1_subtask1" },
          { id: 12, completed: true, text: "Task1_subtask2" },
          { id: 13, completed: true, text: "Task1_subtask3" },
        ],
        desc: "Task1 Detail Description",
      },
      {
        id: 2,
        title: "Task2",
        labels: [{ color: "#1ebffa", text: "Frontend" }],
        date: "",
        tasks: [],
      },
    ],
  },
  {
    id: 3,
    title: "Doing",
    cards: [
      {
        id: 20,
        title: "Task3",
        labels: [{ color: "#9975bd", text: "Database" }],
        date: "",
        tasks: [
          { id: 1651319728301.3855, completed: false, text: "restore db" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "In-Review",
    cards: [
      {
        id: 22,
        title: "Task4",
        labels: [{ color: "#8da377", text: "figma" }],
        date: "2022-05-06",
        tasks: [],
      },
    ],
  },
  {
    id: 5,
    title: "Completed",
    cards: [
      {
        id: 24,
        title: "Task5",
        labels: [{ color: "#4fcc25", text: "Payment API" }],
        date: "2022-05-04",
        tasks: [
          { id: 1651319820180.9648, completed: false, text: "GraphQl" },
          { id: 1651319833779.3252, completed: true, text: "Restful API" },
        ],
      },
    ],
  },
];