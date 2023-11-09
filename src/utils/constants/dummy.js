import assets from "./assets";

export const USERdate = [
  {
    id: "USER01",
    name: "Helene Moore",
    role: "Buyer",
    joinYear: 2021,
    location: 'Ho Chi Minh City',
    rank: 'Silver',
    reports: 5,
    email: "mooreHele@blackchurch.com",
    avatar: assets.nft01,
    postHistory: [
      {
        id: '20112023hm',
        date: '20-11-2023',
        title: 'Buying an Iphone 9pro from 2M',
        view: 256,
        reply: 15
      },
      {
        id: '20082022hm',
        date: '20-08-2022',
        title: 'Buying an Iphone 9pro from 2M',
        view: 256,
        reply: 15
      }
    ],
    reportHistory: [
      {
        id: 'report-1',
        date: '13-02-2021',
        title: 'Fake request',
        reporter: 'andrewJane'
      },
      {
        id: 'report-2',
        date: '13-02-2021',
        title: 'Fake demands',
        reporter: 'andrewJane'
      }
    ]
  },
  {
    id: "USER02",
    name: "Helene Moore",
    role: "Buyer",
    joinYear: 2021,
    location: 'Ho Chi Minh City',
    rank: 'Silver',
    reports: 5,
    email: "mooreHele@blackchurch.com",
    avatar: assets.nft02,
    postHistory: [
      {
        id: '20212023hm',
        date: '20-11-2023',
        title: 'Buying an Iphone 9pro from 2M',
        view: 256,
        reply: 15
      },
      {
        id: '20082022hm',
        date: '20-08-2022',
        title: 'Buying an Iphone 9pro from 2M',
        view: 256,
        reply: 15
      }
    ],
    reportHistory: [
      {
        id: 'report-1',
        date: '13-02-2021',
        title: 'Fake request',
        reporter: 'andrewJane'
      },
      {
        id: 'report-2',
        date: '13-02-2021',
        title: 'Fake demands',
        reporter: 'andrewJane'
      }
    ]
  },
  {
    id: "USER03",
    name: "Helene Moore",
    role: "Buyer",
    joinYear: 2021,
    location: 'Ho Chi Minh City',
    rank: 'Silver',
    reports: 5,
    email: "mooreHele@blackchurch.com",
    avatar: assets.nft03,
    postHistory: [
      {
        id: '20312023hm',
        date: '20-11-2023',
        title: 'Buying an Iphone 9pro from 2M',
        view: 256,
        reply: 15
      },
      {
        id: '20082022hm',
        date: '20-08-2022',
        title: 'Buying an Iphone 9pro from 2M',
        view: 256,
        reply: 15
      }
    ],
    reportHistory: [
      {
        id: 'report-1',
        date: '13-02-2021',
        title: 'Fake request',
        reporter: 'andrewJane'
      },
      {
        id: 'report-2',
        date: '13-02-2021',
        title: 'Fake demands',
        reporter: 'andrewJane'
      }
    ]
  },
  {
    id: "USER04",
    name: "Helene Moore",
    role: "Buyer",
    joinYear: 2021,
    location: 'Ho Chi Minh City',
    rank: 'Silver',
    reports: 5,
    email: "mooreHele@blackchurch.com",
    avatar: assets.nft04,
    postHistory: [
      {
        id: '20412023hm',
        date: '20-11-2023',
        title: 'Buying an Iphone 9pro from 2M',
        view: 256,
        reply: 15
      },
      {
        id: '20082022hm',
        date: '20-08-2022',
        title: 'Buying an Iphone 9pro from 2M',
        view: 256,
        reply: 15
      }
    ],
    reportHistory: [
      {
        id: 'report-1',
        date: '13-02-2021',
        title: 'Fake request',
        reporter: 'andrewJane'
      },
      {
        id: 'report-2',
        date: '13-02-2021',
        title: 'Fake demands',
        reporter: 'andrewJane'
      }
    ]
  },
];

export const Conversations = [
  {
    id: 0,
    partner: 'Cellphone S',
    avatar: assets.person01,
    messages: [
      {
        time: '2023-10-30T14:30:00',
        date: '5-11-2023',
        fromUser: false,
        content: 'Hello. Do you interest in our products?'
      },
      {
        time: '2023-10-30T14:31:00',
        date: '5-11-2023',
        fromUser: true,
        content: 'Yes i do'
      },
      {
        time: '2023-10-30T14:32:00',
        date: '5-11-2023',
        fromUser: false,
        content: 'Then you might pay our site a visit'
      },
    ]
  },
  {
    id: 1,
    partner: 'Thegioididong',
    avatar: assets.person02,
    messages: [
      {
        time: '2023-10-30T14:30:00',
        date: '5-2-2023',
        fromUser: false,
        content: 'Hello. Do you interest in our products?'
      },
      {
        time: '2023-10-30T14:31:00',
        date: '5-2-2023',
        fromUser: true,
        content: 'Yes i do'
      },
      {
        time: '2023-10-30T14:32:00',
        date: '6-2-2023',
        fromUser: false,
        content: 'Then you might pay our site a visit'
      },
      {
        time: '2023-11-30T14:30:00',
        date: '6-2-2023',
        fromUser: true,
        content: 'I will'
      },
    ]
  },
  {
    id: 2,
    partner: 'FPT Shop',
    avatar: assets.person03,
    messages: [
      {
        time: '2023-10-30T14:30:00',
        date: '5-2-2023',
        fromUser: false,
        content: 'Hello. Do you interest in our products?'
      },
    ]
  },
]