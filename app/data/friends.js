var friends = [
  {
    name: "Binod Poudel",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QKk_fHWWPWf6K1a03W0KnMbu0SUKdQfQTHRH_exHewcvL3Zd",
    scores: [
      "5",
      "1",
      "4",
      "4",
      "5",
      "1",
      "2",
      "5",
      "4",
      "1"
    ]
  },
  {
    name: "Surya Sapkota",
    photo: "data:image/jpeg;base64,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",
    scores: [
      "4",
      "2",
      "5",
      "1",
      "3",
      "2",
      "2",
      "1",
      "3",
      "2"
    ]
  },
  {
    name: "Samrat Acharya",
    photo: "https://avatars3.githubusercontent.com/u/34099635?s=400&v=4",
    scores: [
      "5",
      "2",
      "2",
      "2",
      "4",
      "1",
      "3",
      "2",
      "5",
      "5"
    ]
  },
  {
    name: "Rohit Chetri",
    photo: "https://media.licdn.com/dms/image/C5603AQErin-kwRHaQw/profile-displayphoto-shrink_800_800/0?e=1550707200&v=beta&t=pYxubpPRY8eb4yC3B5kcZPzk9-ciRezsdfuLLzv5Dw8",
    scores: [
      "3",
      "3",
      "4",
      "2",
      "2",
      "1",
      "3",
      "2",
      "2",
      "3"
    ]
  },
  {
    name: "Madison Grimes",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34WcGBvkToIcfgLCUPvY0PIg-02z7cAzbNwlHRJssyOGxlwrDiw",
    scores: [
      "4",
      "3",
      "4",
      "1",
      "5",
      "2",
      "5",
      "3",
      "1",
      "4"
    ]
  },
  {
    name: "President",
    photo: "data:image/jpeg;base64,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",
    scores: [
      "4",
      "4",
      "2",
      "3",
      "2",
      "2",
      "3",
      "2",
      "4",
      "5"
    ]
  }

];


module.exports = friends;