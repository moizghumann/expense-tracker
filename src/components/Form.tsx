import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { categories } from '../App';

const schema = z.object({
    description: z.string().min(3).max(20),
    amount: z.number().min(1),
    category: z.enum(categories)
});


type FormData = z.infer<typeof schema>;

interface FormProps {
    onSubmit: (data: FormData) => void;
}

const Form = ({ onSubmit }: FormProps) => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text"
                        {...register('description')}
                        className="form-control"
                        id="description" />
                    {errors.description &&
                        <span>{errors.description.message}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input type="number"
                        {...register('amount', { valueAsNumber: true })}
                        className="form-control"
                        id="amount" />
                    {errors.amount &&
                        <span>{errors.amount.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select className="form-control"
                        id="category"

                        // When a user selects an option from the <select> element, the selected option's value will be assigned to the category field in the form data. The connection between the selected option value and the category field in the form data is established by the register function.

                        // whatever will be selected, will be assigned to category field in formdata
                        {...register('category')}>

                        {/* select only pre defined categories in the form which exist in category field in formdata */}
                        <option value="">All categories</option>
                        {categories.map((categories) => <option key={categories} value={categories} >{categories}</option>)}
                    </select>
                </div>

                <div className="mb-3"></div>
                <button type="submit" className="btn btn-primary" >Add Item</button>
                <div className="mb-5"></div>

            </form>
        </>
    )
}

export default Form