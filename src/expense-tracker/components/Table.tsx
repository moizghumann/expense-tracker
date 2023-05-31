interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string
}

// expenses property is an array of Expense objects
/* const expenseData: Props = {
    expenses: [
      {
        id: 1,
        description: "Groceries",
        amount: 50,
        category: "Food"
      },
      {
        id: 2,
        description: "Utility Bill",
        amount: 100,
        category: "Bills"
      }
    ]
  }; */
interface Props {
    expenses: Expense[] // expenses is an array containing Expense
    onDelete: (id: number) => void
}

const Table = ({ expenses, onDelete }: Props) => {
    return (
        <>
            <div className="mb-3"></div>

            <table className="table table-bordered ">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => <tr key={expense.id}>
                        <td>{expense.description}</td>
                        <td>${(expense.amount).toFixed(2)}</td>
                        <td>{expense.category}</td>
                        <td><button className="btn btn-outline-danger" onClick={() => { onDelete(expense.id) }} >Delete</button></td>
                    </tr>)}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>
                            ${expenses.reduce((accumulator, expense) => {
                                return accumulator + expense.amount
                            }, 0).toFixed(2)}
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default Table