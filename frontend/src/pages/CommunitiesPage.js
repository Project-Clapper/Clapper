import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCommunities } from '../api/community.api';
import Spiner from '../components/Spiner';

const CommunitiesPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [communities, setCommunities] = useState([]);

  const renderCommunities = () => {
    return communities.map((community) => {
      return (
        <div key={community.communityId} className="bg-gray-800 p-5 cursor-pointer rounded w-full">
          <Link to={`c/${community.name}`}>
            <div className="flex">
              <img src={community.image?.location} className="w-20 my-auto rounded" alt="" />
              <div className="ml-5">
                <p className="font-semibold text-2xl">{community.name}</p>
                <p className="text-gray-500">{community.description}</p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  useEffect(() => {
    setLoading(true);
    const fetchCommunities = async () => {
      const { data } = await getCommunities();
      setCommunities(data);
      setLoading(false);
    };
    fetchCommunities();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-black h-screen pt-4">
        <Spiner />
      </div>
    );
  }

  return (
    <div className="bg-black h-screen text-white">
      <div className="container mx-auto">
        <div className="pt-5 flex">{renderCommunities()}</div>
        <Link to="/create-community">
          <div className="mt-5 mb-5 p-5 bg-gray-700 w-56 text-center mx-auto rounded">
            <p className="">Create Communitiy</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CommunitiesPage;
