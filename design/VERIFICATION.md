# Verificação — 25/10/2026

- Oito artes geradas pelo motor integrado, com arquivos originais e prompts salvos. Conceito visual produzido antes da implementação.
- Quatro PNGs de países com alpha real (intervalo 0–255): Brasil, Japão, Itália e EUA continentais.
- Revisão visual do hero em desktop e da página em viewport de celular de 390 px. Sem overflow horizontal.
- Comparativo, galeria, conteúdo do curso e oferta inspecionados no celular.
- A barra de compra aparece após o CTA do hero e some quando o CTA da oferta está visível.
- FAQ aberto no navegador; resposta correta e sem erros no console.
- HTML com IDs únicos, referências locais existentes e cinco CTAs apontando ao checkout confirmado.
- Dimensões dos arquivos conferidas com as declaradas no HTML.
- JavaScript validado com `node --check site.js`; `git diff --check` sem erros.
- CSS sem gradientes; movimento reduzido desativa animações e transições. Fontes auto-hospedadas.
- O HTML servido na raiz do domínio por HTTP correspondeu exatamente ao arquivo local.
- As oito artes WebP, ambas as fontes, CSS e JavaScript retornaram HTTP 200.
- A cópia do Obsidian foi sincronizada, incluindo originais, conceito visual e prompts.

Limitação existente confirmada: o HTTPS do subdomínio ainda apresenta `SEC_E_WRONG_PRINCIPAL` na validação do certificado. A versão verificada foi a URL HTTP. Não foi desativada a validação do certificado.

As cenas são exemplos ilustrativos de estilo, não cartografia validada nem comprovação de desempenho de alunos. A copy identifica o formato atual e a comparação de tempos como exemplo informado pelo criador.
