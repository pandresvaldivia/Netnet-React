import { ChangeEvent, useState } from 'react';

const useForm = <T = unknown>(initialState: T) => {
	const [values, setValues] = useState<T>(initialState);

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setValues({ ...values, [name]: value });
	};

	return { values, handleOnChange };
};

export default useForm;
