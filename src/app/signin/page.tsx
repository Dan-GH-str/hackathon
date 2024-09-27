import LoginForm from "@/components/pages/signin/LoginForm";

export default async function LoginPage() {
  return (
    <>
      <section className="py-8 bg-ct-blue-600 min-h-screen grid place-items-center font-sans ">
        <div className="w-3/6">
          <h2 className="text-4xl text-center text-black font-bold mb-8">
            Регистрация
          </h2>
          <LoginForm />
        </div>
      </section>
    </>
  );
}