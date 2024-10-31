const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Implement feature X",
        category: "Development",
        taskDate: "2024-11-01",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Fix bug in module Y",
        category: "Development",
        taskDate: "2024-11-03",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Review pull requests",
        category: "Development",
        taskDate: "2024-11-05",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Conduct user testing for feature Z",
        category: "Testing",
        taskDate: "2024-11-02",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Create test cases for new functionality",
        category: "Testing",
        taskDate: "2024-11-04",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Report testing results",
        category: "Testing",
        taskDate: "2024-11-06",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Research new trends in the market",
        category: "Research",
        taskDate: "2024-11-03",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Analyze competitor strategies",
        category: "Research",
        taskDate: "2024-11-05",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Task 3",
        description: "Prepare a report on findings",
        category: "Research",
        taskDate: "2024-11-07",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Create marketing plan for product launch",
        category: "Marketing",
        taskDate: "2024-11-01",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Design promotional materials",
        category: "Marketing",
        taskDate: "2024-11-02",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Plan social media campaign",
        category: "Marketing",
        taskDate: "2024-11-05",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Assist customers with inquiries",
        category: "Support",
        taskDate: "2024-11-01",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Update support documentation",
        category: "Support",
        taskDate: "2024-11-03",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Compile customer feedback",
        category: "Support",
        taskDate: "2024-11-06",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];
const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(employees,admin);
};
