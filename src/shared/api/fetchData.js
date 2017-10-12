const data = {
  todos: [
    {
      id: 1,
      text: 'Learn SSR with React',
      completed: false,
    },
    {
      id: 2,
      text: 'Understand SSR with React',
      completed: false,
    }      
  ],
};

const getInternalData = () => data;

const fetchData = (callback) => (
  setTimeout(() => (callback(getInternalData())), 500)
);

export default fetchData;
