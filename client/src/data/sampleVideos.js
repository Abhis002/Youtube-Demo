const sampleVideos = [
  {
    videoId: "video01",
    title: "Learn React in 30 Minutes",
    thumbnailUrl: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "A quick tutorial to get started with React.",
    channelId: "channel01",
    uploader: "user01",
    views: 15200,
    likes: 1023,
    dislikes: 45,
    uploadDate: "2024-09-20",
    comments: [
      {
        commentId: "comment01",
        userId: "user02",
        text: "Great video! Very helpful.",
        timestamp: "2024-09-21T08:30:00Z"
      }
    ]
  },
  {
    videoId: "video02",
    title: "Master Node.js in 1 Hour",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnailUrl: "https://img.youtube.com/vi/TlB_eWDSMt4/hqdefault.jpg",
    description: "Learn Node.js from scratch in this 1 hour crash course.",
    channelId: "channel02",
    uploader: "user02",
    views: 9800,
    likes: 850,
    dislikes: 30,
    uploadDate: "2024-10-05",
    comments: [
      {
        commentId: "comment02",
        userId: "user03",
        text: "Very informative and clear!",
        timestamp: "2024-10-06T10:15:00Z"
      }
    ]
  },
  {
    videoId: "video03",
    title: "MongoDB Crash Course",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnailUrl: "https://img.youtube.com/vi/oSIv-E60NiU/hqdefault.jpg",
    description: "Crash course to learn MongoDB and NoSQL in under an hour.",
    channelId: "channel03",
    uploader: "user03",
    views: 12300,
    likes: 920,
    dislikes: 22,
    uploadDate: "2024-08-15",
    comments: [
      {
        commentId: "comment03",
        userId: "user01",
        text: "Exactly what I needed. Thanks!",
        timestamp: "2024-08-16T14:45:00Z"
      }
    ]
  },
  {
    videoId: "video04",
    title: "JavaScript for Beginners",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    thumbnailUrl: "https://img.youtube.com/vi/W6NZfCO5SIk/hqdefault.jpg",
    description: "Learn JavaScript fundamentals for complete beginners.",
    channelId: "channel04",
    uploader: "user04",
    views: 8900,
    likes: 610,
    dislikes: 18,
    uploadDate: "2024-07-12",
    comments: [
      {
        commentId: "comment04",
        userId: "user05",
        text: "This helped me ace my interview prep!",
        timestamp: "2024-07-13T09:00:00Z"
      }
    ]
  },
  {
    videoId: "video05",
    title: "Frontend vs Backend Explained",
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    thumbnailUrl: "https://img.youtube.com/vi/3PHXvlpOkf4/hqdefault.jpg",
    description: "Understand the differences between frontend and backend development.",
    channelId: "channel05",
    uploader: "user05",
    views: 7600,
    likes: 480,
    dislikes: 10,
    uploadDate: "2024-11-02",
    comments: [
      {
        commentId: "comment05",
        userId: "user02",
        text: "Very useful for beginners!",
        timestamp: "2024-11-03T13:20:00Z"
      }
    ]
  },
  {
    videoId: "video06",
    title: "Understanding REST APIs",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnailUrl: "https://img.youtube.com/vi/Q-BpqyOT3a8/hqdefault.jpg",
    description: "Learn how RESTful APIs work and how to build them.",
    channelId: "channel06",
    uploader: "user06",
    views: 10400,
    likes: 735,
    dislikes: 12,
    uploadDate: "2024-10-10",
    comments: [
      {
        commentId: "comment06",
        userId: "user04",
        text: "The explanation was very clear!",
        timestamp: "2024-10-11T11:30:00Z"
      }
    ]
  },
  {
    videoId: "video07",
    title: "CSS Grid vs Flexbox",
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    thumbnailUrl: "https://img.youtube.com/vi/7kVeCqQCxlk/hqdefault.jpg",
    description: "When to use CSS Grid or Flexbox in your layout.",
    channelId: "channel07",
    uploader: "user07",
    views: 6700,
    likes: 520,
    dislikes: 5,
    uploadDate: "2024-09-12",
    comments: [
      {
        commentId: "comment07",
        userId: "user05",
        text: "Great comparison!",
        timestamp: "2024-09-13T08:45:00Z"
      }
    ]
  },
  {
    videoId: "video08",
    title: "Build a Portfolio with HTML & CSS",
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnailUrl: "https://img.youtube.com/vi/CNzox7aZCkY/hqdefault.jpg",
    description: "Create your own portfolio site step by step.",
    channelId: "channel08",
    uploader: "user08",
    views: 8450,
    likes: 710,
    dislikes: 9,
    uploadDate: "2024-08-30",
    comments: [
      {
        commentId: "comment08",
        userId: "user03",
        text: "Really helped me finish my portfolio!",
        timestamp: "2024-08-31T17:20:00Z"
      }
    ]
  },
  {
    videoId: "video09",
    title: "Introduction to TypeScript",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    thumbnailUrl: "https://img.youtube.com/vi/BwuLxPH8IDs/hqdefault.jpg",
    description: "Learn why TypeScript is a great addition to JavaScript.",
    channelId: "channel09",
    uploader: "user09",
    views: 5800,
    likes: 495,
    dislikes: 6,
    uploadDate: "2024-07-22",
    comments: [
      {
        commentId: "comment09",
        userId: "user06",
        text: "Typed code saves time. Great vid!",
        timestamp: "2024-07-23T12:15:00Z"
      }
    ]
  },
  {
    videoId: "video10",
    title: "Build a REST API with Express",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnailUrl: "https://img.youtube.com/vi/pKd0Rpw7O48/hqdefault.jpg",
    description: "A complete Express.js REST API from scratch.",
    channelId: "channel10",
    uploader: "user10",
    views: 11200,
    likes: 860,
    dislikes: 11,
    uploadDate: "2024-06-25",
    comments: [
      {
        commentId: "comment10",
        userId: "user07",
        text: "I built my own API with this!",
        timestamp: "2024-06-26T15:00:00Z"
      }
    ]
  }
];

export default sampleVideos;
