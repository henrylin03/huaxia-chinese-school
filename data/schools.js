const schools = [
  {
    name: "Brookvale Public School",
    coordinates: [-33.76111, 151.27061],
    address: "2-8 Old Pittwater Rd, Brookvale",
    availableClasses: [
      { day: "Saturday", startTime: "12:30pm", endTime: "2:30pm" },
      { day: "Saturday", startTime: "2:40pm", endTime: "4:40pm" },
    ],
    classPrice: 245 / 9,
    textbookPrice: 40,
    isAllowedOutsideStudents: true,
  },
  {
    name: "Carlingford West Public School",
    coordinates: [-33.7818, 151.03794],
    address: "Felton Rd, Carlingford",
    classroomLocation:
      "All students will meet Chinese teachers at Red Cola. Various.",
    availableClasses: [
      { day: "Wednesday", startTime: "3:30pm", endTime: "5:00pm" },
      { day: "Friday", startTime: "3:30pm", endTime: "5:00pm" },
    ],
    classPrice: 220 / 9,
    isAllowedOutsideStudents: false,
  },
  {
    name: "Eastwood Heights Public School",
    coordinates: [-33.78131, 151.0957],
    address: "9A Lincoln St, Eastwood",
    availableClasses: [
      { day: "Friday", startTime: "3:40pm", endTime: "5:10pm" },
    ],
    classPrice: 215 / 9,
  },
  {
    name: "Lindfield Public School",
    coordinates: [-33.78077, 151.16925],
    address: "218 Pacific Hwy, Lindfield",
    classroomLocation: "Block C next to school hall",
    availableClasses: [
      { day: "Tuesday", startTime: "3:15pm", endTime: "4:45pm" },
      { day: "Thursday", startTime: "3:15pm", endTime: "4:45pm" },
    ],
    classPrice: 215 / 9,
    textbookPrice: 40,
    isAllowedOutsideStudents: false,
  },
  {
    name: "Parramatta East Public School",
    coordinates: [-33.80592, 151.018],
    address: "Brabyn St, Parramatta",
    availableClasses: [
      { day: "Tuesday", startTime: "3:30pm", endTime: "5:30pm" },
      { day: "Thursday", startTime: "3:30pm", endTime: "5:30pm" },
    ],
    classPrice: 255 / 9,
  },
  {
    name: "Rouse Hill Public School",
    coordinates: [-33.67884, 150.92077],
    address: "39-41 Clower Ave, Rouse Hill",
    availableClasses: [
      { day: "Monday", startTime: "3:30pm", endTime: "5:00pm" },
    ],
    classPrice: 198 / 9,
  },
  {
    name: "Warrawee Public School",
    coordinates: [-33.72939, 151.12123],
    address: "1486 Pacific Hwy, Warrawee",
    availableClasses: [
      { day: "Wednesday", startTime: "3:10pm", endTime: "4:40pm" },
    ],
    classPrice: 225 / 9,
    isAllowedOutsideStudents: true,
  },
  {
    name: "York Public School",
    coordinates: [-33.77657, 150.69758],
    address: "224 Evan St, South Penrith",
    branchContact: { name: "Zhao", mobile: "0410630357" },
  },
  {
    name: "Huaxia Burwood",
    coordinates: [-33.87694, 151.10167],
    address: "1 Railway Pde, Burwood",
  },
  {
    name: "Huaxia Castle Hill",
    coordinates: [-33.73403695990662, 151.0024394287926],
    address: "56 Cecil Ave, Castle Hill",
  },
  {
    name: "Huaxia Chatswood",
    coordinates: [-33.79583359872034, 151.18745029822347],
    address: "Suite 3, 47 Neridah St, Chatswood",
    branchContact: { name: "Yi", email: "huaxiachineseschool@yahoo.com" },
  },
  {
    name: "Neutral Bay Public School",
    coordinates: [-33.83189, 151.21997],
    address: "175 Ben Boyd Rd, Neutral Bay",
    branchContact: { name: "Lee Fan", email: "leefan1999@hotmail.com" },
    availableClasses: { day: "Friday" },
  },
];

export default schools;
