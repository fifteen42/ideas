import React from 'react';

type CardProps = {
  status: 'countdown' | 'archive' | 'ship';
  countdownNumber?: number;
  title: string;
  description: string;
  tags: string[];
};

const Card: React.FC<CardProps> = ({
  status,
  countdownNumber,
  title,
  description,
  tags,
}) => {
  const getStatusContent = () => {
    switch (status) {
      case 'countdown':
        return (
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center bg-fat-ideas"
            style={{
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderColor: '#2bbc8a',
              borderStyle: 'solid',
            }}
          >
            <span className="text-2xl font-bold text-fat-ideas">{countdownNumber}</span>
          </div>
        );
      case 'archive':
        return (
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center bg-gray-400"
            style={{
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderColor: '#808080',
              borderStyle: 'solid',
            }}
          >
            📦
          </div>
        );
      case 'ship':
        return (
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderColor: '#f2c57c',
              borderStyle: 'solid',
            }}
          >
            🚀
          </div>
        );
    }
  };

  return (
    <div
      className="w-64 h-32 p-4 border-2 border-black rounded-md shadow-md flex items-start justify-between"
    >
      <div className="w-14">
        {getStatusContent()}
      </div>
      <div className="w-32 flex flex-col justify-between ml-4 flex-grow">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="space-x-2 space-y-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded"
            >
              {/* add spaces behind tags and bold tags */}
              #{tag}{' '}
            </span>
          ))}
        </div>
      </div>
    </div>

  );  
};

export default Card;