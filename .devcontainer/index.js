import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('Type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;
// take a sentence as input
  // reverse the input sentence
  // the start of the sentence must start with a capital
  // for javascript
const reverseSentence = (sentence) => {
    const reversed = sentence.split('').reverse().join('');
    const capitalized = reversed.charAt(0).toUpperCase() + reversed.slice(1);
    return capitalized;
};

const reversedSentence = reverseSentence(markdown);
console.log(reversedSentence);
const data = [
    { name: 'John' },
    { name: 'Jane' },
    { name: 'Bob' },
];

const names = data.map(item => item.name);
console.log(names);
const nestedData = [
    [
        { name: 'John' },
        { name: 'Jane' },
        { name: 'Bob' },
    ],
    [
        { name: 'Alice' },
        { name: 'Eve' },
        { name: 'Charlie' },
    ],
];

const names = nestedData.flatMap(array => array.map(item => item.name));
console.log(names);
