<h1>API para uma Pizzaria</h1>

<p> Está api tem o intuito de mostrar o fluxo de compras para os produtos em uma pizzaria. </p>

<h2>Endepoints para o consumo da API</h2>

<h3>GETS</h3>
<p>"/users" -> Lista todos os usuarios cadastrados </p>
<p>"/categories" -> Lista todas as categorias cadastradas </p>
<p>"/products" -> lista todos os produtos cadastrados  </p>
<p>"/productsByCategory/:category_id" -> Consultar um produto pelo ID da categoria  </p>
<p"/orders" -> Lista com os registros das mesas que tem solicitações  </p>
<p>"/ordersFinished" -> Lista com os pedidos finalizados  </p>
<p>"/orderItem" -> lista com os items que estão registrados por mesas </p>

<h3>POSTS</h3>
<p>"/users" -> Registrar um novo usuario </p>
<p>"/category" -> Registrar uma nova categoria </p>
<p>"/product" -> registrar um novo produto  </p>
<p>"/userDetail" -> Consultar um detalhe de uma dos usuarios  </p>
<p"/order" -> Abrir um anova ordem de produto.  </p>
<p>"/order/sendOrder" -> Finalizar o pedido e abrir uma nova ordem para cozinha  </p>
<p>"/orderItem" -> Consultar uma ordem especifica </p>
<p>"/orderDetail" ->COnsultar os detalhes de uma ordem especifica </p>
<p>"/order/close" ->Fechar um pedido de ordem  </p>

<h3>PUT</h3>
<p>"/user/:id" -> Atualizar  um usuario </p>
<p>"/category/:id" -> Atualizar uma categoria </p>
<p>"product/:id" -> Atualizar um produto  </p>
<p>"/order/:id" -> Atualizar uma ordem  </p>

<h3>DELETE</h3>
<p>"/user/:id" -> Excluir  um usuario </p>
<p>"/order/:id" -> Excluir uma ordem  </p>
<p>"/orderItem/:id" -> Excluir uma ordem  </p>
