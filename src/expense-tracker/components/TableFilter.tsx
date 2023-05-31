import categories from "../categories";


interface Props {
    onSelect: (categories: string) => void
}

const TableFilter = ({ onSelect }: Props) => {
    return (
        <select className="form-select" onChange={(event) => onSelect(event.target.value)}>
            <option value="">All categories</option>
            {categories.map(category => <option key={category} value={category} >{category}</option>)}

        </select>

    )
}

export default TableFilter