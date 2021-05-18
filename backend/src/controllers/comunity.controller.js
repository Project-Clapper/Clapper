import { v4 as uuidv4 } from 'uuid';
import { dynamoClient } from '../config/dynamodb.config';
import { handleThrow } from '../utils/throw.utils';
import moment from 'moment';

const createCommunity = async (req, res) => {
  // TODO - check is the name already exist!
  try {
    const { name, description, image, banner, createdBy } = req.body;

    if (name.length === 0)
      return handleThrow(
        'NameNotValidException',
        'NameNotValidException',
        'Community name must be at least 4 characters.'
      );

    const communityId = uuidv4();

    const community = {
      communityId,
      name,
      description,
      image,
      banner,
      followers: [createdBy],
      createdBy,
      createdAt: new Date().toISOString(),
    };

    const params = {
      TableName: 'ClapperCommunity',
      Item: community,
    };

    await dynamoClient.put(params).promise();

    // push community in user comunities list
    const communityData = {
      communityId,
      name,
    };

    const params2 = {
      TableName: 'ClapperUser',
      Key: { clientId: createdBy },
      UpdateExpression: 'SET communities = list_append(communities, :attrValue)',
      ExpressionAttributeValues: {
        ':attrValue': [communityData],
      },
    };

    await dynamoClient.update(params2).promise();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const findCommunityByName = async (req, res) => {
  try {
    const { name } = req.query;

    const params = {
      TableName: 'ClapperCommunity',
      FilterExpression: '#name = :name',
      ExpressionAttributeNames: {
        '#name': 'name',
      },
      ExpressionAttributeValues: {
        ':name': name,
      },
      // FilterExpression: 'begins_with(communityName, :communityName)',
      // ExpressionAttributeValues: {
      //   ':communityName': name,
      // },
    };
    const { Items } = await dynamoClient.scan(params).promise();

    const { communityId } = Items[0];

    // find community posts
    const params2 = {
      TableName: 'ClapperPost',
      FilterExpression: 'communityId = :communityId',
      ExpressionAttributeValues: {
        ':communityId': communityId,
      },
    };
    const { Items: posts } = await dynamoClient.scan(params2).promise();
    Items[0].createdAt = moment(Items[0].createdAt).format('LL');

    const data = { community: Items[0], posts };
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const joinCommunity = async (req, res) => {
  try {
    const { clientId, communityId, communityName } = req.body;

    // add to community table
    // const user = {
    // clientId,
    // username,
    // profileImage,
    // joinAt: new Date().toISOString(),
    // };

    const params = {
      TableName: 'ClapperCommunity',
      Key: { communityId },
      UpdateExpression: 'SET followers = list_append(followers, :attrValue)',
      ExpressionAttributeValues: {
        ':attrValue': [clientId],
      },
    };
    await dynamoClient.update(params).promise();

    // add to user table
    const params2 = {
      TableName: 'ClapperUser',
      Key: { clientId },
      UpdateExpression: 'SET communities = list_append(communities, :attrValue)',
      ExpressionAttributeValues: {
        ':attrValue': [
          {
            communityId,
            name: communityName,
          },
        ],
      },
    };
    await dynamoClient.update(params2).promise();
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getCommunities = async (req, res) => {
  try {
    const params = {
      TableName: 'ClapperCommunity',
    };
    const { Items } = await dynamoClient.scan(params).promise();
    res.status(200).json(Items);
  } catch (error) {
    console.log(error);
    res.status(4000).json(error);
  }
};

export { createCommunity, findCommunityByName, joinCommunity, getCommunities };
