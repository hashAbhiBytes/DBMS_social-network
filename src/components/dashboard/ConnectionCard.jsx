import React from 'react';
import { Link } from 'react-router-dom';

const ConnectionCard = ({ connection }) => {
  // Calculate common interests to display
  const commonInterests = connection.commonInterests || [];
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <Link to={`/profile/${connection.id}`} className="block">
        <div className="p-4">
          <div className="flex items-center mb-3">
            <img 
              src={connection.profilePhoto || '/assets/images/default-avatar.png'} 
              alt={connection.fullName} 
              className="w-12 h-12 rounded-full object-cover mr-3"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{connection.fullName}</h3>
              <p className="text-sm text-gray-600">{connection.profession || connection.location}</p>
            </div>
          </div>
          
          <div className="mt-2">
            <p className="text-xs text-gray-500 mb-1">Common interests</p>
            <div className="flex flex-wrap gap-1">
              {commonInterests.slice(0, 3).map((interest, index) => (
                <span 
                  key={index} 
                  className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                >
                  {interest}
                </span>
              ))}
              {commonInterests.length > 3 && (
                <span className="text-xs text-blue-600">+{commonInterests.length - 3} more</span>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex border-t border-gray-200">
          <Link 
            to={`/profile/${connection.id}`}
            className="flex-1 py-2 text-center text-sm font-medium text-blue-600 hover:bg-blue-50"
          >
            View Profile
          </Link>
          <Link 
            to={`/messages/${connection.conversationId || ''}`}
            className="flex-1 py-2 text-center text-sm font-medium text-green-600 hover:bg-green-50 border-l border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            Message
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default ConnectionCard;