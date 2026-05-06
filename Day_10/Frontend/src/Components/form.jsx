import React from "react";

export const Form=()=>{

    const data = [{
        name:'userName',
        type:'text',
        placeholder:'Enter your name',
        id:'username',
        label: 'Username',
    },
    {
        name:'age',
        type:'number',
        placeholder:'enter your age',
        label:'Age',
        id:'age'      
    },
    {  
        name:'married',
        type: 'select',
        label: 'Married',
        id:'married',
        options:[
            {label:"yes",value:true},
            {label:"No", value:false},
        ]
    },
    {
        name:'organization',
        type: 'text',
        placeholder: 'Please enter your organization',
        label: 'Organization',
        id: 'organization',
    },
    {
        name:'hobbies',
        type:'checkbox',
        label:'Hobbies',
        id:'hobbies',
        options:[
            {label:'Read',value:'read'},
            {label:'Play' , value:'play'},
            {label:'Code', value:'code'}
        ]
    }
];

const [form, setForm]=React.useState(()=>{
    return FormData.reduce((acc,curr)=>{
        acc[curr.name]='';
        return acc;
    },{})
})
console.log(form);

const handleSubmit =(e)=>{
    e.preventDefault()
}

const handleChange =(e)=>{
    const {name, value}= e.target;
    setForm((prev)=>{
        return{
            ...prev,
            [name]:value
        }
    })
}
}