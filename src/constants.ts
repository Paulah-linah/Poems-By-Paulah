import { Poem } from './types';

export const POEMS: Poem[] = [
  {
    id: '1',
    title: 'Tradition',
    description: 'Girls, boys, have turned down',
    content: `
The way of life passed down,
One generation to another,
These days has scaled down,
Girls, boys, have turned down,
The ancestors teardown.`,
    imageUrl: '/images/tradition.jfif',
    date: 'March 17, 2026'
  },
  {
    id: '2',
    title: 'Peer Influence',
    description: 'Do you do what others do?',
    content: `Do you do what others do?
They follow, you follow.
What the heck! I can't be old school.
It doesn't look cool,
These spread from friend to friend,
And all that descends.`,
    imageUrl: '/images/peer-influence.jfif',
    date: 'March 17, 2026'
  },
  {
    id: '3',
    title: 'Social Validation',
    description: 'Comments, likes, shares',
    content: `
Do you approve?
More modern, more praise,
More traditional, more shame,
More comments, likes and shares,
More approval,
The more they repeat,
The more they believe.
Trends grow louder, 
Originality fades away.`,
    imageUrl: '/images/social-validation.jfif',
    date: 'March 17, 2026'
  }
];
