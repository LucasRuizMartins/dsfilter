# DSFilter: React + TypeScript + Vite

  

Projeto criado para o desafio do Curso Formação do desenvolvedor Moderno, da DevSuperior com Nelio Alves
  
[Design Figma do projeto](https://www.figma.com/file/s21JDtjv3cRyUfetFYAzIJ/DSFilter?type=design&node-id=1-2&mode=design&t=uY1mdcm7QE6L3JLo-0) 
 
 [Linkedin](https://www.linkedin.com/in/lucas-ruiz-martins/)

  

## Sobre o projeto

  

Objetivo do exercicio é o estudo da utilização de variaveis e eventos de estados global. Em especial o envio de Funções como parametros  

  

-exemplo de código de envio de função como parametro e variavel de escopo Global.
  

```js
export  function  ListingBody() { (...) 
function  handleFilter(min:number, max:number) {
	setQueryParams({...queryParams, min :  min, max :max});
}
return (
	<>
	<Filter  onSearch={handleFilter}  />
	<div  className="dsf-container">
		<div  className="card-list">
			{product.map((product) => (
			<ProductCard  key={product.id}  product={product}/>
			))}
		</div>
	</div>
	
Filter: {
  
type  Props  = { 
	onSearch:  Function; 
};

type  QueryParams  = {
	minValue?:  number;
	maxValue?:  number;
};

export  function  Filter({ onSearch }:  Props) {
	const [queryParams, setQueryParams] =  useState<QueryParams>({});
	
	function  handleSubmit(event:  any) {
		event.preventDefault();
		const  min  =  queryParams.minValue  ||  0;
		const  max  =  queryParams.maxValue  ||  Number.MAX_VALUE;
		onSearch(min, max);
	} 
(...)

//variavel de escopo Global : 

import { createContext } from  "react";

export  type  ContextProductCountType  = {
	contextProductCount:  number;
	setContextProductCount: (contextCartCount:  number) =>  void;
};
 
export  const  ContextProductCount  =  createContext<ContextProductCountType>({
	contextProductCount:  0,
	setContextProductCount: () => {},
});
```

