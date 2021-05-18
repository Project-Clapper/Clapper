import { dynamoClient } from '../config/dynamodb.config';

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
    console.log(clientId);
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

export { userCommunities, updateUser };
