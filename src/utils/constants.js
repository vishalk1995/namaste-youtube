const GOOGLE_API_KEY = '';
export const YOUTUBE_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key=' +
  GOOGLE_API_KEY;

export const DEFAULT_PROFILE_IMG =
  'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png';

export const YOUTUBE_SEARCH_API =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const LIVE_CHAT_LIMIT = 100;

export const commentsData = [
  {
    name: 'John Doe',
    comment: 'This is a comment',
    replies: [
      {
        name: 'Vishal',
        comment: '2nd level comment',
        replies: [
          {
            name: '3rd level',
            comment: '3rd level comment',
            replies: [],
          },
          {
            name: '3rd level',
            comment: '3rd level comment 2',
            replies: [],
          },
          {
            name: '3rd level',
            comment: '3rd level comment 3',
            replies: [
              {
                name: '4th level',
                comment: '4th level comment',
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: 'level 2',
        comment: 'This is a comment in level 2',
        replies: [],
      },
    ],
  },
  {
    name: 'Akshay',
    comment: 'awesome',
    replies: [],
  },
  {
    name: 'Elon musk',
    comment: 'I am in',
    replies: [],
  },
  {
    name: 'Modi',
    comment: 'full support',
    replies: [],
  },
];
