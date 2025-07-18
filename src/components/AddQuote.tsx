// import { useMutation } from "@tanstack/react-query";
// import React from "react";
// import { useForm, type SubmitHandler } from "react-hook-form";

// export interface Quote {
//   id?: number;
//   quote: string;
//   author: string;
// }

// const AddQuote = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isLoading },
//   } = useForm<Quote>();

//   const quoteSubmit: SubmitHandler<Quote> = (data) => {
//     data.id = 1;
//     console.log(data);
//   };

//   const { mutate: quoteAction } = useMutation({
//     mutationFn: async (newQuote: Quote) => {
//       const response = await fetch(`https://dummyjson.com/quotes`);
//     },
//   });

//   return (
//     <React.Fragment>
//       <section className="flex justify-center items-center w-full h-screen">
//         <form onSubmit={handleSubmit(quoteSubmit)}>
//           <input
//             className={`${
//               errors.quote
//                 ? "border border-red-600"
//                 : "border border-y-green-600"
//             } p-2 rounded my-2`}
//             type="text"
//             {...register("quote", {
//               required: { value: true, message: "Quote fields is required!" },
//             })}
//           />
//           <p className="text-sm text-red-600">
//             {errors.quote && <>{errors.quote.message}</>}
//           </p>
//           <input
//             className={`${
//               errors.author
//                 ? "border border-red-600"
//                 : "border border-green-600"
//             } p-2 rounded my-2`}
//             type="text"
//             {...register("author", {
//               required: { value: true, message: "Author fields is required!" },
//             })}
//           />
//           <p className="text-sm text-red-600">
//             {errors.author && <>{errors.author.message}</>}
//           </p>
//           <button
//             disabled={isLoading}
//             type="submit"
//             className="px-2 py-1 bg-blue-400 rounded-2xl"
//           >
//             Add Quote
//           </button>
//         </form>
//       </section>
//     </React.Fragment>
//   );
// };

// export default AddQuote;
