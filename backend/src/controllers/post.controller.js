import { v4 as uuidv4 } from 'uuid';
import { dynamoClient } from '../config/dynamodb.config';

const createPost = async (req, res) => {
  try {
    const { title, body, createdBy, username, profileImage, communityId } = req.body;

    console.log(profileImage);

    const post = {
      postId: uuidv4(),
      title,
      body,
      createdBy,
      username,
      profileImage,
      vote: [],
      createdAt: new Date().toISOString(),
      communityId,
    };
    const params = {
      TableName: 'ClapperPost',
      Item: post,
    };
    await dynamoClient.put(params).promise();

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const votePost = async (req, res) => {
  try {
    const { postId, clientId, vote } = req.body;

    const params = {
      TableName: 'ClapperPost',
      Key: { postId },
    };

    const { Item } = await dynamoClient.get(params).promise();

    // update user vote
    let indexToUpdate = -1;
    Item.vote.map((record, index) => {
      if (record.clientId === clientId) indexToUpdate = index;
    });

    if (indexToUpdate !== -1) {
      const params2 = {
        TableName: 'ClapperPost',
        Key: { postId },
        UpdateExpression: `SET vote[${indexToUpdate}] = :vote`,
        ExpressionAttributeValues: {
          ':vote': {
            clientId,
            vote,
          },
        },
      };

      await dynamoClient.update(params2).promise();
      return res.sendStatus(200);
    }

    // user not vote yet
    const params3 = {
      TableName: 'ClapperPost',
      Key: { postId },
      UpdateExpression: `SET vote = list_append(vote, :vote)`,
      ExpressionAttributeValues: {
        ':vote': [
          {
            clientId,
            vote,
          },
        ],
      },
    };

    await dynamoClient.update(params3).promise();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export { createPost, votePost };
