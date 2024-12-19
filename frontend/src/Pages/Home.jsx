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

            <div className="flex flex-wrap justify-center">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            
        </>
    );
}