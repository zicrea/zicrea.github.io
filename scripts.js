//Afficher la liste des numéros dans le select
$(document).ready(function(){
            $.ajax({
                      type:'post',
                      url:'senmoney.php',
                       datatype:'json',
                      success:function(data){
	
					  data = JSON.parse(data);

					  var len = data.length;
					  for(var i=0; i<len; i++) {
					  var numCompte= data[i]["numero"];
$('#numero').append("<option value='"+numCompte+"'>"+numCompte+"</option>");

		    }
           }

         })
       })

//Afficher la fonction menu après click sur #221#
function menu(){
	var choix=window.prompt("------MENU SENMONEY------\n"+
	"Taper le numéro du service choisi\n"+
	"1: Solde de mon compte\n"+
	"2: Transfert d'argent\n"+
	"3: Paiement de facture\n"+
	"4: Options\n");

	switch(choix)
	{
		case "1" : afficherSolde();

		break;
		
		case "2": afficherTransfert();
		
		break;
		
		case "3" :afficherPaiement();
		break;

		case "4" : afficherOption();
		break;
		
		default :menu();
	}
}
//Afficher le solde correspondant au numéro choisi 

 function afficherSolde(){
    var numero = document.getElementById("numero").value; 
    var data = JSON.parse(data);
    obj = verifNum(numero, data);
    
			var choix=window.confirm("Le solde de votre compte est "+obj.solde+
			"\n Voulez-vous retourner au menu ?");
			if(choix==true){
				menu();
		
	}
}
//Fonction de transfert d'argent

	 function afficherTransfert(){
		var numero = document.getElementById("numero").value; 
		var data = JSON.parse(data);
		obj = verifNum(numero, data);
		
            var montant = window.prompt("Entrez le montant que vous voulez transférer");
            var numDest = window.prompt("Entrez le numéro du destinataire");
            var code = window.prompt("Entrer votre code secret");
			if(code == obj.code){
				var choix=window.confirm("Transfert effectuée "+
                "\n Voulez-vous retourner au menu ?");
                solde = solde -parseInt(mont);
				if(choix==true){
					menu();
				}	
			}else{
				var choix=window.confirm("Code éroné\n Voulez-vous retourner au menu ?");
				if(choix==true){
					menu();
				}
			}
		}
	
