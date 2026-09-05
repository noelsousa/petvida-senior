# Refatoração da landing page PetVida Sênior

## Objetivo
Transformar a página atual em uma experiência mais curta, emocional e direta, priorizando conversão e leitura confortável em celulares.

## O que será alterado
- Reconstruir a primeira dobra com mensagem imediata, foto de cão e gato idosos, mockup do guia, benefícios curtos e CTA destacado.
- Reduzir a página às dez seções solicitadas, com títulos fortes, textos enxutos e alternância visual limpa.
- Atualizar os bônus e a oferta para a nova apresentação: de R$69,90 por R$29,90, pagamento único, acesso imediato e garantia de 7 dias.
- Manter o aviso educativo e deixar claro que o guia não substitui acompanhamento veterinário.
- Manter todos os links legais e o botão fixo de compra no celular, ocultando-o quando a oferta estiver visível.

## Rastreamento e compra
- Preservar o PageView existente e o evento ViewContent atual.
- Usar a função única existente para disparar InitiateCheckout antes de todos os redirecionamentos.
- Preservar UTMs e fbclid, sem adicionar Purchase ou escassez falsa.

## Qualidade e validação
- Otimizar os arquivos visuais para formatos modernos e carregar primeiro apenas o que aparece no topo.
- Verificar largura, imagens, contraste, sobreposições e funcionamento dos CTAs em 320, 360, 375, 390 e 430 px.
- Validar FAQ, navegação por teclado e ausência de erros no navegador.
