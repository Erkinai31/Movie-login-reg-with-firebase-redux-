
// import {useForm} from 'react-hook-form'

// const Form = ({title,handleClick}) => {


//     let  {
//         register,
//         formState: { errors },
//         handleSubmit,
//         reset,
//       } = useForm();
    
//       function onSubmit(data) {
//         console.log(data);
//         handleClick(data)
//         reset();
//       }

//     return (
//         <div>
//           <h1>hello</h1>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                <input
//                 placeholder="email"
//                 {...register("mail", {
//                     required: "mail must not be empty",
//                     pattern: {
//                       value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//                       message: "The email you entered isn’t connected to an account.",
//                     },
//                 })}
//             />
//             <div>
//               {errors?.mail && (
//                 <p style={{ color: "red" }}>{errors?.mail?.message}</p>
//               )}
//             </div>
//             <input
//                 placeholder="password"
//                 {...register("password", {
//                     required: "password must not be empty",
//                     pattern: {
//                       value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/,
//                       message:
//                         "The password you’ve entered is incorrect.",
//                     }
//                   })}
//             /> 
//             <div>
//               {errors?.password && (
//                 <p style={{ color: "red"}}>{errors?.password?.message}</p>
//               )}
//             </div>
//             <div>
//             <button
//                 onSubmit={handleClick(onSubmit)}
//             >
//                 {title}
//             </button> 
//                 </div>
//             </form>
//         </div>
//     )
// }

// export {Form}





import {useState} from 'react';

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
            />
            <button
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </button>
        </div>
    )
}

export {Form}