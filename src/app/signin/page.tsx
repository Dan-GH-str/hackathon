import LoginForm from "@/components/pages/signin/LoginForm";

export default async function LoginPage() {
  return (
    <>
      <section className="py-8 bg-ct-blue-600 min-h-screen grid place-items-center font-sans ">
        <div className="w-3/6">
          <h1 className="text-4xl xl:text-6xl text-center text-sky-500 dark:text-sky-400 mb-4">
            Welcome to our Project!
          </h1>
          <h2 className="text-lg text-center text-slate-500 dark:text-slate-400 leading-6 truncate">
            Sign Up To Get Started!
          </h2>
          <LoginForm />
        </div>
      </section>
    </>
  );
}