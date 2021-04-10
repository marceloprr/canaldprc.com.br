export default function Redir(data){
    
    return []
}

export async function getServerSideProps(context){
    let url
    if (context.query.id == "mainchannel"){
        url = "https://www.youtube.com/channel/UCx4Ey4e3LPO4yWpwJNcLInw"
    }else{
        url = `https://www.youtube.com/watch?v=${context.query.id}`
    }
    return {
        redirect: {
            destination: url,
            permanent: false
        }
    }
}