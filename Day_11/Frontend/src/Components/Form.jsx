import React from 'react';

export const Form = ({ formData, handleSubmit }) => {

    const [form, setForm] = React.useState(() => {
        return formData.reduce((acc, field) => {
            acc[field.name] = '';
            return acc;
        }, {});
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(form);
    };

    return (
        <form
            onSubmit={onSubmit}
            style={{
                border: "1px solid red",
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                padding: '20px'
            }}
        >
            {
                formData.map((el, i) => (
                    <div key={i}>
                        <label htmlFor={el.name}>{el.label}</label>

                        <input
                            type={el.type}
                            name={el.name}
                            id={el.name}
                            placeholder={el.placeholder}
                            value={form[el.name]}
                            onChange={handleChange}
                            required={el.required}
                        />
                    </div>
                ))
            }

            <button type="submit">Submit</button>
        </form>
    );
};