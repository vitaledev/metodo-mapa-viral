# Reconstrução da landing page cartográfica — Implementation Plan

> **For agentic workers:** implementação contínua nesta sessão, seguindo a ordem pedida pelo criador: gerar todas as artes, revisar, montar a página e publicar.

**Goal:** substituir a versão rejeitada por uma landing page Industrial em preto e vermelho com artes GeoLayers produzidas pelo motor de imagem.

**Architecture:** site estático, CSS e JavaScript próprios, ativos raster locais. Separar conteúdo, apresentação e animações para facilitar a revisão. Preservar checkout e domínio.

**Tech Stack:** HTML, CSS, JavaScript, PNG com transparência e WebP otimizado.

**Spec:** `design/ART-DIRECTION.md` e solicitações do criador nesta conversa.

## Global Constraints

- Gerar e revisar todas as artes antes de montar a página.
- Motor integrado de geração; nenhum SVG para as imagens do site.
- Fundo preto, vermelho #FF3B30, IBM Plex Mono, estrutura plana.
- Glow animado somente nos contornos dos shapes, com movimento reduzido respeitado.
- R$ 97, 1 introdução em vídeo, 9 aulas em texto e 6 skills.
- Checkout https://pay.kiwify.com.br/bAuPiQh em todos os botões de compra.
- Nenhuma falsa prova social, renda garantida, escassez ou dado inventado.

## Review Focus

- PNG do Brasil: contorno reconhecível, bandeira fiel e alpha real.
- 390 px: headline, mapa e CTA legíveis, sem overflow.
- Movimento reduzido: glow e parallax desativados.
- Página com JavaScript indisponível: conteúdo e compra utilizáveis.
- Publicação: HTML e imagens novos realmente servidos pelo domínio.

## Task 1: Artes e curadoria

**Files:** `design/prompts.json`, `design/originals/`, `assets/`.

- [x] Gerar todos os ativos com o motor integrado.
- [x] Inspecionar cada saída e corrigir falhas visíveis com o motor.
- [x] Copiar originais para o projeto e otimizar formatos sem recriar as imagens.
- [x] Registrar prompts, caminhos e uso de cada ativo.

## Task 2: Página e composição

**Files:** `index.html`, `styles.css`, `site.js`.

- [x] Implementar a composição do brief com imagens selecionadas.
- [x] Rever copy e dados da oferta.
- [x] Conferir referências, checkout e comportamento de movimento reduzido.
- [x] Inspecionar no navegador em desktop e mobile e corrigir a composição.

## Task 3: Publicação

**Files:** `README.md`, cópia em `D:/Obsidian/Vida nova/Projetos/VitaleGeo/Curso/landing-page`.

- [ ] Sincronizar a cópia de trabalho do Obsidian.
- [ ] Rever diff e publicar no GitHub Pages.
- [ ] Confirmar conteúdo e ativos servidos pelo domínio e registrar estado real do HTTPS.
