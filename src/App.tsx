import { useState } from 'react'
import Table from './components/Table'
import Form from './components/Form'
import produce from 'immer';
import TableFilter from './components/TableFilter';

export const categories = ['groceries', 'utility', 'entertainment'] as const

const App = () => {

  const [changeCategory, setChangeCategory] = useState("");
  const [expenseList, setExpenseList] = useState([{
    id: 1,
    description: 'milk',
    amount: 4,
    category: 'groceries'
  }, {
    id: 2,
    description: 'dish washer',
    amount: 2,
    category: 'utility'
  }, {
    id: 3,
    description: 'tv',
    amount: 1,
    category: 'entertainment'
  }]);

  const visibleExpenses = changeCategory ? expenseList.filter(e => e.category === changeCategory) : expenseList

  const handleDelete = (id: number) => {
    setExpenseList(produce(draft => {
      const index = draft.findIndex(expense => expense.id === id);
      if (index !== -1) {
        draft.splice(index, 1);
      }
    })
    );
  }


  return (
    <>
      <Form onSubmit={expense => setExpenseList([...expenseList, { ...expense, id: expenseList.length + 1 }])} />
      <TableFilter onSelect={(category) => setChangeCategory(category)} />
      <Table expenses={visibleExpenses}
        onDelete={handleDelete}
      /* onDelete={(id) => setExpenseList(expenseList.filter(expense => expense.id !== id))} */
      />
    </>


  )
}

export default App