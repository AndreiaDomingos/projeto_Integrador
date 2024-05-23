import { Router } from "express";
import produtoRouter from "./produto.route.js";
import vendasRouter from "./vendas.routes.js";
import fornecedorRouter from "./fornecedor.routes.js";
import comprasRouter from "./compras.routes.js";
import clienteRouter from "./cliente.routes.js";

const router = Router();

router.use('/produtos', produtoRouter);
router.use('/vendas', vendasRouter);
router.use('/fornecedores', fornecedorRouter);
router.use('/compras', comprasRouter);
router.use('/clientes',clienteRouter);

export default router; 
