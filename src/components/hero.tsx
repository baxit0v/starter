import { Container } from "./ui/container"

export const Hero = () => {
    return (
        <section className="bg-neutral-200 pt-16 pb-20">
            <Container>
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-semibold mb-4">
                        Double click text to change it
                    </h1>
                    <p className="text-2xl mb-8">
                        To style this paragraph
                        , select this paragraph, then edit its styles in the
                        Style tab
                        on the right side of the Designer.
                    </p>
                    <button className="bg-white px-5 py-4 rounded-2xl text-sm">
                        Edit this link in the settings tab in the right panel
                    </button>
                </div>
                <div>
            
                </div>
            </Container>
        </section>
    )
}
