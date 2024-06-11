import { Router } from "express"; //FEITO
import produtoRouter from "./produto.routes.js";
import movimentacaoRouter from "./movimentacao.routes.js";
import fornecedorRouter from "./fornecedor.routes.js";
import categoriaRouter from "./cotegoria.routes.js";
import produtoFornecedorRouter from "./produto_fornecedor.routes.js";

const router = Router();

router.use('/produtos', produtoRouter);
router.use('/movimentacoes', movimentacaoRouter);
router.use('/fornecedores', fornecedorRouter);
router.use('/categorias', categoriaRouter);
router.use('/produtoFornecedor', produtoFornecedorRouter);


export default router; 
