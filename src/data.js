import architecture from "./assets/architecture.webp";
import money1 from "./assets/money1.jpg";
import wealth from "./assets/wealth.jpg";
import micro from "./assets/micro.webp";
export const allServices = [
  {
    type: "Small scale  Business Loans",
    code: "SCB",
    imgUrl: architecture,
    description:
      "Providing loans which  designed for your aspirations in starting a business",
    detail: [
      {
        type: "DI Loan",
        min: 15000,
        max: 100000,
        rate: 0.05,
        tenure: 150,
      },
      {
        type: "MI Loan",
        min: 100000,
        max: 300000,
        rate: 0.07,
        tenure: 34,
      },
    ],
  },
  {
    type: "Money Remittance",
    code: "MR",
    imgUrl: money1,
    description:
      "Secure, simple and most exciting way of your transactions to inter and intra regions",
    detail: [
      {
        type: "Domestic",
        min: 2500,
        max: 25000,
        rate: 0.02,
        tenure: "NA",
      },
      {
        type: "Inward",
        min: 5000,
        max: 10000,
        rate: 0.05,
        tenure: "NA",
      },
    ],
  },
  {
    type: "Wealth Management",
    code: "WM",
    imgUrl: wealth,
    description:
      "We are providing significant services for your betterment of your wealth ",
    detail: ["DEMAT", "PAN", "NPS"],
  },
  {
    type: "Micro Finance",
    code: "MF",
    imgUrl: micro,
    description:
      "Motivate the enterpreneurs across all small villages and rural areas by providing them a better support",
    detail: [
      {
        type: "NA",
        rate: 0.28,
        min: 1000,
        max: 3500,
        tenure: 2,
      },
    ],
  },
];
export const EmiServices = [
  {
    type: "Small scale  Business Loans",
    code: "SCB",
    imgUrl: architecture,
    description:
      "Providing loans which  designed for your aspirations in starting a business",
    detail: [
      {
        type: "DI Loan",
        min: 15000,
        max: 100000,
        rate: 0.05,
        tenure: 150,
      },
      {
        type: "MI Loan",
        min: 100000,
        max: 300000,
        rate: 0.07,
        tenure: 730,
      },
    ],
  },
  {
    type: "Money Remittance",
    code: "MR",
    imgUrl: money1,
    description:
      "Secure, simple and most exciting way of your transactions to inter and intra regions",
    detail: [
      {
        type: "Domestic",
        min: 2500,
        max: 25000,
        rate: 0.02,
        tenure: "NA",
      },
      {
        type: "Inward",
        min: 5000,
        max: 10000,
        rate: 0.05,
        tenure: "NA",
      },
    ],
  },

  {
    type: "Micro Finance",
    code: "MF",
    imgUrl: micro,
    description:
      "Motivate the enterpreneurs across all small villages and rural areas by providing them a better support",
    detail: [
      {
        type: "NA",
        rate: 0.28,
        min: 1000,
        max: 3500,
        tenure: 2,
      },
    ],
  },
];
