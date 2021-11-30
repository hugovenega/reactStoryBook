import React from 'react';

export interface CardComponentProps {
  title: string,
  text: string,
  image: string,
  altImage?: string,
  hashtags: string[]
}

function createSpanHashtags(hashtags: string[]) {
  return hashtags.map((hashtag) => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hashtag}</span>)
}

export const CardComponent =({title, text, image, altImage, hashtags, ...props}: CardComponentProps) => {
  return(
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={image} alt={altImage} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">
        {text}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {createSpanHashtags(hashtags)}
    </div>
  </div>
  )
};