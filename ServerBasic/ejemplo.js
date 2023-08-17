
const http=require('http')

const url=require('url')
const PORT=3000

const server=http.createServer((req,res)=>{

    console.log(req.url)
    let urlParsed = url.parse(req.url,true)
    console.log(urlParsed)
    switch (urlParsed.pathname){
        case '/':
            res.end('hola, soy un servidor desarrollado con el modulo http')
            break;
        case '/contacto':
            res.end('CONTACTO')
            break;
        case '/datos':
            res.end('DATOS')
            break;
        default:
            res.end('Execute order 66')
            break;
    }
})

server.listen(PORT,()=>{
    console.log(`server corriendo en puerto ${PORT}`)
})