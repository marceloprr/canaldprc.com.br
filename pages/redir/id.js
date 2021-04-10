import redirect from 'nextjs-redirect'

const Redirect = redirect("https://www.youtube.com.br/channel/UCx4Ey4e3LPO4yWpwJNcLInw")

const Redir = () => (
    
    <Redirect>
        <div>Redirecionando</div>
    </Redirect>

)

export default Redir;

export async function getStaticPaths() {
    return { paths: [ {
            params: {
            id: "mainchannel"
            }}],
        fallback: true}

}

export async function getStaticProps({ params }){
    return {
        props: {params}
    }
}

export async function getServerSideProps(context){
    console.log(context)
    return {
        props: {},
    }
}