import { Container } from "./ui/container"


export const Header = () => {
    return (
        <header className="py-6 bg-[#6B6B6B]" >
            <Container className="flex justify-between items-center">
                <h2 className="text-white text-3xl italic">Logo</h2>
                <nav className="flex gap-10">
                    <a className="text-xl text-white hover:text-blue-400" href="#">Home</a>
                    <a className="text-xl text-white hover:text-blue-400" href="#">About</a>
                    <a className="text-xl text-white hover:text-blue-400" href="#">Contact</a>
                </nav>
            </Container>
        </header>
    )
}
