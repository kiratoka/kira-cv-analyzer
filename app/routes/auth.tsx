import { useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router"
import { usePuterStore } from "~/lib/puter"

export const meta = () => ([
    { title: "KiraCV | Auth" },
    { name: "description", content: "Login menggunakan akunmu" }
])

const auth = () => {
    const { isLoading, auth } = usePuterStore()
    const location = useLocation()
    const next = location.search.split('next=')[1]
    console.log(next);
    
    const navigate = useNavigate()


    useEffect(() => {

        if (auth.isAuthenticated) navigate(next)

    }, [auth.isAuthenticated, next])

    return (
        <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
            <div className="gradient-border shadow-lg">
                <section className="flex flex-col gap-8 bg-white rounded-2xl p-10 md:p-20 py-16">
                    <div className="flex flex-col items-center gap-2 text-center">
                        {auth.isAuthenticated ? (
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h3 className="text-2xl sm:text-4xl font-bold ">Apakah kamu akan keluar akun?</h3>
                            </div>
                        ) : (
                            <div>
                                <h1>Selamat Datang</h1>
                                <h2>Login untuk memindai CVmu</h2>
                            </div>
                        )
                        }
                    </div>
                    <div>
                        {isLoading ? (
                            <button className="auth-button animate-pulse">
                                <p>Sedang masuk...</p>
                            </button>
                        ) :
                            <div className="flex justify-center">
                                {auth.isAuthenticated ?
                                    <div className="flex flex-col gap-5 justify-center items-center">
                                        <button className="rounded-full py-4 px-8 cursor-pointer max-md:w-full sm:text-xl font-semibold text-white bg-red-600 hover:bg-red-700" onClick={auth.signOut} >
                                            <p>Log out</p>
                                        </button>
                                        <Link to={"/"} className="primary-gradient hover:primary-gradient-hover rounded-full py-4 px-8 cursor-pointer max-md:w-full font-semibold text-white text-center sm:text-xl">Kembali ke Home</Link>
                                    </div>
                                    :
                                    <button className="primary-gradient hover:primary-gradient-hover rounded-full py-4 px-8 cursor-pointer max-md:w-full font-semibold text-white text-center w-full text-2xl" onClick={auth.signIn} >
                                        <p>Log in</p>
                                    </button>}
                            </div>}
                    </div>
                </section>

            </div>
        </main>
    )
}

export default auth