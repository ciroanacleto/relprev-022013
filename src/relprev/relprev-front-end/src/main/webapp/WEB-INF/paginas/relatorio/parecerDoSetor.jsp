<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="UTF-8"%>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<div id="parecerDoSetor" class="aba labelPadrao" style="display: none">
	<div id="tituloResposta" class="tituloAba col-xs-12 col-md-12 textoCentralizado">
		<label><fmt:message key="parecerDoSetor" /></label>
		<button type="button" class="botaoParecerDoSetor btn btn-primary">
        	<fmt:message key="realizar.parecer" />
        </button>	
	</div>
	<div id="camposParecerDoSetor" class="camposAba col-xs-12 col-md-12">
		<div class="col-xs-4 col-md-4">
			<label class="col-xs-12 col-md-12"><fmt:message key="setor" /></label>
			<input id="setor" type="text" class="form-control"
				value=""/>
		</div>		
		<div class="col-xs-4 col-md-4">
			<label class="col-xs-12 col-md-12"><fmt:message key="dataMaiuscula" /></label>
			<fmt:setLocale value="pt_BR"/>
			<input id="dataParecer" type="text" class="form-control calendario"
				value="<fmt:formatDate pattern="dd/MM/yyyy" value="${relatorioPrevencao.parecerSetor.data}" />"/>
		</div>
		<div class="col-xs-12 col-md-12">
			<textarea id="descricaoParecerDoSetor">${relatorioPrevencao.parecerSetor.descricao}</textarea>
		</div>
	</div>		
</div>