<form>
<div class="modal-body">
    <label class="form-label">Informe seu nome: </label>
    <input asp-for="nome" type="text" class="form-control form-control-sm"/>
        <select asp-for="destino" style="display: none;">
            <option selected id="DestinoInput"></option>
        </select>
        <label class="form-label">Telefone</label>
       <input asp-for="telefone" type="text" class="form-control form-control-sm" placeholder="(99) 9 9999-9999"/>
        <br/>
        <select asp-for="formaPagamento" class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option selected>Forma de pagamento</option>
            <option value="Boleto">Boleto</option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Depósito">Depósito</option>
            <option value="PIX">PIX</option>
        </select>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Desistir</button>
    <button type="submit" class="btn btn-primary">Agendar</button>
</div>
</form>