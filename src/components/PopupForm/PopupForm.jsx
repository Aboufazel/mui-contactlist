
import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
    const { label, ...otherProps } = props;
    return (
        <label>
            {label}
            <input {...otherProps} />
        </label>
    );
});


export default MyInput;