import { UserIcon } from '@heroicons/react/solid';
import moment from 'moment';

const Comment = ({ comment }) => {
  const { username, createdAt, text, imageProfile } = comment;

  return (
    <div className="box-border pl-2">
      <div className="border-l-2 border-gray-400">
        <div className="">
          <div className="p-0">
            <div>
              <div className="pl-4 box-border w-full">
                <div className="">
                  <div className="self-start inline-block flex-grow-0 flex-shrink-0">
                    <div className="flex">
                      {imageProfile?.location && (
                        <img className="h-5 w-5 rounded-full" src={imageProfile.location} alt="" />
                      )}
                      {!imageProfile?.location && (
                        <UserIcon className="h-5 w-5 rounded-full object-cover border-2 border-gray-600 bg-gray-800" />
                      )}
                      <p className="ml-2 text-sm text-gray-400">
                        <span className="font-semibold underline text-gray-200 cursor-pointer">
                          t/{username}
                        </span>
                        <span> - {moment(createdAt).fromNow()}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="pl-4 text-gray-100">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
