import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

const Input = forwardRef(function Input({ className, isValid = true, appearance = 'text', ...props }, ref) {
	return (
		<input
			{...props}
			ref={ref}
			className={cn(className, {
				[styles['invalid']]: !isValid,
				[styles['input-title']]: appearance === 'title',
				[styles['input']]: appearance == 'text'
			})}
		/>
	);
});

export default Input;
