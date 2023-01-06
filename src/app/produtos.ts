export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;    
}

export const produtos: IProduto [] = [
    { id: 1, descricao: "Bateria C IBANEZ X", preco: 950.00, descricaoPreco: "À vista no PIX", imagem: "./assets/bateriaibanez.jpeg", quantidadeEstoque: 14 },
    { id: 2, descricao: "Bateria MAPEX", preco: 810.50, descricaoPreco: "À vista no PIX", imagem: "./assets/bateriamapex.jpg", quantidadeEstoque: 10 },
    { id: 3, descricao: "Bateria X PRO", preco: 600.99, descricaoPreco: "À vista no PIX", imagem: "./assets/bateriaxpro.jpeg", quantidadeEstoque: 10 },
    { id: 4, descricao: "Bateria X PRO UPPER", preco: 1099.99, descricaoPreco: "À vista no PIX", imagem: "./assets/bateriaxproupper.jpeg", quantidadeEstoque: 10 },
    { id: 5, descricao: "Bateria X PRO VINHO", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/bateriaxprovinho.jpeg", quantidadeEstoque: 10 },
    { id: 6, descricao: "Guitarra ESP LTD M-400R", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/guitarraespltd.jpg", quantidadeEstoque: 10 },
    { id: 7, descricao: "Guitarra Starocaster", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/guitarrastarocaster.jpeg", quantidadeEstoque: 10 },
    { id: 8, descricao: "Guitarra Memphis", preco: 8449.99, descricaoPreco: "À vista no PIX", imagem: "./assets/guitarramemphis.jpeg", quantidadeEstoque: 10 },
    { id: 9, descricao: "Guitarra EG-810-BK", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "./assets/guitarrapreta.jpeg", quantidadeEstoque: 10 },
    { id: 10, descricao: "Guitarra EG-810-RD", preco: 3500, descricaoPreco: "À vista no PIX", imagem: "./assets/guitarravermelha.jpeg", quantidadeEstoque: 10 },
    { id: 11, descricao: "Piano Ritmuller RS150", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "./assets/RITMULLER.jpeg", quantidadeEstoque: 10 },
    { id: 12, descricao: "Piano Hoffman", preco: 4000, descricaoPreco: "À vista no PIX", imagem: "./assets/hoffman.jpeg", quantidadeEstoque: 10 },
    { id: 13, descricao: "Piano Yamaha C1", preco: 5200, descricaoPreco: "À vista no PIX", imagem: "./assets/yamahac1.jpg", quantidadeEstoque: 10 },
    { id: 14, descricao: "Piano Yamaha X2", preco: 1050, descricaoPreco: "À vista no PIX", imagem: "./assets/yamahax2.png", quantidadeEstoque: 10 },
    { id: 15, descricao: "Piano Yamaha C7", preco: 17159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/yamahac7.jpg", quantidadeEstoque: 10 },
]