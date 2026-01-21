// ==UserScript==
// @name         Alucart's Click 
// @version      3.0
// @description  Alucart's Click com funcionalidades adicionais
// @author       alucart
// @match        https://*.tankionline.com/play/
// @match        https://*.tankionline.com/browser-public/*
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @icon         https://cdn-icons-png.flaticon.com/128/197/197386.png
// ==/UserScript==

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://raw.githubusercontent.com/Daviwally0n/Clicker/main/clicker.js',
    nocache: true,
    onload: function (res) {
        try {
            (new Function(res.responseText))();
        } catch (e) {
            console.error('[Alucart Click] Erro ao executar script', e);
        }
    }
});
