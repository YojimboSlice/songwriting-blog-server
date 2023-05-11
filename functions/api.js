// import the 'netlify-faunadb' package
const { handler } = require('netlify-faunadb');

// Define your serverless function using the 'handler' method
module.exports = handler(async (event, context) => {
  const posts = [
    {
      id: 1,
      topic: 'Staring At The Blank Page Before You',
      imageUrl:
        'https://i.ibb.co/vkHvVxw/priscilla-du-preez-XZ4-HCx-One-Q-unsplash-2.jpg',
      summary: 'Understanding why I get writers block',
    },
  ];

  // Return the response
  return {
    statusCode: 200,
    body: JSON.stringify({ posts }),
  };
});
