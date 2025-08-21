import { Container } from "./ui/container"

export const Step = () => {
    const steps = [1, 2, 3]
    return (
        <section className="bg-[#EBEBEB] py-52 mb-100">
            <Container className="flex justify-between gap-10">
                {steps.map((item) => (
                    <div className="bg-white rounded-2xl shadow-2xl shadow-[#968e8e] p-20" key={item}>
                        <h2 className="step-title">Step {item}</h2>
                        <p className="text-blue-600 sm:text-yellow-300 md:text-green-500 lg:text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            In facere alias et dicta totam exercitationem maiores.
                            Alias consectetur earum voluptatibus perferendis repudiandae,
                            est ipsum deserunt id hic? Saepe, cum maxime!
                        </p>
                    </div>
                ))}
            </Container>
        </section>
    )
}
