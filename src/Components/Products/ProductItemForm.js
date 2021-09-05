import classes from './ProductItemForm.module.css';
import Button from '../UI/Button';
import Input from '../UI/Input';

const ProductItemForm = (props) => {
	return (
		<form className={classes.form}>
			<Input
				label="Amount"
				input={{
					id: 'amount_' + props.id,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<Button>+ Add</Button>
		</form>
	);
};
export default ProductItemForm;
