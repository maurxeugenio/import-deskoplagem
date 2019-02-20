
function get_deskoplagem(args){
    $('html').append(`<iframe id="desklopagemIframe" src="https://deskoplagem.dbdesk.com.br/${args['hash']}/" width="400" height="600"></iframe>
    <button id="desklopagemBTN" type="button" onclick="show()" name="button">${args['text'] ? args['text']: 'Auto atendimento'}</button>

    <style media="screen">
    #desklopagemIframe{
        float: right;
        position: absolute;
        bottom: 12%;
        right: 5%;
        overflow: hidden;
        border: none;
        display: none;
        border-radius: 2px;
        box-shadow: 2px 2px 10px rgba(0,0,0,.5);

    }
    
    #desklopagemBTN{
        min-width: 200px;
        width:auto;
        background-color: ${ args['btnBG'] ? args['btnBG'] : '#000'};
        color: ${args['btnColor'] ? args['btnColor'] : 'white'};
        height: 60px;
        position: absolute;
        float: right;
        right: 5%;
        bottom: 4%;
        border-radius: 5px;
        border: none;
        overflow: hidden;
        font-size: 14pt;
        box-shadow: 2px 2px 5px rgba(0, 0,0, .6);
    }
    button:hover{
        box-shadow: 2px 2px 15px rgba(0, 0,0, .8);
    }
    </style>
    `)
}

function show(){
    $('#desklopagemIframe').toggle();
}
