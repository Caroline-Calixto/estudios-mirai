import ButtonPrimary from "../Button"

export const HeaderSection = () => {
    const bannerContainer = {
        display: 'flex',
        justifyContent: 'center',
        backgroundImage:'url("./public/banner.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh'
    }

    const bannerContent = {
        color: 'white',
        width: '700px',
        display: 'flex',
        flexDirection: 'column' as any,
        textAlign: 'center' as any,
        alignItems : 'center',
        marginTop: '128px',
        marginBottom: '64px'
    };

    const textContent = {
        margin: '16px'
    }

    return (
        <section style={bannerContainer}>
            <div style={bannerContent}>
                <h1 style={textContent}>Transformando Ideias em Experiências Digitais</h1>
                <p style={textContent}> Somos apaixonados por transformar ideias em experiências digitais memoráveis. Com uma equipe talentosa de designers e desenvolvedores, estamos prontos para dar vida à sua visão, destacando sua marca e proporcionando resultados excepcionais. Explore nosso portfólio e descubra como podemos elevar sua presença online a um nível totalmente novo. </p>
                <ButtonPrimary name="SAIBA MAIS" color="#04B162" />
                {/* TODO: Adicionar redirect para section de saiba mais */}
            </div>
        </section>
    )
}