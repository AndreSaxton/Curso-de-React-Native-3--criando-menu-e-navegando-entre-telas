import green from '../../assets/produtores/green.png'
import salad from '../../assets/produtores/salad.png'
import jennyJack from '../../assets/produtores/jenny-jack.png'
import grow from '../../assets/produtores/grow.png'
import potager from '../../assets/produtores/potager.png'

const grearNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            imagem: green,
            distancia: '${grearNumeroAleatorio(1,500)}m',
            estrelas: grearNumeroAleatorio(1,5),
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: '${grearNumeroAleatorio(1,500)}m',
            estrelas: grearNumeroAleatorio(1,5),
        },
        {
            nome: "Jenny Jack Farm",
            imagem: jennyJack,
            distancia: '${grearNumeroAleatorio(1,500)}m',
            estrelas: grearNumeroAleatorio(1,5),
        },
        {
            nome: "Grow",
            imagem: grow,
            distancia: '${grearNumeroAleatorio(1,500)}m',
            estrelas: grearNumeroAleatorio(1,5),
        },
        {
            nome: "potager",
            imagem: potager,
            distancia: '${grearNumeroAleatorio(1,500)}m',
            estrelas: grearNumeroAleatorio(1,5),
        }
    ]
}

export default produtores;