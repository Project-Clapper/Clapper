import { dynamoClient } from '../config/dynamodb.config';
import { v4 as uuidv4 } from 'uuid';

const createComment = async (req, res) => {
  try {
    const { postId, text, clientId, username, profileImage } = req.body;
    console.log(profileImage);

    const params = {
      TableName: 'ClapperComment',
      Item: {
        commentId: uuidv4(),
        text,
        postId,
        createdAt: new Date().toISOString(),
        clientId,
        username,
        profileImage,
      },
    };

    await dynamoClient.put(params).promise();

    const params2 = {
      TableName: 'ClapperPost',
      Key: { postId },
      UpdateExpression: 'SET commentCount = commentCount + :value',
      ExpressionAttributeValues: {
        ':value': 1,
      },
    };

    await dynamoClient.update(params2).promise();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export { createComment };
