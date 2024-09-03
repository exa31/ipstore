'use client'
import { isValidEmail } from "@/helper";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

interface Error {
    name?: boolean;
    email?: boolean;
    password?: boolean;
    confirmPassword?: boolean;
}

export default function Register() {

    const [error, setError] = useState<Error>({});
    const [axiosError, setAxiosError] = useState<boolean>(false);
    const [submitting, setSubmitting] = useState<boolean>(false);

    const router = useRouter();

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        setAxiosError(false);
        const form = new FormData(e.currentTarget);
        const name = form.get('name') as string;
        const email = form.get('email') as string;
        const password = form.get('password') as string;
        const confirmPassword = form.get('confirm password') as string;

        let errors: Error = {};

        if (password !== confirmPassword) {
            errors = { ...errors, confirmPassword: true };
        }

        if (password.length < 6) {
            errors = { ...errors, password: true };
        }

        if (isValidEmail(email) === false) {
            errors = { ...errors, email: true };
        }

        if (email === '') {
            errors = { ...errors, email: true };
        }

        if (name === '') {
            errors = { ...errors, name: true };
        }

        if (name === '' && email === '' && password === '' && confirmPassword === '') {
            errors = { ...errors, name: true, email: true, password: true, confirmPassword: true };
        }

        if (name.length < 3) {
            errors = {
                ...errors, name: true
            }
        }

        if (Object.keys(errors).length > 0) {
            setSubmitting(false);
            setAxiosError(false);
            setError(errors);
            return;
        } else {
            setError({});
            axios.post('/api/auth/register', {
                name,
                email,
                password
            }).then((data) => {
                router.push('/login');
            }).catch((err) => {
                if (axios.isAxiosError(err)) {
                    setAxiosError(true);
                }
                alert('Register failed');
            }).finally(() => {
                setSubmitting(false);
            });
        }


    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <form onSubmit={handleRegister} className="w-full max-w-md">
                    <div className="flex items-center justify-center mt-6">
                        <p className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                            sign up
                        </p>
                    </div>

                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <input type="text" name="name" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="name" />
                    </div>
                    {error.name && <p className="text-red-500 mt-2">Name is required</p>}
                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <input type="email" name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                    </div>
                    {axiosError && <p className="text-red-500 mt-2">Email is already taken</p>}
                    {error.email && <p className="text-red-500 mt-2">Email is required</p>}
                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>
                        <input type="password" name="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                    </div>
                    {error.password && <p className="text-red-500 mt-2">Password is required</p>}
                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>
                        <input type="password" name="confirm password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Confirm Password" />
                    </div>
                    {error.confirmPassword && <p className="text-red-500 mt-2">Password is not match</p>}
                    <div className="mt-6">
                        <button className={`w-full mb-6 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ${submitting && 'btn-disabled'}`}>
                            Sign Up
                        </button>
                        <button onClick={() => router.back()} className={`w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ${submitting && 'btn-disabled'}`}>
                            Back
                        </button>
                        <div className="mt-6 text-center ">
                            <Link href="/login" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                Already have an account?
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
};