"use strict";

var total_missouri = 0;
var total_biden = 0;
var total_trump = 0;
var total_other = 0;

//This line below looks for the element in the HTML that has the id of "electionResults"
var electionResultsHolder = document.getElementById("electionResults");

//This is spreadsheet data that has been turned into a JSON
var missouri_election_data = [{"county_name":"Adair","percent_biden":"35.89%","votes_biden":"3710","percent_trump":"60.45%","votes_trump":"6413","percent_other":"2.06%","votes_other":"213","votes_total":"10.336"},
{"county_name":"Andrew","percent_biden":"23.75%","votes_biden":"2351","percent_trump":"73.30%","votes_trump":"7255","percent_other":"1.48%","votes_other":"146","votes_total":"9.898"},
{"county_name":"Atchison","percent_biden":"19.69%","votes_biden":"564","percent_trump":"76.75%","votes_trump":"2199","percent_other":"1.78%","votes_other":"51","votes_total":"2.865"},
{"county_name":"Audrain","percent_biden":"24.86%","votes_biden":"2704","percent_trump":"71.09%","votes_trump":"7732","percent_other":"2.02%","votes_other":"220","votes_total":"10.876"},
{"county_name":"Barry","percent_biden":"18.63%","votes_biden":"2948","percent_trump":"78.52%","votes_trump":"12425","percent_other":"1.42%","votes_other":"225","votes_total":"15.823"},
{"county_name":"Barton","percent_biden":"13.74%","votes_biden":"844","percent_trump":"84.14%","votes_trump":"5168","percent_other":"1.06%","votes_other":"65","votes_total":"6.142"},
{"county_name":"Bates","percent_biden":"19.53%","votes_biden":"1672","percent_trump":"77.04%","votes_trump":"6597","percent_other":"1.72%","votes_other":"147","votes_total":"8.563"},
{"county_name":"Benton","percent_biden":"20.44%","votes_biden":"2180","percent_trump":"76.05%","votes_trump":"8109","percent_other":"1.75%","votes_other":"187","votes_total":"10.663"},
{"county_name":"Bollinger","percent_biden":"12.40%","votes_biden":"750","percent_trump":"85.42%","votes_trump":"5167","percent_other":"1.09%","votes_other":"66","votes_total":"6.049"},
{"county_name":"Boonne","percent_biden":"53.47%","votes_biden":"50064","percent_trump":"41.28%","votes_trump":"38646","percent_other":"2.63%","votes_other":"2.458","votes_total":"93.626"},
{"county_name":"Buchanan","percent_biden":"36.04%","votes_biden":"13445","percent_trump":"60.19%","votes_trump":"22450","percent_other":"1.88%","votes_other":"703","votes_total":"37.301"},
{"county_name":"Butler","percent_biden":"17.96%","votes_biden":"3301","percent_trump":"79.45%","votes_trump":"14602","percent_other":"1.29%","votes_other":"238","votes_total":"18.379"},
{"county_name":"Caldwell","percent_biden":"18.92%","votes_biden":"897","percent_trump":"78.55%","votes_trump":"3725","percent_other":"1.27%","votes_other":"60","votes_total":"4.742"},
{"county_name":"Callaway","percent_biden":"27.17%","votes_biden":"5870","percent_trump":"68.58%","votes_trump":"14815","percent_other":"2.12%","votes_other":"459","votes_total":"21.603"},
{"county_name":"Camden","percent_biden":"22.50%","votes_biden":"5652","percent_trump":"75.03%","votes_trump":"18850","percent_other":"1.23%","votes_other":"310","votes_total":"25.122"},
{"county_name":"Cape Girardeau","percent_biden":"26.25%","votes_biden":"10760","percent_trump":"70.52%","votes_trump":"28907","percent_other":"1.61%","votes_other":"661","votes_total":"40.989"},
{"county_name":"Carroll","percent_biden":"17.19%","votes_biden":"786","percent_trump":"81.06%","votes_trump":"3706","percent_other":"0.87%","votes_other":"40","votes_total":"4.572"},
{"county_name":"Carter","percent_biden":"14.29%","votes_biden":"418","percent_trump":"83.79%","votes_trump":"2451","percent_other":"0.96%","votes_other":"28","votes_total":"2.925"},
{"county_name":"Cass","percent_biden":"32.53%","votes_biden":"19052","percent_trump":"63.51%","votes_trump":"37197","percent_other":"1.98%","votes_other":"1.159","votes_total":"58.567"},
{"county_name":"Cedar","percent_biden":"16.00%","votes_biden":"1145","percent_trump":"80.89%","votes_trump":"5788","percent_other":"1.55%","votes_other":"111","votes_total":"7.155"},
{"county_name":"Chariton","percent_biden":"22.20%","votes_biden":"916","percent_trump":"75.38%","votes_trump":"3111","percent_other":"1.21%","votes_other":"50","votes_total":"4.127"},
{"county_name":"Christian","percent_biden":"23.37%","votes_biden":"11131","percent_trump":"73.32%","votes_trump":"34920","percent_other":"1.65%","votes_other":"788","votes_total":"47.627"},
{"county_name":"Clark","percent_biden":"19.72%","votes_biden":"678","percent_trump":"77.72%","votes_trump":"2672","percent_other":"1.28%","votes_other":"44","votes_total":"3.438"},
{"county_name":"Clay","percent_biden":"46.00%","votes_biden":"59400","percent_trump":"50.03%","votes_trump":"64605","percent_other":"1.99%","votes_other":"2.564","votes_total":"129.133"},
{"county_name":"Clinton","percent_biden":"26.13%","votes_biden":"2896","percent_trump":"70.38%","votes_trump":"7799","percent_other":"1.74%","votes_other":"193","votes_total":"11.081"},
{"county_name":"Cole","percent_biden":"31.52%","votes_biden":"12694","percent_trump":"64.76%","votes_trump":"26086","percent_other":"1.86%","votes_other":"749","votes_total":"40.278"},
{"county_name":"Cooper","percent_biden":"25.37%","votes_biden":"2249","percent_trump":"70.75%","votes_trump":"6272","percent_other":"1.94%","votes_other":"172","votes_total":"8.865"},
{"county_name":"Crawford","percent_biden":"19.02%","votes_biden":"2113","percent_trump":"78.55%","votes_trump":"8725","percent_other":"1.22%","votes_other":"135","votes_total":"11.108"},
{"county_name":"Dade","percent_biden":"15.74%","votes_biden":"656","percent_trump":"81.91%","votes_trump":"3414","percent_other":"1.18%","votes_other":"49","votes_total":"4.168"},
{"county_name":"Dallas","percent_biden":"16.81%","votes_biden":"1380","percent_trump":"80.63%","votes_trump":"6619","percent_other":"1.28%","votes_other":"105","votes_total":"8.209"},
{"county_name":"Daviess","percent_biden":"18.77%","votes_biden":"746","percent_trump":"78.06%","votes_trump":"3102","percent_other":"1.59%","votes_other":"63","votes_total":"3.974"},
{"county_name":"De Kalb","percent_biden":"18.87%","votes_biden":"930","percent_trump":"77.68%","votes_trump":"3828","percent_other":"1.72%","votes_other":"85","votes_total":"4.928"},
{"county_name":"Dent","percent_biden":"14.58%","votes_biden":"1056","percent_trump":"82.68%","votes_trump":"5987","percent_other":"1.37%","votes_other":"99","votes_total":"7.241"},
{"county_name":"Douglas","percent_biden":"14.34%","votes_biden":"1016","percent_trump":"83.23%","votes_trump":"5898","percent_other":"1.21%","votes_other":"86","votes_total":"7.086"},
{"county_name":"Dunklin","percent_biden":"20.95%","votes_biden":"2200","percent_trump":"77.45%","votes_trump":"8135","percent_other":"0.80%","votes_other":"84","votes_total":"10.503"},
{"county_name":"Franklin","percent_biden":"26.61%","votes_biden":"14569","percent_trump":"69.52%","votes_trump":"38058","percent_other":"1.93%","votes_other":"1.058","votes_total":"54.743"},
{"county_name":"Gasconade","percent_biden":"19.96%","votes_biden":"1601","percent_trump":"77.55%","votes_trump":"6222","percent_other":"1.25%","votes_other":"100","votes_total":"8.023"},
{"county_name":"Gentry","percent_biden":"18.69%","votes_biden":"613","percent_trump":"78.69%","votes_trump":"2581","percent_other":"1.31%","votes_other":"43","votes_total":"3.280"},
{"county_name":"Greene","percent_biden":"38.00%","votes_biden":"55068","percent_trump":"57.71%","votes_trump":"83630","percent_other":"2.14%","votes_other":"3.102","votes_total":"144.902"},
{"county_name":"Grundy","percent_biden":"17.80%","votes_biden":"799","percent_trump":"79.84%","votes_trump":"3585","percent_other":"1.18%","votes_other":"53","votes_total":"4.490"},
{"county_name":"Harrison","percent_biden":"15.48%","votes_biden":"597","percent_trump":"82.91%","votes_trump":"3198","percent_other":"0.80%","votes_other":"31","votes_total":"3.857"},
{"county_name":"Henry","percent_biden":"23.96%","votes_biden":"2619","percent_trump":"73.44%","votes_trump":"8027","percent_other":"1.30%","votes_other":"142","votes_total":"10.930"},
{"county_name":"Hickory","percent_biden":"20.55%","votes_biden":"1056","percent_trump":"77.19%","votes_trump":"3966","percent_other":"1.13%","votes_other":"58","votes_total":"5.138"},
{"county_name":"Holt","percent_biden":"14.25%","votes_biden":"338","percent_trump":"83.31%","votes_trump":"1976","percent_other":"1.22%","votes_other":"29","votes_total":"2.372"},
{"county_name":"Howard","percent_biden":"27.08%","votes_biden":"1413","percent_trump":"68.09%","votes_trump":"3553","percent_other":"2.41%","votes_other":"126","votes_total":"5.218"},
{"county_name":"Howell","percent_biden":"17.03%","votes_biden":"3218","percent_trump":"80.32%","votes_trump":"15181","percent_other":"1.33%","votes_other":"251","votes_total":"18.901"},
{"county_name":"Iron","percent_biden":"20.35%","votes_biden":"945","percent_trump":"77.45%","votes_trump":"3596","percent_other":"1.10%","votes_other":"51","votes_total":"4.643"},
{"county_name":"Jackson","percent_biden":"60.00%","votes_biden":"199842","percent_trump":"37.24%","votes_trump":"126535","percent_other":"1.97%","votes_other":"6.686","votes_total":"333.063"},
{"county_name":"Jasper","percent_biden":"25.36%","votes_biden":"13549","percent_trump":"70.62%","votes_trump":"37728","percent_other":"2.01%","votes_other":"1.075","votes_total":"53.427"},
{"county_name":"Jefferson","percent_biden":"31.58%","votes_biden":"37523","percent_trump":"64.85%","votes_trump":"77046","percent_other":"1.78%","votes_other":"2.119","votes_total":"118.807"},
{"county_name":"Johnson","percent_biden":"29.32%","votes_biden":"6974","percent_trump":"65.13%","votes_trump":"15489","percent_other":"2.78%","votes_other":"660","votes_total":"23.783"},
{"county_name":"Knox","percent_biden":"18.07%","votes_biden":"340","percent_trump":"78.96%","votes_trump":"1486","percent_other":"1.49%","votes_other":"28","votes_total":"1.882"},
{"county_name":"Laclede","percent_biden":"16.31%","votes_biden":"2780","percent_trump":"80.74%","votes_trump":"13762","percent_other":"1.47%","votes_other":"251","votes_total":"17.044"},
{"county_name":"Lafayette","percent_biden":"25.75%","votes_biden":"4472","percent_trump":"70.68%","votes_trump":"12273","percent_other":"1.79%","votes_other":"310","votes_total":"17.365"},
{"county_name":"Lawrence","percent_biden":"17.69%","votes_biden":"3214","percent_trump":"79.39%","votes_trump":"14426","percent_other":"1.46%","votes_other":"265","votes_total":"18.170"},
{"county_name":"Lewis","percent_biden":"21.02%","votes_biden":"984","percent_trump":"75.90%","votes_trump":"3553","percent_other":"1.54%","votes_other":"72","votes_total":"4.681"},
{"county_name":"Lincoln","percent_biden":"22.34%","votes_biden":"6607","percent_trump":"73.86%","votes_trump":"21848","percent_other":"1.90%","votes_other":"563","votes_total":"29.581"},
{"county_name":"Linn","percent_biden":"21.93%","votes_biden":"1275","percent_trump":"75.04%","votes_trump":"4363","percent_other":"1.51%","votes_other":"88","votes_total":"5.814"},
{"county_name":"Livingston","percent_biden":"20.62%","votes_biden":"1410","percent_trump":"77.01%","votes_trump":"5267","percent_other":"1.18%","votes_other":"81","votes_total":"6.839"},
{"county_name":"Macon","percent_biden":"20.95%","votes_biden":"1662","percent_trump":"76.58%","votes_trump":"6076","percent_other":"1.24%","votes_other":"98","votes_total":"7.934"},
{"county_name":"Madison","percent_biden":"17.72%","votes_biden":"1019","percent_trump":"79.74%","votes_trump":"4584","percent_other":"1.27%","votes_other":"73","votes_total":"5.749"},
{"county_name":"Maries","percent_biden":"16.83%","votes_biden":"814","percent_trump":"80.48%","votes_trump":"3892","percent_other":"1.34%","votes_other":"65","votes_total":"4.836"},
{"county_name":"Marion","percent_biden":"23.58%","votes_biden":"3202","percent_trump":"73.02%","votes_trump":"9915","percent_other":"1.70%","votes_other":"231","votes_total":"13.579"},
{"county_name":"McDonald","percent_biden":"15.64%","votes_biden":"1439","percent_trump":"81.12%","votes_trump":"7465","percent_other":"1.62%","votes_other":"149","votes_total":"9.202"},
{"county_name":"Mercer","percent_biden":"12.37%","votes_biden":"222","percent_trump":"85.85%","votes_trump":"1541","percent_other":"0.89%","votes_other":"16","votes_total":"1.795"},
{"county_name":"Miller","percent_biden":"16.24%","votes_biden":"2038","percent_trump":"81.08%","votes_trump":"10176","percent_other":"1.34%","votes_other":"168","votes_total":"12.550"},
{"county_name":"Mississippi","percent_biden":"24.56%","votes_biden":"1178","percent_trump":"73.73%","votes_trump":"3537","percent_other":"0.85%","votes_other":"41","votes_total":"4.797"},
{"county_name":"Moniteau","percent_biden":"18.01%","votes_biden":"1308","percent_trump":"79.10%","votes_trump":"5744","percent_other":"1.45%","votes_other":"105","votes_total":"7.262"},
{"county_name":"Monroe","percent_biden":"20.56%","votes_biden":"936","percent_trump":"76.37%","votes_trump":"3477","percent_other":"1.54%","votes_other":"70","votes_total":"4.553"},
{"county_name":"Montgomery","percent_biden":"20.58%","votes_biden":"1208","percent_trump":"76.05%","votes_trump":"4465","percent_other":"1.69%","votes_other":"99","votes_total":"5.871"},
{"county_name":"Morgan","percent_biden":"20.02%","votes_biden":"1924","percent_trump":"77.46%","votes_trump":"7442","percent_other":"1.26%","votes_other":"121","votes_total":"9.608"},
{"county_name":"New Madrid","percent_biden":"23.93%","votes_biden":"1748","percent_trump":"74.57%","votes_trump":"5447","percent_other":"0.75%","votes_other":"55","votes_total":"7.305"},
{"county_name":"Newton","percent_biden":"20.15%","votes_biden":"5818","percent_trump":"76.61%","votes_trump":"22120","percent_other":"1.62%","votes_other":"467","votes_total":"28.872"},
{"county_name":"Nodaway","percent_biden":"28.34%","votes_biden":"2853","percent_trump":"68.19%","votes_trump":"6865","percent_other":"1.74%","votes_other":"175","votes_total":"10.068"},
{"county_name":"Oregon","percent_biden":"17.12%","votes_biden":"823","percent_trump":"80.01%","votes_trump":"3847","percent_other":"1.44%","votes_other":"69","votes_total":"4.808"},
{"county_name":"Osage","percent_biden":"13.62%","votes_biden":"1037","percent_trump":"84.36%","votes_trump":"6425","percent_other":"1.01%","votes_other":"77","votes_total":"7.616"},
{"county_name":"Ozark","percent_biden":"15.31%","votes_biden":"752","percent_trump":"82.74%","votes_trump":"4064","percent_other":"0.98%","votes_other":"48","votes_total":"4.912"},
{"county_name":"Pemiscot","percent_biden":"26.94%","votes_biden":"1560","percent_trump":"71.16%","votes_trump":"4120","percent_other":"0.95%","votes_other":"55","votes_total":"5.790"},
{"county_name":"Perry","percent_biden":"17.38%","votes_biden":"1664","percent_trump":"79.99%","votes_trump":"7657","percent_other":"1.32%","votes_other":"126","votes_total":"9.573"},
{"county_name":"Pettis","percent_biden":"24.46%","votes_biden":"4783","percent_trump":"70.84%","votes_trump":"13854","percent_other":"2.35%","votes_other":"460","votes_total":"19.557"},
{"county_name":"Phelps","percent_biden":"28.16%","votes_biden":"5637","percent_trump":"67.34%","votes_trump":"13480","percent_other":"2.25%","votes_other":"451","votes_total":"20.019"},
{"county_name":"Pike","percent_biden":"21.98%","votes_biden":"1717","percent_trump":"75.07%","votes_trump":"5863","percent_other":"1.47%","votes_other":"115","votes_total":"7.810"},
{"county_name":"Platte","percent_biden":"46.50%","votes_biden":"27179","percent_trump":"49.48%","votes_trump":"28917","percent_other":"2.01%","votes_other":"1.174","votes_total":"58.444"},
{"county_name":"Polk","percent_biden":"18.74%","votes_biden":"2885","percent_trump":"76.98%","votes_trump":"11850","percent_other":"2.14%","votes_other":"329","votes_total":"15.393"},
{"county_name":"Pulaski","percent_biden":"25.34%","votes_biden":"3740","percent_trump":"69.98%","votes_trump":"10329","percent_other":"2.34%","votes_other":"345","votes_total":"14.759"},
{"county_name":"Putnam","percent_biden":"15.19%","votes_biden":"361","percent_trump":"83.47%","votes_trump":"1984","percent_other":"0.67%","votes_other":"16","votes_total":"2.377"},
{"county_name":"Ralls","percent_biden":"21.06%","votes_biden":"1205","percent_trump":"76.81%","votes_trump":"4396","percent_other":"1.07%","votes_other":"61","votes_total":"5.723"},
{"county_name":"Randolph","percent_biden":"22.62%","votes_biden":"2485","percent_trump":"72.99%","votes_trump":"8018","percent_other":"2.19%","votes_other":"241","votes_total":"10.985"},
{"county_name":"Ray","percent_biden":"26.25%","votes_biden":"3109","percent_trump":"70.46%","votes_trump":"8345","percent_other":"1.65%","votes_other":"195","votes_total":"11.844"},
{"county_name":"Reynolds","percent_biden":"15.87%","votes_biden":"529","percent_trump":"81.97%","votes_trump":"2733","percent_other":"1.08%","votes_other":"36","votes_total":"3.334"},
{"county_name":"Ripley","percent_biden":"14.46%","votes_biden":"833","percent_trump":"83.98%","votes_trump":"4839","percent_other":"0.78%","votes_other":"45","votes_total":"5.762"},
{"county_name":"Saline","percent_biden":"29.99%","votes_biden":"2904","percent_trump":"66.62%","votes_trump":"6451","percent_other":"1.69%","votes_other":"164","votes_total":"9.683"},
{"county_name":"Schuyler","percent_biden":"18.40%","votes_biden":"373","percent_trump":"79.23%","votes_trump":"1606","percent_other":"1.18%","votes_other":"24","votes_total":"2.027"},
{"county_name":"Scotland","percent_biden":"19.21%","votes_biden":"388","percent_trump":"77.23%","votes_trump":"1560","percent_other":"1.78%","votes_other":"36","votes_total":"2.020"},
{"county_name":"Scott","percent_biden":"20.95%","votes_biden":"3753","percent_trump":"76.85%","votes_trump":"13769","percent_other":"1.10%","votes_other":"197","votes_total":"17.916"},
{"county_name":"Shannon","percent_biden":"17.91%","votes_biden":"706","percent_trump":"80.31%","votes_trump":"3165","percent_other":"0.89%","votes_other":"35","votes_total":"3.941"},
{"county_name":"Shelby","percent_biden":"17.37%","votes_biden":"592","percent_trump":"79.23%","votes_trump":"2700","percent_other":"1.70%","votes_other":"58","votes_total":"3.408"},
{"county_name":"St. Charles","percent_biden":"39.59%","votes_biden":"89530","percent_trump":"56.78%","votes_trump":"128389","percent_other":"1.81%","votes_other":"4.098","votes_total":"226.115"},
{"county_name":"St. Clair","percent_biden":"19.65%","votes_biden":"988","percent_trump":"78.20%","votes_trump":"3932","percent_other":"1.07%","votes_other":"54","votes_total":"5.028"},
{"county_name":"St. Francois","percent_biden":"24.76%","votes_biden":"7044","percent_trump":"72.10%","votes_trump":"20511","percent_other":"1.57%","votes_other":"446","votes_total":"28.447"},
{"county_name":"Sainte Lewis","percent_biden":"60.18%","votes_biden":"328151","percent_trump":"36.59%","votes_trump":"199493","percent_other":"1.61%","votes_other":"8.802","votes_total":"545.248"},
{"county_name":"Sainte Loois City","percent_biden":"80.85%","votes_biden":"110089","percent_trump":"15.77%","votes_trump":"21474","percent_other":"1.69%","votes_other":"2.304","votes_total":"136.171"},
{"county_name":"Ste. Genevieve","percent_biden":"28.19%","votes_biden":"2713","percent_trump":"68.88%","votes_trump":"6630","percent_other":"1.46%","votes_other":"141","votes_total":"9.625"},
{"county_name":"Stoddard","percent_biden":"13.43%","votes_biden":"1819","percent_trump":"84.76%","votes_trump":"11484","percent_other":"0.91%","votes_other":"123","votes_total":"13.549"},
{"county_name":"Stone","percent_biden":"18.79%","votes_biden":"3506","percent_trump":"79.31%","votes_trump":"14800","percent_other":"0.95%","votes_other":"177","votes_total":"18.660"},
{"county_name":"Sullivan","percent_biden":"19.20%","votes_biden":"478","percent_trump":"79.28%","votes_trump":"1974","percent_other":"0.76%","votes_other":"19","votes_total":"2.490"},
{"county_name":"Taney","percent_biden":"19.97%","votes_biden":"5339","percent_trump":"76.73%","votes_trump":"20508","percent_other":"1.65%","votes_other":"441","votes_total":"26.729"},
{"county_name":"Texas","percent_biden":"15.01%","votes_biden":"1716","percent_trump":"82.88%","votes_trump":"9478","percent_other":"1.06%","votes_other":"121","votes_total":"11.436"},
{"county_name":"Vernon","percent_biden":"20.44%","votes_biden":"1903","percent_trump":"76.84%","votes_trump":"7155","percent_other":"1.36%","votes_other":"127","votes_total":"9.312"},
{"county_name":"Warren","percent_biden":"25.42%","votes_biden":"4769","percent_trump":"70.48%","votes_trump":"13222","percent_other":"2.05%","votes_other":"384","votes_total":"18.759"},
{"county_name":"Washington","percent_biden":"17.86%","votes_biden":"1804","percent_trump":"79.67%","votes_trump":"8047","percent_other":"1.24%","votes_other":"125","votes_total":"10.101"},
{"county_name":"Wayne","percent_biden":"14.26%","votes_biden":"845","percent_trump":"84.18%","votes_trump":"4987","percent_other":"0.78%","votes_other":"46","votes_total":"5.924"},
{"county_name":"Webster","percent_biden":"18.70%","votes_biden":"3573","percent_trump":"77.89%","votes_trump":"14880","percent_other":"1.71%","votes_other":"326","votes_total":"19.105"},
{"county_name":"Worth","percent_biden":"19.16%","votes_biden":"215","percent_trump":"78.16%","votes_trump":"877","percent_other":"1.34%","votes_other":"15","votes_total":"1.122"},
{"county_name":"Wright","percent_biden":"13.19%","votes_biden":"1168","percent_trump":"84.15%","votes_trump":"7453","percent_other":"1.33%","votes_other":"118","votes_total":"8.857"}];

//The code below goes through each item of missouri_election_data
missouri_election_data.forEach((item) => {

var county_winner;

//These five lines compare votes_biden to votes_trump
if (Number(item.votes_biden) > Number(item.votes_trump)) {
  county_winner = "biden_won";
} else {
  county_winner = "trump_won";
}

//This line looks at votes_total, and changes the periods in the vote data to become a comma.
item.votes_total = item.votes_total.split(".").join(",");

var county_results = '<section class="county-holder '+county_winner+'"><h2>'+item.county_name+'</h2><p><strong>Total votes:</strong> '+item.votes_total+'</p><p><strong>Votes for Biden:</strong> '+item.votes_biden+'</p><p><strong>Votes for Trump:</strong> '+item.votes_trump+'</p></section>'

electionResultsHolder.innerHTML = electionResultsHolder.innerHTML + county_results;

});
