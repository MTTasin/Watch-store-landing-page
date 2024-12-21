import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Category from "../Components/category";
import Card from "../Components/Card";

export default function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <Category />

            <div><h2 className="text-center mt-10 text-3xl font-bold text-white underline armani fertuzy">Best In Store</h2></div>
            <div className="flex flex-wrap gap-2 justify-center">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            
        </>
    );
}