

export default function Layout( { children }){
    return (
        <div className="flex h-screen justify-center items-center lg:w-2/5 m-auto md:w-2/4 sm:w-full">
           {children}
        </div>
    )
}