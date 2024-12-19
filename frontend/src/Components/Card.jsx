import w1 from "./../assets/img/w1.png"


export default function Card() {  
    return (
        <>

<div className="flex justify-center items-center min-h-screen">
    <div className="max-w-[720px] mx-auto">
        

        <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden text-gray-700 bg-red-500 h-full w-full rounded-none shadow-none bg-clip-border">
                
            </div>
            <div className="p-6">
                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    UI/UX Review Check
                </h4>
                <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                    Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
                </p>
            </div>
            <div className="flex items-center justify-between p-6">
                <div className="flex items-center -space-x-3">
                    <img alt="natali craig"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10" />
                    <img alt="Tania Andrew"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10" />
                </div>
                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                    January 10
                </p>
            </div>
        </div>
    </div>
</div>


        </>
    )
}