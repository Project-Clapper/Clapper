import { dynamoClient } from '../config/dynamodb.config';

const userPost = async (req, res) => {
  try {
    const { clientId } = req.query;
    const params = {
      TableName: 'ClapperPost',
      FilterExpression: 'createdBy = :value',
      ExpressionAttributeValues: {
        ':value': clientId,
      },
    };
    const { Items: post } = await dynamoClient.scan(params).promise();
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const userCommunities = async (req, res) => {
  try {
    const { clientId } = req.query;
    const params = {
      TableName: 'ClapperUser',
      Key: { clientId },
      ProjectionExpression: 'communities',
    };
    const { Item } = await dynamoClient.get(params).promise();
    res.status(200).json(Item);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { clientId, profileImage, bannerImage } = req.body;
    const params = {
      TableName: 'ClapperUser',
      Key: { clientId },
      UpdateExpression: 'SET profileImage = :profileImage, bannerImage = :bannerImage',
      ExpressionAttributeValues: {
        ':profileImage': profileImage,
        ':bannerImage': bannerImage,
      },
    };
    await dynamoClient.update(params).promise();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export { userCommunities, updateUser, userPost };
