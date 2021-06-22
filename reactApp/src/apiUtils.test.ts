// __tests__/fetch.test.js

import { argsJsonStringify, addGetEmojiResponseAsBoard } from './apiUtils';

test('Stringifies JSON arguments', () => {
    expect(argsJsonStringify(undefined)).toEqual('');
    expect(argsJsonStringify({ a: 1 })).toEqual('(a:1)');
    expect(argsJsonStringify({ a: 1, b: false })).toEqual('(a:1,b:false)');
});

test('Adds getEmoji responses as a board', async () => {
    expect(addGetEmojiResponseAsBoard([{emoji: 'A'}, {emoji: 'B'}]))
        .toEqual('mutation{createBoard(emojis: ["A","B"]){emojis}}');
    
    const argumentWithMoreThan40Elements = [];
    for (let i = 0; i < 45; i++) {
        argumentWithMoreThan40Elements.push({ emoji: 'A' });
    }
    const correctResponse = 'mutation{createBoard(emojis: ["A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A"]){emojis}}';
    expect(addGetEmojiResponseAsBoard(argumentWithMoreThan40Elements)).toEqual(correctResponse);
});
