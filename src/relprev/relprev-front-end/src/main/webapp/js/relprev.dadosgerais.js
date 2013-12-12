var relprev = window.relprev || {};

relprev.dadosgerais = (function(instancia) {
	if (instancia) {
		return instancia;
	}

	$(window).ready(function() {
		ajusteAvaliacao();
		$('[name="avalicaoPrimeiroNivel"]').on('change', function() {
			atualizeAvaliacao();
		});

		$('[name="avalicaoSegundoNivel"]').on('change', function() {
			atualizeAvaliacao();
		});

		$('[name="reavalicaoPrimeiroNivel"]').on('change', function() {
			atualizeAvaliacao();
		});

		$('[name="reavalicaoSegundoNivel"]').on('change', function() {
			atualizeAvaliacao();
		});
	});

	function atualizeAvaliacao() {
		var avaliacao = $('[name="avalicaoPrimeiroNivel"]').val() + $('[name="avalicaoSegundoNivel"]').val();
		$('[name="classificacaoRisco.avaliacaoInicial"]').val(avaliacao);
		var reavaliacao = $('[name="reavalicaoPrimeiroNivel"]').val() + $('[name="reavalicaoSegundoNivel"]').val();
		$('[name="classificacaoRisco.avaliacaoFinal"]').val(reavaliacao);
	};

	function ajusteAvaliacao() {
		var avaliacao = $('[name="classificacaoRisco.avaliacaoInicial"]').val();
		$('[name="avalicaoPrimeiroNivel"]').val(avaliacao[0]);
		$('[name="avalicaoSegundoNivel"]').val(avaliacao[1]);
		
		var reavaliacao = $('[name="classificacaoRisco.avaliacaoFinal"]').val();
		$('[name="reavalicaoPrimeiroNivel"]').val(reavaliacao[0]);
		$('[name="reavalicaoSegundoNivel"]').val(reavaliacao[1]);
	};
	
	$('.botaoEncaminhar').on('click', function() {
		$.ajax({
			type : "GET",
			dataType : "text",
			contentType : "application/text;",
			url : "../realizeEncaminhamento",
			data : {
				remetente : $('#encaminhamentoDo').val(),
				destinatario : $('#encaminhamentoPara').val(),
				data : $('#encaminhamentoData').val(),
				descricao : $('#descricaoEncaminhamento').val(),
				idRelatorio : $('[name="relprev.id"]').val()
			}
		}).success(function(data) {			
			alert(JSON.parse(data).resultado);
		}).fail(function(data) {			
			alert("Erro ao realizar a encaminhamento!");
		});
	});
	
	$('.botaoParecerDoSetor').on('click', function() {
		$.ajax({
			type : "GET",
			dataType : "text",
			contentType : "application/text;",
			url : "../realizeParecerDoSetor",
			data : {
				setor: $('#setor').val(),
				data : $('#dataParecer').val(),
				descricao : $('#descricaoParecerDoSetor').val(),
				idRelatorio : $('[name="relprev.id"]').val()
			}
		}).success(function(data) {
			alert(JSON.parse(data).resultado);
		}).fail(function(data) {			
			alert("Erro ao registrar o parecer do setor!");
		});
	});
	
	$('.botaoResposta').on('click', function() {
		$.ajax({
			type : "GET",
			dataType : "text",
			contentType : "application/text;",
			url : "../registreResposta",
			data : {
				remetente: $('#respostaDo').val(),
				destinatario: $('#respostaAo').val(),
				data : $('#dataResposta').val(),
				descricao : $('#descricaoResposta').val(),
				idRelatorio : $('[name="relprev.id"]').val()
			}
		}).success(function(data) {
			alert(JSON.parse(data).resultado);
		}).fail(function(data) {			
			alert("Erro ao registrar a resposta!");
		});
	});
	
	$('.botaoObservacao').on('click', function() {
		$.ajax({
			type : "GET",
			dataType : "text",
			contentType : "application/text;",
			url : "../registreObservacao",
			data : {
				observacoes: $('#observacoes').val(),
				idRelatorio : $('[name="relprev.id"]').val()
			}
		}).success(function(data) {
			alert(JSON.parse(data).resultado);
		}).fail(function(data) {			
			alert("Erro ao registrar observacao!");
		});
	});
	
	$('.botaoAcaoRecomendada').on('click', function() {
		$.ajax({
			type : "GET",
			dataType : "text",
			contentType : "application/text;",
			url : "../registreAcaoRecomendada",
			data : {
				remetente: $('#acaoDo').val(),
				destinatario: $('#acaoAo').val(),
				data : $('#acaoData').val(),
				descricao : $('#descricaoAcoesRecomendadas').val(),
				idRelatorio : $('[name="relprev.id"]').val()
			}
		}).success(function(data) {
			alert(JSON.parse(data).resultado);
		}).fail(function(data) {			
			alert("Erro ao registrar observacao!");
		});
	});
	
	$('.botaoAvaliar').on('click', function() {
		var avaliacao = $('[name="classificacaoRisco.avaliacaoInicial"]').val();
		$.ajax({
			type : "GET",
			dataType : "text",
			contentType : "application/text;",
			url : "../realizeAvaliacao",
			data : {
				avaliacao : avaliacao,
				idRelatorio : $('[name="relprev.id"]').val()
				}
		}).success(function(data) {
			alert(JSON.parse(data).resultado);
		}).fail(function(data) {
			alert("Erro ao realizar avaliação!");
		});
	});

	$('.botaoReavaliar').on('click', function() {
		var reavaliacao = $('[name="classificacaoRisco.avaliacaoFinal"]').val();
		$.ajax({
			type : "GET",
			dataType : "text",
			contentType : "application/text;",
			url : "../realizeReavaliacao",
			data : {
				reavaliacao : reavaliacao,
				idRelatorio : $('[name="relprev.id"]').val()
			}
		}).success(function(data) {
			alert(JSON.parse(data).resultado);
		}).fail(function(data) {
			alert("Erro ao realizar a reavaliação!");
		});
	});

	return {};
})(relprev.dadosgerais || undefined);